import React , {useEffect}from 'react'
import { useSelector , useDispatch} from "react-redux";
import Moviecardtrend from '../components/Moviecardtrend'
import { Link } from 'react-router-dom';
import { getPopular } from '../redux/movie/action';
function Moviepopularlist() {
  const data = useSelector((state) => state.popular);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopular());
  }, []);
  return (
    <div>
       <div className="container mt-5">
    <h3 id="trending">popular</h3>
      <div className="wrapper">
        {data.load === false
          ? data.dataPopular.results.map((e, i) => {
              return (
                <div className="item ml-4 mt-4 mb-5" key={i}>
                  <Link to={`/movie/${e.id}`}>
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
    </div>
  )
}

export default Moviepopularlist
