import React from 'react'
import ChatMsg from './ChatMsg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addMassages } from '../utils/chatSlice'
import {randomNameGenerate} from '../constants/randomdata.js'
import { randomTextGenrator } from '../constants/randomdata.js'
import { useState } from 'react'

export default function LiveChat() {
  const [liveText,setLiveText] = useState('')
    const chatMassage = useSelector(store =>store.chat.massage)

       const dispatch = useDispatch()

  useEffect(() => {

    
const intervalmsg=    setInterval(() => {

        dispatch(addMassages({name:randomNameGenerate(),massage:randomTextGenrator(20)}))
    }
  
   , 1500);

     return ()=>clearInterval(intervalmsg)
  }, []);
  const sendLiveChat=()=>{

    dispatch(addMassages({name:'prince',massage:liveText}))

  }

  return (
    <div>

    <div className=' bg-slate-200 rounded-lg ml-2 w-[420px] h-[400px] p-2 border  border-black overflow-scroll  '>

       <ChatMsg   massageArray={chatMassage}   name={'prince'} massage={
         '   this is a random massaget frome me'
       }/>

       {
        chatMassage.map((e,i) =>    <ChatMsg  key={i} name={e.name} massage={e.massage}/>)
       }
    </div>

    <div className='bg-red h-10  mt-1 w-full rounded-lg mx-2'>
      <input  value= {liveText}onChange={(e)=>setLiveText(e.target.value)} className='border  h-full p-1 border-black w-[75%] text-black rounded-lg' type="text" name="" id="Live Chat" />
    <button  onClick=    {()=>sendLiveChat()} className='w-[11%] h-full bg-green-200 text-shadow-green-400 rounded-lg'>send</button>
    </div>
    </div>
  )
}

