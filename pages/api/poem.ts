import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://poetrydb.org/random');
    const data = await response.json();
    res.status(200).json(data[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch poem.' });
  }
}

