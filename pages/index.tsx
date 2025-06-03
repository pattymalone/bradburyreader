'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Poem = { title: string; author: string; lines: string[] }
type News = { title: string; source: string; url: string }
type Song = { title: string; artist: string; url: string }
type Artwork = { title: string; artist: string; imageUrl: string }

export default function Home() {
  const [poem, setPoem] = useState<Poem | null>(null)
  const [news, setNews] = useState<News | null>(null)
  const [song, setSong] = useState<Song | null>(null)
  const [artwork, setArtwork] = useState<Artwork | null>(null)

  useEffect(() => {
    fetch('/api/poem').then(res => res.json()).then(setPoem)
    fetch('/api/news').then(res => res.json()).then(setNews)
    fetch('/api/song').then(res => res.json()).then(setSong)
    fetch('/api/artwork').then(res => res.json()).then(setArtwork)
  }, [])

  const stack = [
    poem && (
      <motion.div key="poem" className="p-4 text-center bg-white rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold">{poem.title}</h2>
        <p className="text-sm text-gray-500 mb-2">by {poem.author}</p>
        <pre className="whitespace-pre-wrap">{poem.lines.join('\n')}</pre>
      </motion.div>
    ),
    news && (
      <motion.div key="news" className="p-4 bg-blue-50 rounded-2xl shadow-lg">
        <h2 className="text-lg font-bold">📰 {news.title}</h2>
        <p className="text-sm">{news.source}</p>
        <a className="text-blue-600 underline" href={news.url} target="_blank">Read more</a>
      </motion.div>
    ),
    song && (
      <motion.div key="song" className="p-4 bg-green-50 rounded-2xl shadow-lg">
        <h2 className="text-lg font-bold">🎵 {song.title}</h2>
        <p>{song.artist}</p>
        <a className="text-blue-600 underline" href={song.url} target="_blank">Listen</a>
      </motion.div>
    ),
    artwork && (
      <motion.div key="artwork" className="p-4 bg-yellow-50 rounded-2xl shadow-lg text-center">
        <img src={artwork.imageUrl} alt={artwork.title} className="w-full rounded-xl mb-2" />
        <h2 className="font-semibold">{artwork.title}</h2>
        <p className="text-sm">{artwork.artist}</p>
      </motion.div>
    )
  ].filter(Boolean)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 p-6 space-y-6 overflow-y-scroll">
      <h1 className="text-2xl font-bold mb-4">Welcome to Bradbury</h1>
      <AnimatePresence>
        {stack.map((content, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: i * 0.1 }}
            className="w-full max-w-md"
          >
            {content}
          </motion.div>
        ))}
      </AnimatePresence>
    </main>
  )
}
