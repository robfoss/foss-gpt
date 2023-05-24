import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/api/auth/signin'>Log in</Link>
    </div>
  );
}
