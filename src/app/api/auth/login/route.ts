import { NextRequest, NextResponse } from "next/server";
import { createSessionToken, SESSION_COOKIE } from "@/lib/session";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");

  const expectedEmail = (process.env.ADMIN_EMAIL || "admin@alsvid.com").toLowerCase();
  const expectedPassword = process.env.ADMIN_PASSWORD || "change-me";

  if (email !== expectedEmail || password !== expectedPassword) {
    return NextResponse.redirect(new URL("/login?error=1", request.url), 303);
  }

  const token = await createSessionToken(email, "ADMIN");
  const response = NextResponse.redirect(new URL("/", request.url), 303);

  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 12,
    path: "/",
  });

  return response;
}
