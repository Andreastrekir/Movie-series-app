import React, { Fragment } from "react";
import Cards from '../Cards/Cards'
import './Header.css';

const Header = ({ searchMovie, query, setQuery, movies }) => {
    
    
      return( 
          <Fragment>
             <div className="searchBar">
                 <h1>Search for a movie, TV series...</h1>
                
                <div className="search">
                <form className="cat" onSubmit={searchMovie}>

                <input type="text" name="query" 
                        placeholder="Search a movie..."
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} />

                <label htmlFor="query" className="name"></label>     
                <button type="submit">Search</button>
                </form>
                </div>
                </div>

                <div className="list">
                    <Cards movies= {movies}/>
                </div>
            
            </Fragment>
        )
}
  
export default Header;
