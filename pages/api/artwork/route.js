import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    title: "Wheat Field with Cypresses",
    artist: "Vincent van Gogh",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_-_Google_Art_Project.jpg"
  });
}
