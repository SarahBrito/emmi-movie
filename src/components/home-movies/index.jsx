import '../home-movies/style.css' 

function Home() {
    return (
        <div className="movies">
            <h1 className='movies__title'>Emmi<span>Movie</span></h1>
            <input className='movies__search' type="search" />
        </div> 
     );
}

export default Home;