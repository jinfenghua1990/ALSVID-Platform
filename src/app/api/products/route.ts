import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const products = await db.productModel.findMany({
    include: { platform: true },
    orderBy: { code: "asc" },
  });

  return NextResponse.json({ data: products });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.code || !body.name || !body.platformCode) {
    return NextResponse.json(
      { error: "code, name and platformCode are required" },
      { status: 400 }
    );
  }

  const platform = await db.productPlatform.findUnique({
    where: { code: String(body.platformCode).toUpperCase() },
  });

  if (!platform) {
    return NextResponse.json({ error: "Unknown platform" }, { status: 400 });
  }

  const product = await db.productModel.create({
    data: {
      code: String(body.code).toUpperCase(),
      name: String(body.name),
      platformId: platform.id,
      frameMaterial: body.frameMaterial ? String(body.frameMaterial) : null,
      wheelSize: body.wheelSize ? String(body.wheelSize) : null,
      motorPosition: body.motorPosition ? String(body.motorPosition) : null,
    },
    include: { platform: true },
  });

  return NextResponse.json({ data: product }, { status: 201 });
}
