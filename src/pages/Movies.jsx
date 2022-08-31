import 'swiper/css'
import axios from 'axios'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { useContext } from 'react'
import { movieApiKey } from '../keys'
import { Link } from 'react-router-dom'
import { images } from '../images/Images'
import { useEffect, useState } from 'react'
import { Navigation, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MovieContext } from '../context/MovieContext'

export const Movies = () => {
  const { movieAPI, comingMovieAPI } = useContext(MovieContext)
  const [movieID, setMovieID] = useState('')
  const [video, setVideo] = useState()
  const truncateString = (str, num) => {
    if (str?.length > num) return str.slice(0, num) + '...'
    return str
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${movieApiKey}&language=en-US`,
      )
      .then((response) => console.log(response))
  }, [movieID])
  const videoFunction = (e) => {
    const { id } = e.target
    setMovieID(id)
  }
  return (
    <div className="absolute top-0 left-0 w-full ">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect={'fade'}
        speed={800}
        slidesPerView={1}
        loop
      >
        {movieAPI.map((movie, id) => {
          return (
            <SwiperSlide className="" key={id}>
              <div className="absolute w-full h-full bg-gradient-to-t from-[#73a5c6]"></div>
              <img
                className="object-cover w-full h-full"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className="absolute w-full bottom-[20%] left-[10%] p-4 md:p-8 text-white">
                <h1 className="text-3xl font-bold md:text-5xl">
                  {movie.title}
                </h1>
                <div className="flex items-center my-2 space-x-2">
                  <img src={images.star} alt="" className="w-5" />
                  <span>{movie.vote_average}</span>
                  <p className="text-sm">Released: {movie.release_date}</p>
                </div>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-justify text-xl">
                  {truncateString(movie.overview, 200)}
                </p>
                <div className="flex mt-14">
                  <Link
                    to={`/detail/${movie.id}`}
                    className="bg-[#1F58FF] py-2 px-9 text-lg flex items-center rounded-lg uppercase font-semibold"
                  >
                    ticket order
                  </Link>
                  <button
                    id={movie.id}
                    onClick={videoFunction}
                    className="py-2 ml-4 font-semibold uppercase rounded-lg px-9 bg-gray-300/60"
                  >
                    Trailer
                  </button>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="grid max-w-screen-xl grid-cols-3 mx-auto mt-2 lg:grid-cols-4 justify-items-center gap-x-3">
        {comingMovieAPI.map((coMovie) => (
          <div className="relative m-5 overflow-hidden w-72 rounded-2xl">
            <img
              className="block object-cover w-full h-full"
              src={`https://image.tmdb.org/t/p/original/${coMovie.backdrop_path}`}
              alt={coMovie.title}
            />
            <div className="absolute left-0 w-full h-full text-white duration-300 ease-in-out opacity-0 top-10 hover:bg-black/30 hover:opacity-100 hover:top-0">
              <p className="flex items-center justify-center h-full text-2xl font-semibold tracking-wider text-center">
                {coMovie.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
