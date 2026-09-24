import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    service: "ALSVID Platform",
    status: "ok",
    version: "0.1.0",
  });
}
