 import { MovieContext } from "../context/MovieContext";
import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Order = () => {
  const [detailMovie, setDetailMovie] = useState([]);
  const { movieAPI, adult, children, movieTime, mDetails } =
    useContext(MovieContext);
  const [time, setTime] = movieTime;
  const [adultAmount, setAdultAmount] = adult;
  const [moviesDetails, setMoviesDetails] = mDetails;
  const [childrenAmount, setChildrenAmount] = children;
  const { id } = useParams();
  const navigate = useNavigate();
  const timeArray = ["12:00", "14:20", "16:20", "19:10", "21:40"];
  useEffect(() => {
    if (id) {
      movieAPI.forEach((movie) => {
        if (movie.id === parseInt(id)) return setDetailMovie(movie);
      });
    }
  }, [id, movieAPI]);
  const toSeatsPage = (e) => {
    e.preventDefault();
    if (!adultAmount && !childrenAmount)
      return alert("Хүний тоогоо сонгоно уу?");
    if (!time) return alert("Цагаа сонгоно уу?");
    return [setMoviesDetails(detailMovie), navigate("/seats")];
  };
  const getTime = (e) => {
    const { id } = e.target;
    const timeButton = document.querySelectorAll("button");
    timeButton.forEach((button) => {
      if (button.getAttribute("id") === id)
        return (button.style.backgroundColor = "gray");
      return (button.style.backgroundColor = "#38BDF8");
    });

    setTime(id);
  };

  return (
    <div className="absolute top-0 left-0 w-full ">
      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path}`}
          alt={detailMovie.title}
        />
        <div className="absolute w-full bottom-[20%] left-[5%] p-4 md:p-8 text-white">
          <h1 className="text-3xl md:text-5xl font-bold">
            {detailMovie.title}
          </h1>
          <div className="flex my-2 space-x-2 items-center"></div>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-justify text-xl">
            {detailMovie.overview}
          </p>
          <button className="py-2 px-4 bg-blue-500 text-2xl mt-3 rounded-md">
            Video
          </button>
        </div>
        <img
          className="w-72 absolute  bottom-[20%] right-[10%]"
          src={`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`}
          alt=""
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-semibold mt-5">Цагийн хуваарь</h1>
        <div className="flex mt-10 space-x-6">
          {timeArray.map((time) => (
            <button
              id={time}
              onClick={getTime}
              className="p-4 text-2xl text-white rounded-lg bg-[#685268] hover:bg-sky-500/70"
            >
              {time}
            </button>
          ))}
        </div>
        <div className="mt-5 text-white font-semibold">
          <h1 className="text-3xl">Тасалбарын үнэ</h1>
          <h1 className="text-center text-2xl">Том хүн: 10000₮</h1>
          <h1 className="text-center text-2xl">Том хүн: 5000₮</h1>
        </div>
        <form className="mt-4 flex flex-col">
          <h1 className="mb-5 text-3xl text-white">
            Суудлын тоогоо сонгоно уу?
          </h1>
          <div className="flex justify-between my-2">
            <label
              htmlFor=""
              className="p-2 mr-5 text-xl bg-gray-300 rounded-md whitespace-nowrap"
            >
              Том хүн
            </label>
            <input
              type="number"
              className="p-2 border-2"
              value={adultAmount}
              min={"0"}
              onChange={(e) => setAdultAmount(e.target.value)}
            />
          </div>
          <div className="flex justify-between ">
            <label
              htmlFor=""
              className="p-2 mr-5 text-xl bg-gray-300 rounded-md"
            >
              Хүүхэд
            </label>
            <input
              type="number"
              className="p-2 border-2"
              min={"0"}
              value={childrenAmount}
              onChange={(e) => setChildrenAmount(e.target.value)}
            />
          </div>
          <button
            onClick={(e) => toSeatsPage(e)}
            className="p-2 my-3 text-xl text-white rounded-lg bg-sky-400"
          >
            Тасалбар захиалах
          </button>
        </form>
      </div>
    </div>
  );
};
