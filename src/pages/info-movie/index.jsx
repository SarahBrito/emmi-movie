import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_KEY, API_URL } from '../../key';
import { FaStar, FaArrowLeft } from "react-icons/fa";

import '../info-movie/style.css'

function Details() {

    const {id} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(()=>{
        fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                const movie = {
                    id,
                    title: data.title,
                    sinopse: data.overview,
                    backgroundImage: data.backdrop_path,
                    image: data.poster_path,
                    releaseDate: data.release_date,
                    voteCount: data.vote_average,
                    genre: data.genres
                }
                setMovie(data)
            })
    },[id])

    return (
        <div className="movie-details"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="movie-details__container">
                <img className='movie-details__poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster do filme ${movie.title}`}/>
                <div className="movie-details__info">
                    <span className='movie-details__title'>{movie.title}</span>
                    <div className="movie-details__badges">
                        <span className='movie-datails__vote'>{Math.round(movie.vote_average)} <FaStar /></span>   
                        <span className='movie-datails__release-date'>{movie.release_date}</span>
                    </div>
                    <span className='movie-details__sinopse'>{movie.overview}</span>
                    
                    <div className="movie-details__button">
                        <Link className='movie-details__button-home' to={'/'}> <FaArrowLeft /> Home</Link>
                    </div>

                    
                </div>
            </div>           
        </div> 
     );
}

export default Details;