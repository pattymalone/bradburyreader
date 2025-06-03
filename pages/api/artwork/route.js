import { NextResponse } from 'next/server';

export async function GET() {
  // Use a reliable static object ID from The Met's public API
  const objectID = 436121; // Example: Van Gogh, "Irises"

  try {
    const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
    if (!res.ok) {
      throw new Error('Failed to fetch artwork');
    }
    const data = await res.json();

    // Return a clean JSON object with key details and a valid image URL
    return NextResponse.json({
      title: data.title || "Unknown Title",
      artist: data.artistDisplayName || "Unknown Artist",
      imageUrl: data.primaryImageSmall || "", // This is a small image URL, works well for web
    });
  } catch (error) {
    // Return fallback JSON in case of error to avoid crashing front-end
    return NextResponse.json({
      title: "Artwork not available",
      artist: "",
      imageUrl: "",
    });
  }
}
