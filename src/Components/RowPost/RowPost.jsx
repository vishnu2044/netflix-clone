import React, {useEffect, useState} from 'react';
import "./RowPost.css";
import axios from '../../axios';
import {API_KEY, imageUrl} from "../../constants/constants";
import YouTube from 'react-youtube';



function RowPost(props) {
  const[movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(()=>{
    axios
     .get(props.url)
     .then(response=>{
        console.log(response.data);
        setMovies(response.data.results)
      })
      .catch(err=>{
        alert("Network error")
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
   const handleMovieTrailer = (id)=>{
    console.log("id ::::" + id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response=>{
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }else{
        console.log("trailer not available")
      }
    })
   }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="row-posters">
          {
            movies.map((movie)=>{
            return <img onClick={()=>handleMovieTrailer(movie.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="" />
            
            })
          }

        </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts}/> }
        
    </div>
  )
}

export default RowPost