import React from 'react';
import Comment from './Comment';

const Post = () => {
  const post = {
    user: "Massive_Mission_6386",
    time: "9h ago",
    text: "I love my dog, but I'm not bringing that big idiot everywhere with me.",
    votes: 395,
    comments: [
      {
        user: "Key_Warthog_1550",
        time: "5h ago",
        text: "Yeah my dog is wonderful and extremely friendly but his manners go out the window when he sees children so he stays home.",
        votes: 61,
        replies: [
          {
            user: "User_3",
            time: "2h ago",
            text: "I have the same problem with my dog!",
            votes: 20
          }
        ]
      }
    ]
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="flex">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div className="ml-4">
          <h4 className="font-bold">{post.user}</h4>
          <p className="text-sm text-gray-500">{post.time}</p>
          <p className="mt-2">{post.text}</p>
          <div className="flex items-center space-x-4 text-gray-600 mt-3">
            <button className="hover:text-blue-500">Upvote {post.votes}</button>
            <button className="hover:text-blue-500">Reply</button>
            <button className="hover:text-blue-500">Share</button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        {post.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;
