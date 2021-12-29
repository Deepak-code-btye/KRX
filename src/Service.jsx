import React from "react";
import Crad2 from "./Card2/Crad2";
import sdata2 from "./Card2/sdata2";

const Service = () => {
  return (
    <>
      <section>
        <div className=" text-center">
          <h1 className=" display-4">Service</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row gy-3">
            {sdata2.map((val, id) => {
              return <Crad2 key={id} imgsrc={val.imgsrc} title={val.title} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
