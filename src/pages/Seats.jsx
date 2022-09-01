import { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
export const Seats = () => {
  const [seats, setSeats] = useState([]);
  const { children, adult } = useContext(MovieContext);
  const [adultAmount, setAdultAmount] = adult;
  const [childrenAmount, setChildrenAmount] = children;
  const vipSeatsArray = new Array(4).fill(new Array(13).fill(""));
  const regularSeatsArray = new Array(13).fill(new Array(18).fill(""));
  const letter = (a) => {
    return String.fromCharCode(a + 65);
  };
  const seatIds = (a, b, e) => {
    if (seats.length !== parseInt(adultAmount) + parseInt(childrenAmount)) {
      setSeats([
        ...seats,
        { row: letter(a), col: b + 1, sold: true, id: e.target.id },
      ]);
      e.target.style.visibility = "hidden";
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white w-1/2 text-center py-4 text-black rounded-md font-semibold text-2xl mb-4">
        Дэлгэц
      </div>
      {regularSeatsArray.map((row, j) => {
        return (
          <div className="flex justify-between gap-1" key={j}>
            <h1 className="mr-2 text-white font-semibold w-3 text-center">
              {letter(j)}
            </h1>
            {row.map((col, i) => {
              return (
                <button
                  id={letter(i) + i}
                  onClick={(e) => seatIds(j, i, e)}
                  key={i}
                  className="w-6 h-6 my-1 text-white text-base bg-red-400 rounded-md"
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        );
      })}
      <div className="mt-10 text-center space-y-4">
        {vipSeatsArray.map((row, i) => (
          <div key={i} className="space-x-5 flex items-center text-xl">
            <h1 className="mr-2 text-white font-semibold w-3 text-center">
              {letter(i)}
            </h1>
            {row.map((col, j) => (
              <button
                key={j}
                className="w-7 h-7 my-1 text-white text-base bg-[#e5d3b3] rounded-md"
              >
                {i + 1}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
