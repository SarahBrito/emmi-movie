import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_KEY, API_URL } from '../../key'
import { MdHome } from "react-icons/md"
import '../search-movie/style.css'
import { MovieCard } from '../../../components/movieCard'

function Search () {

  const [movies, setSearchMovies] = useState([])
  const {search} = useParams()
    
  useEffect(()=>{
    fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${search}`)
      .then(response => response.json())
      .then(data => setSearchMovies(data.results))
  }, [search])

  return (
    <div className='search-result'>
        <h1 className='search-result__title'>
            Resultados para: <span>{search}</span>
        </h1>
        {/* <Link className='movie-details__button-home' to={'/'}> <MdHome size={35}/></Link> */}
        <div className="movies__container">
            <MovieCard movies={movies}/>
        </div>
    </div> 
        
  )
}

export default Search
