import { NextResponse } from 'next/server'

export async function GET() {
  const story = {
    title: "What Happens to America's Wild Horses?",
    source: "NPR",
    url: "https://www.npr.org/2024/05/10/wild-horses-investigation"
  }

  return NextResponse.json(story)
} 
