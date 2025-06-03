'use client'

import { useEffect, useState } from 'react'

type Poem = { title: string; author: string; lines: string[] }
type News = { title: string; source: string; url: string }
type Song = { title: string; artist: string; url: string }
type Artwork = { title: string; artist: string; imageUrl: string }

export default function Home() {
  const [poem, setPoem] = useState<Poem | null>(null)
  const [news, setNews] = useState<News | null>(null)
  const [song, setSong] = useState<Song | null>(null)
  const [artwork, setArtwork] = useState<Artwork | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAll() {
      try {
        const [poemRes, newsRes, songRes, artRes] = await Promise.all([
          fetch('/api/poem'),
          fetch('/api/news'),
          fetch('/api/song'),
          fetch('/api/artwork'),
        ])
        const [poemData, newsData, songData, artData] = await Promise.all([
          poemRes.json(),
          newsRes.json(),
          songRes.json(),
          artRes.json(),
        ])
        setPoem(poemData)
        setNews(newsData)
        setSong(songData)
        setArtwork(artData)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching content:', err)
      }
    }

    fetchAll()
  }, [])

  if (loading) return <main className="p-4 text-xl">Loading Bradbury’s daily curation…</main>

  return (
    <main className="p-4 space-y-8 text-lg max-w-xl mx-auto">
      {poem && (
        <section>
          <h2 className="text-2xl font-bold mb-2">Poem</h2>
          <h3 className="italic">{poem.title}</h3>
          <p className="mb-1">by {poem.author}</p>
          <pre className="whitespace-pre-wrap">{poem.lines.join('\n')}</pre>
        </section>
      )}

      {news && (
        <section>
          <h2 className="text-2xl font-bold mb-2">News</h2>
          <a href={news.url} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            {news.title}
          </a>
          <p className="text-sm text-gray-500">Source: {news.source}</p>
        </section>
      )}

      {song && (
        <section>
          <h2 className="text-2xl font-bold mb-2">Song</h2>
          <a href={song.url} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            {song.title} by {song.artist}
          </a>
        </section>
      )}

      {artwork && (
        <section>
          <h2 className="text-2xl font-bold mb-2">Artwork</h2>
          <p className="italic mb-1">{artwork.title} by {artwork.artist}</p>
          <img src={artwork.imageUrl} alt={artwork.title} className="rounded-lg w-full max-w-md mx-auto" />
        </section>
      )}
    </main>
  )
}


