import React from "react";

function CreditCard(props) {
  return (
    <div>
      <div>
        <div className="card mr-3" style={{ width: "10rem" , borderRadius:"25px"}}>
          <img src={props.img} className="card-img-top img-rounded" style={{borderTopLeftRadius:"25px"}} alt="..." />
          <div className="card-body">
            <p className="card-text">
            <b>{props.name}</b>
            <br/>
            {props.xter}
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CreditCard;
