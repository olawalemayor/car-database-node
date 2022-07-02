import React, { useContext } from "react";
import filterContext from "../../context/FilterContext";
import { useNavigate } from "react-router-dom";
import placeholderImage from "../../assets/images/pexels-khalid-satvilker-10590576.jpg";

export default function SearchResult() {
  const [filterCars] = useContext(filterContext);

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
                className="flex flex-col lg:flex-row p-2 bg-slate-100 hover:bg-slate-300 cursor-pointer border border-blue-500 rounded-md mb-2"
                key={index}
                onClick={() => navigate(`car/${_id}`)}
              >
                <div className="w-full lg:w-[40%] xl:w-[30%] mt-2 px-2">
                  <div className="w-full lg:w-[200px] h-[250px] lg:h-[200px] bg-black">
                    <img
                      src={images_links[0]}
                      alt={`${model} ${brand}`}
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-[60%] xl:w-[70%]">
                  <div className="h-48 overflow-hidden text-black">
                    {description}
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
}
