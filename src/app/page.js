'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  const user = session?.user;

  if (status === 'loading') return <div>Loading...</div>;

  return (
    <>
      <div className='flex justify-center items-center min-h-screen w-full bg-janes_black_light text-janes_white text-center'>
        <div>
          {!!user && <Link href='/api/auth/signout'>Sign Out</Link>}
          {!user && (
            <>
              <Link
                href='/api/auth/signin'
                className='rounded-md bg-[#48A14D]  px-4 py-2 text-janes_white hover:bg-janes_green'
              >
                Sign In
              </Link>
              <Link
                href='/api/auth/signin'
                className='rounded-md bg-[#48A14D]  px-4 py-2 text-janes_white hover:bg-janes_green'
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
