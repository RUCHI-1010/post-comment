import React, { useState } from "react";
import Comment from "./Comment";
import ArrowUp from "../assets/arrowup.png";
import ArrowDown from "../assets/arrowdown.png";
import Award from "../assets/award.png";
import Reply from "../assets/reply.png";
import Share from "../assets/share.png";
import Minus from "../assets/minus.png";
import Plus from "../assets/plus.png";

const Post = () => {
  const [showReplies, setShowReplies] = useState(false); // State to track replies visibility

  const post = {
    user: "Massive_Mission_6386",
    user_img: "https://img.lovepik.com/element/45016/4170.png_860.png",
    time: "9h ago",
    text: "I love my dog, but I'm not bringing that big idiot everywhere with me.",
    votes: 395,
    comments: [
      {
        user: "Key_Warthog_1550",
        user_img: "https://img.lovepik.com/element/45016/4170.png_860.png",
        time: "5h ago",
        text: "Yeah my dog is wonderful and extremely friendly but his manners go out the window when he sees children so he stays home.",
        votes: 61,
        replies: [
          {
            user: "User_3",
            time: "2h ago",
            text: "I have the same problem with my dog!",
            votes: 20,
          },
        ],
      },
    ],
  };

  // Toggle replies visibility
  const toggleReplies = () => {
    setShowReplies((prev) => !prev);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg h-auto">
      <div className="flex">
        <div className="w-10 h-10 bg-gray-200 rounded-full relative" style={{ backgroundImage: `url(${post.user_img})`, backgroundSize: 'cover' }}></div>
        <div className="absolute w-[1.5px] h-7  bg-gray-200 ml-5 mt-12">
          <button className="h-5 w-5 text-black">
            <img className="-translate-x-2 translate-y-8" src={Minus} alt="" />
          </button>

          <div className="absolute w-[1.5px] h-44  bg-gray-200 mt-8" >
            
          </div>
          <button className="h-5 w-5 text-black" onClick={toggleReplies} >
            <img
              className="-translate-x-2 translate-y-52 ml-9 -mt-5"
              src={Plus}
              alt=""
              
            />
          </button>
        </div>

        <div className="ml-4">
          <div className="flex">
            <h4 className="font-bold mt-2">{post.user}</h4>
            <p className="text-sm text-gray-500 ml-3 mt-2">{post.time}</p>
          </div>
          <p className="mt-2">{post.text}</p>
          <div className="flex items-center space-x-7 text-gray-600 mt-3">
            <div className="flex gap-2">
              <img src={ArrowUp} alt=".." className="h-4 w-4 mt-1" />
              <button className="hover:text-blue-500"> {post.votes}</button>
              <img src={ArrowDown} alt=".." className="h-4 w-4 mt-1" />
            </div>
            <div className="flex gap-2">
              <img src={Reply} alt=".." className="h-4 w-4 mt-1" />
              <button className="hover:text-blue-500">Reply</button>
            </div>
            <div className="flex gap-2">
              <img src={Award} alt=".." className="h-4 w-4 mt-1" />
              <button className="hover:text-blue-500">Award</button>
            </div>
            <div className="flex gap-2">
              <img src={Share} alt=".." className="h-4 w-4 mt-1" />
              <button className="hover:text-blue-500">Share</button>
            </div>
            <button className="hover:text-blue-500 ">...</button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        {post.comments.map((comment, index) => (
          <div key={index}>
            <Comment comment={comment} />
            {showReplies && comment.replies && (
              <div className="pl-8 mt-3">
                {comment.replies.map((reply, idx) => (
                  <Comment key={idx} comment={reply} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="justify-center mt-3">
        <button
          className="ml-[75px] text-black-500 hover:underline"
          onClick={toggleReplies}
        >
          {showReplies ? "Hide replies" : "19 more replies"}
        </button>
      </div>
    </div>
  );
};

export default Post;
