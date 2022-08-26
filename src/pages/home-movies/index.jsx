import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, API_URL } from '../../key';

import './style.css' 

function Home() {

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])

    return (
        <div className="movies">
            <h1 className='movies__title'>Emmi<span>Movie</span></h1>
            <input className='movies__search' type="search" placeholder='Buscar filme' aria-label='Buscar por um filme'/>
            {console.log(movies)}
            <div className="movies__container">
                {movies.map(movie => {
                    return (

                            <div className="movie" key={movie.id}>
                                <Link to={`/details/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></Link>
                                <span className='movie__title'>{movie.title}</span>
                            </div>
                    )
                })}
            </div>
        </div> 
     );
}

export default Home;