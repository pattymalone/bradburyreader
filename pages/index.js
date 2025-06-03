import Poem from '../components/poem';
import News from '../components/news';
import Song from '../components/song';
import Artwork from '../components/artwork';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Georgia, serif' }}>
      <h1>Welcome to Bradbury Reader!</h1>
      <Poem />
      <News />
      <Song />
      <Artwork />
    </main>
  );
}

