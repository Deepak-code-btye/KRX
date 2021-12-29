import React from "react";
import Card1 from "./Card1/Card1";
import Sdata1 from "./Card1/Sdata1";

const Developer = () => {
  return (
    <>
      <section>
        <div className=" text-center">
          <h1 className=" display-4">Developers On Demand</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row gy-3">
            {Sdata1.map((val, id) => {
              return <Card1 imgsrc={val.imgsrc} title={val.title} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Developer;
