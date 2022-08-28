import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_KEY, API_URL } from '../../key';
import { MdHome } from "react-icons/md";
import '../search-movie/style.css'

function Search() {

    const [movies, setSearchMovies] = useState([])
    const {search} = useParams()
    
    
    useEffect(()=>{
        fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${search}`)
            .then(response => response.json())
            .then(data => setSearchMovies(data.results))
    }, [search])

    return (
        <div className='search-result'>
            <h1 className='search-result__title'>Resultados para: <span>{search}</span></h1>
            <Link className='movie-details__button-home' to={'/'}> <MdHome size={35}/></Link>
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

export default Search;