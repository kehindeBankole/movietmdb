import React , {useEffect}from 'react'
import { useSelector , useDispatch} from "react-redux";
import Moviecardtrend from '../components/Moviecardtrend'
import { Link } from 'react-router-dom';
import { getPopular } from '../redux/movie/action';
import Loading from './Loading';
function Moviepopularlist() {
  const data = useSelector((state) => state.popular);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopular());
    //eslint-disable-next-line
  }, []);
  if(data.load)return<Loading/>
  return (
    <div>
       <div className="container mt-5">
    <h3 id="trending">popular</h3>
      <div className="wrapper">
        {data.load === false
          ? data.dataPopular.results.map((e, i) => {
              return (
                <div className="item ml-4 mt-4 mb-5" key={i}>
                  <Link to={`/movie/${e.id}`} style={{textDecoration:"none"}}>
                  <Moviecardtrend
                    bgimage={`url('https://image.tmdb.org/t/p/w500/${e.poster_path}')`}
                    rate={e.vote_average}
                    name={e.title}
                    date={new Date(e.release_date).toLocaleString('default', { month: 'short' })}
                    day={new Date(e.release_date).getDate()}
                    year={new Date(e.release_date).getFullYear()}
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
