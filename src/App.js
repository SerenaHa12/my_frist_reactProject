import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=d5581b28';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search || []);
    };

    useEffect(() => {
        searchMovies('SpiderMan');
    }, []);

    const handleSearch = () => {
        searchMovies(searchTerm);
    };

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder='Search'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={handleSearch}
                />
            </div>

            {movies.length > 0 ? (
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.imdbID} />
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No movies</h2>
                </div>
            )}
        </div>
    );
}

export default App;
