import { useEffect, useState } from "react";

type Poem = {
  title: string;
  author: string;
  lines: string[];
};

export default function Home() {
  const [poem, setPoem] = useState<Poem | null>(null);

  useEffect(() => {
    fetch("/api/today")
      .then((res) => res.json())
      .then((data) => setPoem(data.poem));
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "Georgia, serif" }}>
      <h1>Welcome to Bradbury</h1>
      <p>Each day, a new work of art, handpicked by fate.</p>
      {poem ? (
        <article>
          <h2>{poem.title}</h2>
          <h3>by {poem.author}</h3>
          <pre>{poem.lines.join("\n")}</pre>
        </article>
      ) : (
        <p>Loading Bradbury’s daily curation...</p>
      )}
    </main>
  );
}
