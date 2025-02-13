import React, { Fragment } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import { useState } from 'react'

function Home({sideBar}) {


  const [category,setCategory] = useState(0)

  return (
    
    <>
    <Sidebar sideBar={sideBar} category={category} setCategory={setCategory} />

    <div className={`container ${sideBar?"":"large-container"}`}>
        <Feed category={category}/>
      
    </div>

    </>
  )
}

export default Home