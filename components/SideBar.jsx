import React from 'react';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className='bg-[#48A14D]'>
      <Link href='/api/auth/signout'>Sign Out</Link>
    </div>
  );
};

export default SideBar;
