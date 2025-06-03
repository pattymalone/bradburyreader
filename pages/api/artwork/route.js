import { NextResponse } from 'next/server';

export async function GET() {
  // Fetch all available object IDs
  const res = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects');
  const data = await res.json();
  const objectIDs = data.objectIDs;

  // Select a random object ID
  const randomIndex = Math.floor(Math.random() * objectIDs.length);
  const randomID = objectIDs[randomIndex];

  // Fetch data for the selected object
  const objectRes = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomID}`);
  const objectData = await objectRes.json();

  return NextResponse.json({
    title: objectData.title,
    artist: objectData.artistDisplayName,
    imageUrl: objectData.primaryImageSmall,
  });
}

