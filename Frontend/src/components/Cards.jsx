import React from "react";

const Cards = ({item}) => {
  return (
    <>
      <div className="card w-80 h-100 hover:scale-105 duration-200 bg-base-100 shadow-xl mt-4 dark:border-white darK:rounded-lg dark:border-2">
        <div className="w-full my-1 h-3/4 bg-pink-300">
          <img
            src={item.image} className="w-full h-full"
          />
        </div>
        <div className="card-body dark:bg-slate-900 dark:text-white">
          <h2 className="card-title">
            
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.name}</p>
          <div className="flex justify-between">
            <div className="">{item.price}</div>
            <button className="rounded-lg border-2 hover:bg-pink-400 duration-200 hover:text-white px-2 py-2">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
