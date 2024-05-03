import Link from 'next/link';
import Header from './components/header';
export default function Home() {
    return (
    <main>
    <Header/>
      <h1>Hello World</h1>
      <button><Link href="/about">About</Link></button>
      <button><Link href="/contact">Contact</Link></button>
    </main>
  );
}
