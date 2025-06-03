export async function GET() {
  return NextResponse.json({
    title: "Wheat Field with Cypresses",
    artist: "Vincent van Gogh",
    imageUrl: "https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg"
  })
}
