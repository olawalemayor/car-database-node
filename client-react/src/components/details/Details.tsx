import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailService from "../../services/detailService";
import Car from "../../models/car";
import EngineBlock from "./EngineBlock";
import Slider from "../Slider";

export default function Details() {
  const { id } = useParams();
  const apiUrl = process.env.REACT_APP_API_URL;
  const [car, setCar] = useState<Car>();

  useEffect(() => {
    const setCarInfo = async (apiUrl: string, id: string) => {
      const detailService = new DetailService(apiUrl);

      const result = await detailService.getCarInfo(id);

      setCar(result.data);
    };

    id && apiUrl && setCarInfo(apiUrl, id);
  }, [apiUrl, id]);

  return (
    <div className="mb-10">
      {car && (
        <React.Fragment>
          <h3 className="text-center lg:text-left text-2xl lg:text-4xl font-bold">
            {car.model} {car.brand}
          </h3>

          <div className="bg-black w-full h-auto overflow-hidden relative">
            <Slider images={car.images_links} />
          </div>

          <div className="mt-4">
            <h4 className="uppercase text-lg font-bold text-blue-700">
              Details
            </h4>

            {!car.description && (
              <p>No description available for this vehicle</p>
            )}

            {car.description && (
              <p className="text-justify h-52 overflow-y-scroll border p-2 bg-slate-700 text-white text-xl font-thin tracking-wider leading-9">
                {car.description}
              </p>
            )}
          </div>

          <div className="mt-4">
            <h4 className="uppercase text-lg font-bold text-blue-700">
              Engines
            </h4>

            <EngineBlock car={car} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
