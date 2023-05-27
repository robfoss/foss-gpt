import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect('/chat');

  return (
    <>
      <div className='flex justify-center items-center min-h-screen w-full bg-janes_black_light text-janes_white text-center'>
        <div>
          {!!session && <Link href='/api/auth/signout'>Sign Out</Link>}
          {!session && (
            <>
              <Link
                href='/api/auth/signin'
                className='rounded-md bg-[#48A14D]  px-4 py-2 text-janes_white hover:bg-janes_green'
              >
                Sign In
              </Link>
              <Link
                href='/api/auth/signup'
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
