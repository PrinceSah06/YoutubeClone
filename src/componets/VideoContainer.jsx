import React, { useEffect, useState } from 'react'
import { Youtube_API } from '../constants/const'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'
import {Link} from "react-router-dom"

function VideoContainer() {


  const [videos,setVideos] = useState([])
    useEffect(()=>{
       getVideo()
    },[]) 
    const getVideo=async()=>{
      const data = await fetch(Youtube_API);
      const json = await data.json()


      // console.log(json)
      setVideos(json.items)

    }
    console.log()
  return (
  
    <div className='flex   w-[1500px] flex-wrap mx-2'>
{
  videos.map(video =>  <Link to={ 'watch?v='+video.id}> <VideoCard    key={video.id} info={video}/>  </Link>)
}

   
    </div>
  )
}

export default VideoContainer
