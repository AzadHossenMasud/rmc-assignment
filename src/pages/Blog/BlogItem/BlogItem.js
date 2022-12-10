import React from "react";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogItem = ({ food }) => {
//   console.log(food);
  const {strCategory, strMealThumb,strYoutube, strMeal, strInstructions }=food
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-purple-900">{strMeal}</h2>
        <p className=" text-lg font-semibold">Food Type: {strCategory}</p>
        <p>{strInstructions.slice(0,50) + '...'}</p>
        <div className="card-actions justify-end">
            <a target='_blank' href={strYoutube} className=" flex items-center gap-2 btn btn-sm btn-primary"><FaYoutube></FaYoutube> Watch</a>
          
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
