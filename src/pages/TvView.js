import React , {useEffect}from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Headerview from '../components/Headerview';
import { getSingularTv, getCreditTV } from '../redux/movie/action';
import CastTV from '../components/CastTV';
function TvView({match}) {
    const { id } = useParams();
    const state = useSelector((state) => state.singleTV.TV);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch( getSingularTv(id))
       dispatch( getCreditTV(id))
       //eslint-disable-next-line
      }, []);
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
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <CastTV />
              <br />
              {/* <Video /> */}
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    )
}

export default TvView
