import { useState } from "react";

export default function Food({ recipe }) {
  return (
    <div className="shadow-xl rounded-xl overflow-hidden">
      {/* food Image Container */}
      <div className="h-60 w-full ">
        <img
          src={recipe.image}
          alt=""
          className="object-center object-cover w-full h-full"
        />
      </div>
      {/*Food Description*/}
      <div className="py-4 px-8">
        <h3 className="text-xl font-bold mb-2">Rice and Chicken</h3>
        <p className="mb-2">
          {recipe.instructions[0]}...
          <p>
            <span className="block w-fit bg-blue-100">
              {recipe.rating} ⭐ Rating
            </span>
          </p>
        </p>
        <button className="text-white my-3 px-5 rounded bg-red-600 py-1">
          View Recipe
        </button>
      </div>
    </div>
  );
}
