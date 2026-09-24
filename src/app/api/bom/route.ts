import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  const modelCode = request.nextUrl.searchParams.get("model");

  const items = await db.bomItem.findMany({
    where: modelCode ? { model: { code: modelCode.toUpperCase() } } : undefined,
    include: { model: true, part: true },
    orderBy: [{ model: { code: "asc" } }, { position: "asc" }],
  });

  return NextResponse.json({ data: items });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.modelCode || !body.partSku) {
    return NextResponse.json({ error: "modelCode and partSku are required" }, { status: 400 });
  }

  const model = await db.productModel.findUnique({ where: { code: String(body.modelCode).toUpperCase() } });
  const part = await db.part.findUnique({ where: { sku: String(body.partSku).toUpperCase() } });

  if (!model || !part) {
    return NextResponse.json({ error: "Unknown model or part" }, { status: 400 });
  }

  const item = await db.bomItem.upsert({
    where: { modelId_partId: { modelId: model.id, partId: part.id } },
    update: {
      quantity: Number(body.quantity || 1),
      position: body.position ? String(body.position) : null,
      callout: body.callout ? String(body.callout) : null,
      diagramX: body.diagramX == null ? null : Number(body.diagramX),
      diagramY: body.diagramY == null ? null : Number(body.diagramY),
    },
    create: {
      modelId: model.id,
      partId: part.id,
      quantity: Number(body.quantity || 1),
      position: body.position ? String(body.position) : null,
      callout: body.callout ? String(body.callout) : null,
      diagramX: body.diagramX == null ? null : Number(body.diagramX),
      diagramY: body.diagramY == null ? null : Number(body.diagramY),
    },
    include: { model: true, part: true },
  });

  return NextResponse.json({ data: item }, { status: 201 });
}
