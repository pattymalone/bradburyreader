// app/api/artwork/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  });
}
