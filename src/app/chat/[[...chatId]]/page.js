'use client';
import React, { useState } from 'react';
import SideBar from '../../../../components/SideBar';

const ChatIDPage = () => {
  const [messageText, setMessageText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('messageText', messageText);
  };

  return (
    <div className='grid h-screen grid-cols-[260px_1fr]'>
      <SideBar />
      <div className='bg-janes_green flex flex-col'>
        <div className='flex-1'>Chat Window</div>
        <footer className='bg-[#24562B] p-10'>
          <form onSubmit={handleSubmit}>
            <fieldset className='flex gap-2'>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="What's up?"
                className='w-full resize-none rounded-md bg-gray-800 p-2 text-janes_white focus:border-emerald-800 focus:bg-gray-700 focus:outline focus:outline-emerald-700'
              />
              <button
                type='submit'
                className='rounded-md bg-[#48A14D]  px-4 py-2 text-janes_white hover:bg-janes_green'
              >
                Send
              </button>
            </fieldset>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default ChatIDPage;
