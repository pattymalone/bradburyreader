'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Poem = { title: string; author: string; lines: string[] }
type News = { title: string; source: string; url: string }
type Song = { title: string; artist: string; url: string }
type Artwork = { title: string; artist: string; imageUrl: string }

type ContentBlock =
  | { type: 'poem'; data: Poem }
  | { type: 'news'; data: News }
  | { type: 'song'; data: Song }
  | { type: 'artwork'; data: Artwork }

export default function Home() {
  const [index, setIndex] = useState(0)
  const [content, setContent] = useState<ContentBlock[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const [poem, news, song, artwork] = await Promise.all([
        fetch('/api/poem').then(res => res.json()),
        fetch('/api/news').then(res => res.json()),
        fetch('/api/song').then(res => res.json()),
        fetch('/api/artwork').then(res => res.json()),
      ])
      setContent([
        { type: 'poem', data: poem },
        { type: 'news', data: news },
        { type: 'song', data: song },
        { type: 'artwork', data: artwork },
      ])
      setLoading(false)
    }
    fetchData()
  }, [])

  function handleSwipe() {
    setIndex((prev) => (prev + 1) % content.length)
  }

  function renderBlock(block: ContentBlock) {
    switch (block.type) {
      case 'poem':
        return (
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">{block.data.title}</h2>
            <p className="italic mb-2">by {block.data.author}</p>
            <pre className="whitespace-pre-wrap">{block.data.lines.join('\n')}</pre>
          </div>
        )
      case 'news':
        return (
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">{block.data.title}</h2>
            <p className="mb-2">Source: {block.data.source}</p>
            <a href={block.data.url} className="text-blue-600 underline" target="_blank">Read more</a>
          </div>
        )
      case 'song':
        return (
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">{block.data.title}</h2>
            <p className="mb-2">by {block.data.artist}</p>
            <a href={block.data.url} className="text-green-600 underline" target="_blank">Listen</a>
          </div>
        )
      case 'artwork':
        return (
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">{block.data.title}</h2>
            <p className="mb-2">by {block.data.artist}</p>
            <img src={block.data.imageUrl} alt={block.data.title} className="mx-auto max-h-[400px] object-contain" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f4f1ee] text-[#222] font-serif">
      {loading ? (
        <p className="text-xl">Loading Bradbury’s daily curation…</p>
      ) : (
        <div
          className="w-full h-full overflow-hidden"
          onClick={handleSwipe}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex flex-col justify-center items-center"
            >
              {renderBlock(content[index])}
              <p className="mt-4 text-sm text-gray-500">(tap anywhere to continue)</p>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

