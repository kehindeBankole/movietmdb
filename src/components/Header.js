import React from "react";
import {useSelector} from 'react-redux'
function Header(props) {
  const data = useSelector((state) => state.trend);
  console.log(data.dataTrend.results[0].backdrop_path)
  const headerStyle = {
    backgroundImage:"url(https://images.pexels.com/photos/1040159/pexels-photo-1040159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: `75vh`,
  };
 // https://image.tmdb.org/t/p/w1280/${data.dataTrend.results[0].backdrop_path}
  return (
    <div className="jumbotron jumbotron-fluid" style={headerStyle}>
      <div className="container">
      </div>
    </div>
  );
}
export default Header;
