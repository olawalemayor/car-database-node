import React, { useContext } from "react";
import filterContext from "../../context/FilterContext";
import { useNavigate } from "react-router-dom";
import placeholderImage from "../../assets/images/pexels-khalid-satvilker-10590576.jpg";

export default function SearchResult() {
  const [filterCars, , year] = useContext(filterContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="border-b-4 border-red-600 py-2 flex items-end">
        <h2 className="text-white text-2xl lg:text-5xl">SEARCH RESULT:</h2>
        {!filterCars.result.length && (
          <div className="text-red-500 ml-2 text-sm md:text-base lg:text-lg">
            Search for your vehicle
          </div>
        )}
      </div>

      <div className="bg-white w-full h-full p-2">
        {!filterCars.result.length && (
          <img
            src={placeholderImage}
            alt="by Khalid Satvilker"
            className="w-full h-auto opacity-70"
            onContextMenu={(e) => e.preventDefault()}
          />
        )}

        {filterCars.result &&
          filterCars.result.map(
            ({ brand, model, images_links, description, _id }, index) => (
              <div
                className="flex flex-col lg:flex-row p-2 rounded-md mb-2 shadow-2xl"
                key={index}
              >
                <div className="w-full lg:w-[40%] xl:w-[30%] mt-2 px-2">
                  <div className="bg-black">
                    <img
                      src={images_links[0]}
                      alt={`${model} ${brand}`}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-[60%] xl:w-[70%]">
                  <h4 className="font-bold text-2xl">
                    {model} {brand} {year}
                  </h4>

                  {!description && (
                    <div className="text-gray-600 mb-2 lg:h-24">
                      No description available for this vehicle
                    </div>
                  )}

                  {description && (
                    <div className="h-24 overflow-hidden text-gray-600 mb-2">
                      {description}
                    </div>
                  )}

                  <button
                    className="px-4 py-2 bg-blue-700 hover:bg-blue-500 text-white block mx-auto lg:mx-0"
                    onClick={() => navigate(`car/${_id}`)}
                  >
                    SEE MORE
                  </button>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
}
