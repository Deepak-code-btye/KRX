import React from "react";
import { NavLink } from "react-router-dom";

const Crad2 = (props) => {
  return (
    <>
      <div className="col-md-4 col-8 col-xxl-4 mx-auto">
        <div class="card mx-auto">
          <img src={props.imgsrc} class="card-img-top" alt={props.title} />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" className="btn btn-primary mx-auto">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crad2;
