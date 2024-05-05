import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import Netflix from './pages/netflix';
import Player from './pages/player';
import MoviePage  from './pages/Movies';
import TVShows from './pages/TVShows';
import UserListedMovies from './pages/UserListedMovies';
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
       <Route exact path = "/login" element= {<Login/>}/>
       <Route exact path = "/signup" element= {<Signup/>}/>
       <Route exact path = "/player" element = {<Player/>}/>
       <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/" element={<Netflix/>} />
    </Routes></BrowserRouter>
  );
}

export default App
