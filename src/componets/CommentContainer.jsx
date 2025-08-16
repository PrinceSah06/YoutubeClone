import React from "react";
import { objrendom } from "../constants/const";

const Comment = ({ data }) => {
 

  const { name, replies, message } = data;
  return (
    <div className="bg-gray-300  p-2 border flex gap-1  ">
      <img
        className="w-12 h-12 rounded-lg"
        src="https://thumbs.dreamstime.com/b/user-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-134155783.jpg"
        alt="user-icon"
      />
      <div className="px-3">
        <p className="font-bold ">Name: {name}</p>
        <p>comment:{message}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comarray }) => {
  
       let i=1;
  return comarray.map((comment, ) => {

    return (
 
      <div className="pb-1">
        {" "}
        <Comment key={i*3} data={comment} />

        <div className="bg-gray-800  pl-2px ml-5  rounded-lg">
          <CommentList comarray={comment.replies} />
        </div>
      </div>
    );
  });
};

function CommentContainer() {

  return (
    <div className="  m-5 ">
      <h1 className="text-2xl bold">Commets:</h1>
      <CommentList comarray={objrendom} />
    </div>
  );
}

export default CommentContainer;
