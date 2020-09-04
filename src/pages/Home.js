import React, { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Movietrendlist from "../components/Movietrendlist";
import Moviepopularlist from '../components/Moviepopularlist'
import { getTrending} from "../redux/movie/action";
export const Home = () => {
  const data = useSelector((state) => state.trend);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrending())
  }, [])
  if (data.load) return <Loading />;
  return (
    <div>
       <Header/>
      <div>
        <Movietrendlist />
        <Moviepopularlist />
      </div>
    </div>
  );
};
