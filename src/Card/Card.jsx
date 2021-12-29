import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-8 col-xxl-4 mx-auto">
        <div className="card">
          <img
            className="card-img-top about_img"
            src={props.imgsrc}
            alt={props.imgsrc}
          />
          <div className="card-body"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
