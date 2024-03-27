import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY, value_convertor } from '../../data'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

function Feed({category}) {

    const [data, setData] = useState([])

    const fetchData = async()=>{
        const video_url=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(video_url).then(res=>res.json()).then(data=>setData(data.items))
    }

    useEffect(() => {
      
    fetchData()
      
    },[category])

    console.log(data);
    


  return (
    <div className='feed'>
        {data.map((items,index)=>{
                
          return( <Link to={`video/${items.snippet.categoryId}/${items.id}`} className='cards'>
                <img src={items.snippet.thumbnails.medium.url} alt="" /> 
                <h2>{items.snippet.title}</h2>
                <h3>{items.snippet.channelTitle}</h3>
                <p>{value_convertor(items.statistics.viewCount)} views &bull; {moment(items.snippet.publishedAt).fromNow()}</p>
            </Link>)
        })}
       

    </div>
  )
}

export default Feed