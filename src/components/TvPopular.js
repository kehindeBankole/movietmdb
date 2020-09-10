import React , {useEffect}from 'react'
import { useSelector , useDispatch} from "react-redux";
import { getTV } from '../redux/movie/action';
import Moviecardtrend from './Moviecardtrend';
import { Link } from 'react-router-dom';
function TvPopular() {
    const data = useSelector((state) => state.TV);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getTV());
      //eslint-disable-next-line
    }, []);
    return (
        <div>
       <div className="container mt-5">
    <h3 id="trending">popular tv shows</h3>
      <div className="wrapper">
        {data.load === false
          ? data.dataTv.results.map((e, i) => {
              return (
                <div className="item ml-4 mt-4 mb-5" key={i}>
                  <Link to={`/tv/${e.id}`} style={{textDecoration:"none"}}>
                  <Moviecardtrend
                    bgimage={`url('https://image.tmdb.org/t/p/w500/${e.poster_path}')`}
                    rate={e.vote_average}
                    name={e.title}
                    date={new Date(e.first_air_date).toLocaleString('default', { month: 'short' })}
                    day={new Date(e.first_air_date).getDate()}
                    year={new Date(e.first_air_date).getFullYear()}
                  />
                  </Link>
                </div>
              );
            })
          : ""}
      </div>
    </div>
    </div>
    )
}

export default TvPopular
