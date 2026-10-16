import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    // Replace MY_SENSITIVE_VAR with your variable's key
    value: process.env.DOUBLE_ENV_VAR ?? 'Variable not found',
  });
}
