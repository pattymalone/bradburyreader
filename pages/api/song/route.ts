import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    title: "This Must Be the Place",
    artist: "Talking Heads",
    url: "https://open.spotify.com/track/7e89621JPkKaeDSTQ3avtg"
  })
}
