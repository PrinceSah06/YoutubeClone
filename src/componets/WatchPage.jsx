import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

function WatchPage() {
  const { id } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  const v = searchParams.get("v");
  
  return (
 <div className="flex flex-col" >   <div className="m-8 ">
      <  iframe
        width="800"
        height="450"
        src={"https://www.youtube.com/embed/" +v +"?si=UbbUsw2vOQtGO4-y&amp;start=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      
    </div>
    <CommentContainer></CommentContainer>
    </div>
  );
}

export default WatchPage;
