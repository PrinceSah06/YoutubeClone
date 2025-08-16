import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SideBar = () => {

  const isMenuOpen = useSelector(store =>store.app.isMenuOpen)


  if(!isMenuOpen) return null
  
  return (<div
  className='shadow-2xl left bg-red-200 px-2 pr-12'>
    <div className=' '>
        <h1  className='font-bold'>Subscription</h1>
    <ul>
      <li> <Link>Home</Link></li>
      <li>
        Movies
    </li>
    <li>Game</li>
    <li>Sports</li>
    <li>Music</li>
    </ul>
      
    </div>
    
      <div className=' pt-5 '>
        <h1 className='font-bold' >Subscription</h1>
    <ul><li>
        Movies
    </li>
    <li>Game</li>
    <li>Sports</li>
    <li>Music</li>
    </ul>
      
    </div>
    </div>
  )
}

export default SideBar
