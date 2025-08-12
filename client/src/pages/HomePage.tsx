import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold">MTTA</h1>
      </main>
      <Footer />
    </>
  );
}
