import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "alsvid_session";

function secretKey() {
  const raw = process.env.SESSION_SECRET || "development-only-secret-change-me";
  return new TextEncoder().encode(raw);
}

export async function createSessionToken(email: string, role: string) {
  return new SignJWT({ email, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("12h")
    .sign(secretKey());
}

export async function verifySessionToken(token: string) {
  const result = await jwtVerify(token, secretKey());
  return result.payload;
}
