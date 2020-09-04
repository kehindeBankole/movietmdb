import React from "react";

export default function Headerview(props) {
  const headerStyle = {
    backgroundImage: `${props.bgimage}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="jumbotron jumbotron-fluid header-view" style={headerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card" style={{ zIndex: 999 }}>
              <img
                src={props.image}
                alt={`${props.alt}`}
                className="img-fluid"
              />
              
            </div>
          </div>
          <div className="col-lg-8 mx-auto">
            <div className="mt-5" id="nameyear">
              <span>{props.name}</span>{" "}
              <span className="ml-2">({props.year})</span>
            </div>
            <b className="text-white">
              {props.rating} {props.date} {props.genre}
            </b>
            <p id="tagline">{props.tagline}</p>
            <h3 className="text-white">Overview</h3>
            <p>{props.overview}</p>

            <div className="">
              <div>{props.d1}</div>
              <div>{props.d2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
