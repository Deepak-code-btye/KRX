import React from "react";
import Card3 from "./card3/Card3";
import Sdata3 from "./card3/Sdata3";

const Portfolio = () => {
  return (
    <>
      <section className="my-5">
        <div className=" text-center">
          <h1 className=" display-4">Portfolio / Case studies </h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row">
            {Sdata3.map((val, id) => {
              return <Card3 key={id} imgsrc={val.imgsrc} title={val.title} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
