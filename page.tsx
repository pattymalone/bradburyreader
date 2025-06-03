'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Poem = { title: string; author: string; lines: string[] }
type News = { title: string; source: string; url: string }
type Song = { title: string; artist: string; url: string }
type Art = { title: string; artist: string; imageUrl: string }

export default function Page() {
  const [poem, setPoem] = useState<Poem | null>(null)
  const [news, setNews] = useState<News | null>(null)
  const [song, setSong] = useState<Song | null>(null)
  const [art, setArt] = useState<Art | null>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch('/api/poem').then(res => res.json()).then(setPoem)
    fetch('/api/news').then(res => res.json()).then(setNews)
    fetch('/api/song').then(res => res.json()).then(setSong)
    fetch('/api/art').then(res => res.json()).then(setArt)
  }, [])

  const content = [
    poem && (
      <div key="poem" className="p-6 text-center space-y-4">
        <h2 className="text-2xl font-semibold">{poem.title}</h2>
        <p className="italic text-gray-600">{poem.author}</p>
        <pre className="whitespace-pre-wrap text-lg">{poem.lines.join('\n')}</pre>
      </div>
    ),
    news && (
      <div key="news" className="p-6 text-center space-y-4">
        <h2 className="text-2xl font-semibold">🗞 {news.title}</h2>
        <p className="text-gray-500">via {news.source}</p>
        <a href={news.url} className="text-blue-600 underline" target="_blank">Read more</a>
      </div>
    ),
    song && (
      <div key="song" className="p-6 text-center space-y-4">
        <h2 className="text-2xl font-semibold">🎵 {song.title}</h2>
        <p className="text-gray-500">by {song.artist}</p>
        <a href={song.url} className="text-blue-600 underline" target="_blank">Listen on Spotify</a>
      </div>
    ),
    art && (
      <div key="art" className="p-6 text-center space-y-4">
        <h2 className="text-2xl font-semibold">🖼 {art.title}</h2>
        <p className="text-gray-500">by {art.artist}</p>
        <img src={art.imageUrl} alt={art.title} className="mx-auto rounded shadow-lg max-h-96" />
      </div>
    )
  ].filter(Boolean)

  const next = () => setIndex((index + 1) % content.length)
  const prev = () => setIndex((index - 1 + content.length) % content.length)

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="w-full max-w-xl relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {content[index]}
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6">
          <button onClick={prev} className="bg-gray-200 p-2 rounded-full">⬅️</button>
          <button onClick={next} className="bg-gray-200 p-2 rounded-full">➡️</button>
        </div>
      </div>
    </main>
  )
}

