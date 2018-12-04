import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';





class App extends Component {

  state ={
  }

  componentWillMount(){
    console.log("will mount")
  }

  componentDidMount(){

    this._getMovies();

  }


  _getMovies = async () =>{

    const movies = await this._callApi()
    console.log(movies);
    this.setState(
      {movies } 
    )
}

_callApi = () =>{

  
  return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
  .then(po  =>  po.json() )
  .then(p => p.data.movies )

  .catch(err => console.log(err))

}
  _renderMovies = () => {

   const movies = this.state.movies.map(( movie ,index, movies ) =>  {
      return  <Movie title = {movie.title} poster = {movie.medium_cover_image} key={movie.id}  genres = {movie.genres}  />
     } )
     return movies
  }






  render() {
    return (
      <div className="App">
       {this.state.movies ? this._renderMovies() : "loading"}
      </div>
    )
  }

}



export default App;
