import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_KEY, API_URL } from '../../key'

import './style.css'
import { MovieCard } from '../../../components/movieCard'

function Home () {

  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState("")

  useEffect(() => {
    fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  function handleSubmit (e) {
    e.preventDefault()

    if (!searchMovie) return

    navigate(`/search/${searchMovie}`)
  }

  return (
    <div className="movies">
      <h1 className='movies__title'>Emmi<span>Movie</span></h1>
      <form onSubmit={handleSubmit}>
        <input 
          className='movies__search' 
          type="text" 
          placeholder='Search movie' 
          aria-label='Buscar por um filme' 
          value={searchMovie} 
          onChange={(e) => setSearchMovie(e.target.value)} 
        />
      </form>
      
      <div className="movies__container">
        <MovieCard movies={movies}/>
      </div>
    </div>
  )
}

export default Home
