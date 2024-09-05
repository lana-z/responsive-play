import Header from './components/Header';
import Latest from './components/Latest';
import Flex from './components/Flex';
import Grid from './components/Grid';
import Blue from './components/Blue';
import Pink from './components/Pink';
import Green from './components/Green';
import Orange from './components/Orange';

export default function Home() {
  return (
    <main>
      <div className="grid gap-4 p-4 bg-gray-700 grid-cols-18 grid-rows-12">
        <Header />
        <Latest />
      </div>
      <div className="gap-4 p-4 bg-gray-700 ">
        <Flex />
        <Grid />
        <Green />
        <Pink />
        <Blue />
        <Orange />
      </div>
    </main>
  );
}

