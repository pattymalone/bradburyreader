import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch('https://poetrydb.org/random')
  const data = await res.json()
  const poem = data[0]
  return NextResponse.json({
    title: poem.title,
    author: poem.author,
    lines: poem.lines
  })
}
