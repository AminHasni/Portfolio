import { NextResponse } from "next/server"
import { sign } from "jsonwebtoken"

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key"

export async function POST(req: Request) {
  const { username, password } = await req.json()

  // In a real application, you would check these credentials against a database
  if (username === "admin" && password === "password") {
    const token = sign({ username }, SECRET_KEY, { expiresIn: "1h" })
    return NextResponse.json({ token })
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
}

