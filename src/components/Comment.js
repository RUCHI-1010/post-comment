import React, { useState } from 'react';
import Reply from './Reply';

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="ml-10 mt-4">
      <div className="flex">
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        <div className="ml-4">
          <h4 className="font-bold">{comment.user}</h4>
          <p className="text-sm text-gray-500">{comment.time}</p>
          <p className="mt-2">{comment.text}</p>
          <div className="flex items-center space-x-4 text-gray-600 mt-3">
            <button className="hover:text-blue-500">Upvote {comment.votes}</button>
            <button className="hover:text-blue-500" onClick={() => setShowReplies(!showReplies)}>
              {showReplies ? 'Hide Replies' : 'Show Replies'}
            </button>
            <button className="hover:text-blue-500">Reply</button>
          </div>
        </div>
      </div>
      {showReplies && comment.replies && (
        <div className="mt-4">
          {comment.replies.map((reply, index) => (
            <Reply key={index} reply={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
