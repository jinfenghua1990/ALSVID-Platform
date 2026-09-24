import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const parts = await db.part.findMany({ orderBy: { sku: "asc" } });
  return NextResponse.json({ data: parts });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.sku || !body.name) {
    return NextResponse.json({ error: "sku and name are required" }, { status: 400 });
  }

  const part = await db.part.create({
    data: {
      sku: String(body.sku).toUpperCase(),
      name: String(body.name),
      category: body.category ? String(body.category) : null,
      manufacturerPartNo: body.manufacturerPartNo ? String(body.manufacturerPartNo) : null,
      description: body.description ? String(body.description) : null,
    },
  });

  return NextResponse.json({ data: part }, { status: 201 });
}
