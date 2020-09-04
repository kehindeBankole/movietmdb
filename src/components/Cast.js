import React from "react";
import { useSelector} from "react-redux";
import noimage from '../components/noimage.jpg'
import CreditCard from "./CreditCard";
import Loading from "./Loading";
function Cast(id) {
  const cast = useSelector((state) => state.credit.credit);
  const load = useSelector((state) => state.credit.load);
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

export default Cast;
