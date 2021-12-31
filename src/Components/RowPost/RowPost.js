import React,{useState,useEffect} from 'react'
import "./RowPost.css";
import {imageUrl,API_KEY} from '../../Contents/Contants'
import axios from"../../axios"
import Youtube from 'react-youtube'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [idUrl,setIdUrl] = useState('')
  
   useEffect(() => {
       axios.get(props.url).then((response) => {
           console.log(response.data);
           setMovies(response.data.results)
       })
   }, [])
   const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handlMovieClicks = (id)=>{
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-U`).then(response=>{
            if (response.data.results.length!==0) {
             setIdUrl(response.data.results[0])   
            }else {
            console.log("sorry"); }
        })
        

    }


    return (
        <div className ='Row'>
            <h2>{props.title}</h2>
            <div className ='posters'>
                {movies.map((obj)=>
                <img onClick={()=>handlMovieClicks(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster1" />
                )}
            </div>
        { idUrl &&   <Youtube videoId={idUrl.key} opts={opts} /> }
        </div>
    )
}

export default RowPost
