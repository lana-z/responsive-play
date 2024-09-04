import Header from './components/Header';
import Latest from './components/Latest';

export default function Home() {
  return (
    <main>
      <div className="flex bg-yellow-500">
      <Header />
      <Latest />
      </div>
    </main>
  );
}

