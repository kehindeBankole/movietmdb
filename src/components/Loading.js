import React from "react";

function Loading() {
  return (
    <div className="load">
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-lg mr-3"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
}

export default Loading;
