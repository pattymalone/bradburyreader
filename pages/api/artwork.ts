import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    title: "Wheat Field with Cypresses",
    artist: "Vincent van Gogh",
    url: "https://www.metmuseum.org/-/media/images/art/collection-landing/paintings/1975_1_222.jpg"
  })
}
