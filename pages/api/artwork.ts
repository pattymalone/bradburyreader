import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    title: "Starry Night",
    artist: "Vincent van Gogh",
    image: "https://uploads5.wikiart.org/images/vincent-van-gogh/the-starry-night-1889.jpg"
  });
}

