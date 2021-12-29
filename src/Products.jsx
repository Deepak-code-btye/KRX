import React from "react";
import Card from "./Card/Card";
import Sdata from "./Card/Sdata";

const Products = () => {
  return (
    <>
      <section className="my-5">
        <div className=" text-center ">
          <h1 className=" display-4 ">Products us</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row gy-4">
            {Sdata.map((val, id) => {
              return <Card key={id} imgsrc={val.imgsrc} title={val.title} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
