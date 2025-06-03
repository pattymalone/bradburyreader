import { useEffect, useState } from 'react';

export default function News() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(console.error);
  }, []);

  if (!news) return <p>Loading news...</p>;

  return (
    <section>
      <h2>News of the Day</h2>
      <h3>{news.title}</h3>
      <p>{news.summary}</p>
      <a href={news.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </section>
  );
}
