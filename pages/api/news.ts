import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    title: "AI Policy Is Rapidly Evolving",
    source: "OpenAI Daily",
    url: "https://openai.com/blog"
  });
}

