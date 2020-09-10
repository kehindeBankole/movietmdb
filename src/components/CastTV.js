import React , {useEffect}from "react";
import { useSelector , useDispatch } from "react-redux";
import noimage from '../components/noimage.jpg'
import CreditCard from "./CreditCard";
import Loading from "./Loading";
function CastTV(id) {
  const cast = useSelector((state) => state.creditTV.creditTV);
  const load = useSelector((state) => state.creditTV.load);


  if(load)return<Loading/>
  return (
    <div className="container">
      <h3>Cast</h3>
      <div className="wrappercast">
        {cast.cast
          ? cast.cast.map((d,i) => (
              <div className="">
                <div className="cast"  key={i}>
                  <CreditCard
                    img={d.profile_path!==null?`https://image.tmdb.org/t/p/w1280/${d.profile_path}`:noimage}
                    name={d.name}
                    xter={d.character}
                  />
                   
                </div>
              </div>
            ))
          : ""}
         
      </div>
    </div>
  );
}

export default CastTV;
