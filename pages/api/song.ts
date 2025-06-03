import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    title: "Clair de Lune",
    artist: "Claude Debussy",
    previewUrl: "https://p.scdn.co/mp3-preview/1ebf72d57169cbf90f858df9a7f29fbb0f59c249"
  });
}

