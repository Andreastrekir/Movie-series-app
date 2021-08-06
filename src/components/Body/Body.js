import Header from '../Header/Header'
import React, { useState} from 'react'
import axios from 'axios';
import './Body.css'

const Body = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');


    const searchMovie = async (e) => {
        e.preventDefault();
        const url = `https://www.omdbapi.com/?i=tt3896198&apikey=a6c639de&s=${query}`;
       
        try {
            const response = await axios.get(url);
            const data = response.data.Search
            console.log(data)
            setMovies(data);

        } catch (err) {
            console.error(err);
        }
    }

    console.log(movies, "movies");


    return (
        <div className="shoppies">
            <Header
                searchMovie={searchMovie}
                query={query}
                setQuery={setQuery}
                movies={movies}
            />
        </div>
    )
}
export default Body;