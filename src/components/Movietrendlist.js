import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrending } from "../redux/movie/action";
import Moviecardtrend from "./Moviecardtrend";
import { Link } from "react-router-dom";

function Movietrendlist() {
  const data = useSelector((state) => state.trend);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrending());
    //eslint-disable-next-line
  }, []);
if(data.dataTrend.load)return "loading"
  return (
    <div className="container">
      <h3 id="trending">trending</h3>
      <div className="wrapper">
        {data.load === false
          ? data.dataTrend.results.map((e, i) => {
              return (
                <div className="item ml-4 mt-4" key={i}>
                  <Link to={`/movie/${e.id}`} style={{textDecoration:"none"}}>
                    <Moviecardtrend
                      bgimage={`url('https://image.tmdb.org/t/p/w500/${e.poster_path}')`}
                      rate={e.vote_average}
                      name={e.title}
                    />
                  </Link>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Movietrendlist;
