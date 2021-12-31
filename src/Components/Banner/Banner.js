
import React, {useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../Contents/Contants'
import axios from '../../axios'
import Youtube from 'react-youtube'
import "./Banner.css"


function Banner() {
    
    const [count,setCount] = useState(1)
    const addCount=()=> {
        setCount(count+1)
    }
    const [countless,setCountless] = useState(1)
    const lessCount=()=> {
        setCountless(countless-1)
    }
    const [movie, setMovie] = useState()  
    
    const [idUrl,setIdUrl] = useState('')
  
    useEffect(() => {
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>{
           console.log(response.data.results[0])
           setMovie(response.data.results[1+count])
 
           
           
       })
    }, [count,countless])
    const [play,setPlay] = useState(false)
    const addPlay=()=>{
        setPlay(true)
    }
     
    const opts = {
      height: '400',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    // seting play to click
    const handleClick = (e,id) => 
    {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-U`).then(response=>{
            if (response.data.results.length!==0) {
                setIdUrl(response.data.results[0]+count)   
            }else {
                console.log("sorry");
            }
        })
        e.preventDefault()
        addPlay()
    }
    
    

    
    return (
        <div
        style = {{backgroundImage:`url(${ movie ? imageUrl+movie.backdrop_path: ''})`}}
         className ='Banner'>
            
           
            <div className ='Content'>
                 
                <h1 className ='title'>{movie ? movie.title : ''}</h1>
                 <button className  ='button' onClick={addCount}> Next Movie</button>
                 <button className  ='button' onClick={handleClick}> play</button>
           
                    

                 
                <div className ='banner_button'>
                    
                     
                    
                </div>
                <h1 className ='description'>{movie ? movie.overview : ''}</h1>
            </div>
            
            
            <div className="fade-bottom"></div><div className="Youtube">

            
            {play  ? <Youtube videoId={idUrl} opts={opts} onReady={(e) => {
                e.target.pauseVideo()
                }} onEnd={(e) => {
                    e.target.playVideo(movie.id)
                    }} onPlay={(e) => {
                        e.target.pauseVideo()
                        }} onPause={(e) => {
                            e.target.playVideo()
                            }} onStateChange={(e) => {
                                if(e.data === 0){
                                    addPlay(false)
                                }
                                }}/> : ''}
                       
            
            
      
             </div>
        </div>
    )
}

export default Banner
