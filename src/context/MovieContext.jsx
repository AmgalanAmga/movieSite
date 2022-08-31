import axios from 'axios'
import { createContext, useState, useEffect } from 'react'
import { movieApiKey } from '../keys'

export const MovieContext = createContext()
export const MovieProvider = ({ children }) => {
  const [time, setTime] = useState('')
  const [movies, setMovies] = useState([])
  const [coming, setComing] = useState([])
  const [adultAmount, setAdultAmount] = useState(0)
  const [moviesDetails, setMoviesDetails] = useState([])
  const [childrenAmount, setChildrenAmount] = useState(0)
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${movieApiKey}&language=en-US&page=1`,
      )
      .then((response) => setMovies(response.data.results))
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${movieApiKey}&language=en-US&page=1`,
      )
      .then((response) => setComing(response.data.results))
  }, [])
  const state = {
    movieAPI: movies,
    comingMovieAPI: coming,
    movieTime: [time, setTime],
    adult: [adultAmount, setAdultAmount],
    mDetails: [moviesDetails, setMoviesDetails],
    children: [childrenAmount, setChildrenAmount],
  }
  return <MovieContext.Provider value={state}>{children}</MovieContext.Provider>
}
