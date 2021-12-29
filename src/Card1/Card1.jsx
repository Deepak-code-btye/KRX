import React from "react";

const Card1 = (props) => {
  return (
    <>
      <div className="col-md-4 col-8 col-xxl-4 mx-auto">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top about_img"
            alt={props.title}
          />
          <div className="card-body"></div>
        </div>
      </div>
    </>
  );
};

export default Card1;
