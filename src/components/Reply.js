import React from 'react';

const Reply = ({ reply }) => {
  return (
    <div className="ml-10 flex">
      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
      <div className="ml-4">
        <div className='flex'>
        <h4 className="font-bold">{reply.user}</h4>
        <p className="text-sm text-gray-500 ml-3 mt-0.5">{reply.time}</p>
        </div>
        <p className="mt-2">{reply.text}</p>
        <div className="flex items-center space-x-4 text-gray-600 mt-3">
          <button className="hover:text-blue-500">Upvote {reply.votes}</button>
          <button className="hover:text-blue-500">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Reply;
