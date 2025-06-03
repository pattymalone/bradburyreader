import Poem from '../components/Poem';
import News from '../components/News';
import Song from '../components/Song';
import Artwork from '../components/Artwork';

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

