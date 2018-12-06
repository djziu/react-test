import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}){
   return(
    <div className="Movie">
            <div className="Movie__Column">
                 <MoviePoster poster={poster} />
            </div>
            <div className="Movie__Column"> 
                <h1>{title}</h1>
                <div className="Movie__Genres">

                    { genres ?  genres.map( (genre,index) => <MovieGenre genre ={genre}  key={index}/> )  : ""
                 
                    } 
                </div>
                <div className="Movie_Synopsis">
                            <LinesEllipsis text ={synopsis} maxLine='3' ellipsis ="..." trimRight basedOn='letters'/>
                </div>
            </div> 
            
     </div>
   )
}




function MoviePoster({poster}){
    return(
        <img alt={poster} src ={poster} className="Movie__Poster" ></img>
    )
}

function MovieGenre({genre}){
    return (<span className="Movie__Genre">{genre}</span>)
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