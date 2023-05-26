'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const ChatIDPage = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin*/chat');
    },
  });

  return <div>ChatPage</div>;
};

export default ChatIDPage;
