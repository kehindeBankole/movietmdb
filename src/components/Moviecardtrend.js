import React  from "react";
function Moviecardtrend(props) {
  const style = {
    backgroundImage: `${props.bgimage}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "250px",
    width: "150px",
    borderRadius : "20px",

  };
  return (
    <div>
      <div className="row">
        <div className="col">
         <div className="card" style={style}>
            <div className="card-body"></div>
            <span className="rate d-flex">
              <p className="mx-auto num" style={{ margin:'30% auto'}}>{props.rate}</p>
            </span>
            <b className="text-black" style={{marginTop:"15rem"}}>{props.name}</b>
            <p className="text-danger" style={{marginTop:""}}>{props.date} {props.day} , {props.year} </p>
          </div>
  
        </div>
      </div>
    </div>
  );
}
export default Moviecardtrend;
