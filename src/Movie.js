import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres}){
   return(
    <div className="movie">
            <div className ="movie_columns">
                 <MoviePoster poster={poster} />
            </div>
            <div className ="movie_columns"> <h1>{title}</h1>
            <h1>{genres.map( (genre,index) => <MovieGenre genre ={genre} /> ) }  </h1></div>
           
            
     </div>
   )
}


function MoviePoster({poster}){
    return(
        <img alt={poster} src ={poster}></img>
    )
}

function MovieGenre({genre}){
    return (<span className ="movie_columns">{genre}</span>)
}

Movie.propTypes ={
    title : PropTypes.string ,
    poster : PropTypes.string,
    genres : PropTypes.genres,
}

MoviePoster.propTypes ={
    poster : PropTypes.string
}

export default Movie;