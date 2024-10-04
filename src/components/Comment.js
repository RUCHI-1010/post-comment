import React, { useState } from "react";
// import Reply from './Reply';
import ArrowUp from "../assets/arrowup.png";
import ArrowDown from "../assets/arrowdown.png";
import Award from "../assets/award.png";
import Replyimg from "../assets/reply.png";
import Share from "../assets/share.png";
import Plus from "../assets/plus.png";

const Comment = ({ comment }) => {
  // State to manage replies visibility
  const [showReplies, setShowReplies] = useState(false);

  // Function to toggle replies visibility
  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className="ml-10 mt-4">
      <div className="flex">
        <div className="w-8 h-8 bg-gray-200 rounded-full" style={{ backgroundImage: `url(${comment.user_img})`, backgroundSize: 'cover' }}></div>
        <div className="absolute w-[1.5px] h-[80px]  bg-gray-200 ml-4 mt-10">
          <button className="h-5 w-5 text-black">
            <img className="translate-x-8 translate-y-16 mt-[6px]" src={Plus} alt="" />
          </button>
        </div>
        <div className="ml-4 ">
          <div className="flex">
            <h4 className="font-bold mt-1">{comment.user}</h4>
            <p className="text-sm text-gray-500 ml-3 mt-[5.5px]">{comment.time}</p>
          </div>
          <p className="mt-2">{comment.text}</p>
          <div className="flex items-center space-x-4 text-gray-600 mt-3 gap-3">
            <div className="flex gap-2">
              <img src={ArrowUp} alt=".." className="h-4 w-4 mt-1" />
              <button className="hover:text-blue-500"> {comment.votes}</button>
              <img src={ArrowDown} alt=".." className="h-4 w-4 mt-1" />
            </div>
            <div className="flex gap-2">
              <img src={Replyimg} alt=".." className="h-4 w-4 mt-1" />
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
            <button className="hover:text-blue-500">...</button>
          </div>
          <div className="justify-center mt-3">
            {/* Clickable text to show/hide replies */}
            <span className="ml-6 cursor-pointer" onClick={toggleReplies}>
              {showReplies ? "Hide replies" : "19 more replies"}
            </span>
          </div>

          {/* Conditionally render replies */}
          {showReplies && (
            <div className="ml-6 mt-4">
              {comment.replies?.map((reply, index) => (
                <div key={index} className="ml-6 mt-2">
                  <div className="flex">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div className="ml-4">
                      <div className="flex">
                        <h4 className="font-bold">{reply.user}</h4>
                        <p className="text-sm text-gray-500 ml-3">{reply.time}</p>
                      </div>
                      <p>{reply.text}</p>
                      <div className="flex items-center space-x-2 text-gray-600 mt-2">
                        <div className="flex gap-2">
                          <img src={ArrowUp} alt=".." className="h-3 w-3" />
                          <button className="hover:text-blue-500">{reply.votes}</button>
                          <img src={ArrowDown} alt=".." className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
