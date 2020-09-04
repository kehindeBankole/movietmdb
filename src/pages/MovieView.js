import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingular, getCredit, getVideo } from "../redux/movie/action";
import Headerview from "../components/Headerview";
import Cast from "../components/Cast";
import Video from "../components/Video";
import Loading from '../components/Loading'
function MovieView({ match }) {
  const { id } = useParams();
  const state = useSelector((state) => state.single.movie);
  const loadstate=useSelector((state) => state.single.load);
  const credit = useSelector((state) => state.credit.credit);
  const video = useSelector((state) => state.video);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingular(id));
    dispatch(getCredit(id));
    dispatch(getVideo(id));
  }, []);
  console.log(video);
  if(loadstate)return<Loading/>
  return (
    <div>
      <Headerview
        key={state.id}
        bgimage={`linear-gradient(rgba(0, 0, 0 , 0.5), rgba(0, 0, 0 , 0.5)),url('https://image.tmdb.org/t/p/w1280/${state.backdrop_path}')`}
        image={`https://image.tmdb.org/t/p/w1280/${state.poster_path}`}
        height="100vh"
        alt="movie banner"
        watch={state.homepage}
        name={state.title}
        year={new Date().getFullYear(state.release_date)}
        date={state.release_date}
        genre={
          state.genres
            ? state.genres.map((d, i) => (
                <span className="badge" key={i}>
                  •{d.name}
                </span>
              ))
            : ""
        }
        tagline={state.tagline}
        overview={state.overview}
        d1={
          credit.crew
            ? credit.crew.map((d, i) =>
                d.job === "Director" || d.job === "Writer" ? (
                  <>
                    <span key={i} className="text-white mr-3">
                      <b>{d.name}</b>
                    </span>
                  </>
                ) : (
                  ""
                )
              )
            : ""
        }
        d2={
          credit.crew
            ? credit.crew.map((d, i) =>
                d.job === "Director" || d.job === "Writer" ? (
                  <>
                    <span
                      key={i}
                      className="text-white"
                      style={{ marginRight: "3.5em" }}
                    >
                      {d.job}
                    </span>
                  </>
                ) : (
                  ""
                )
              )
            : ""
        }
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Cast />
            <br />
            <Video />
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
}

export default MovieView;
