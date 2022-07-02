import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterService from "../services/FilterService";
import { ResponseResult } from "../models";
import { NavLink } from "react-router-dom";

interface HeaderProp {
  setFilterCars: React.Dispatch<React.SetStateAction<ResponseResult>>;
}

export default function Header({ setFilterCars }: HeaderProp) {
  const navigate = useNavigate();
  const [isSrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window.screen.width <= 768) {
      window.addEventListener("scroll", () =>
        window.scrollY === 0 ? setIsScrolled(false) : setIsScrolled(true)
      );
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const searchString: string = e.target["search"].value;
    const stringArr = searchString.toUpperCase().split(" ");

    if (stringArr.length !== 3) return;

    const [make, model, year] = stringArr;

    const apiUrl = process.env.REACT_APP_API_URL;

    const filterService = apiUrl && new FilterService(apiUrl);

    const result =
      filterService && (await filterService.searchCar(make, model, year));

    result && setFilterCars(result.data);

    navigate("");
  };
  return (
    <div className="flex flex-col lg:flex-row items-center m-2 lg:m-4 lg:justify-between py-2 lg:py-0">
      {!isSrolled && (
        <h1 className="my-2 lg:w-[30%] font-bold text-2xl text-center italic text-blue-700">
          <NavLink to="">
            CAR{" "}
            <span className="text-black not-italic border-2 p-2 rounded-md">
              DATABASE
            </span>
          </NavLink>
        </h1>
      )}

      <div className="focus-within:w-full lg:focus-within:w-1/2 border-2 border-blue-700 rounded-l-full rounded-r-full p-2 lg:pl-2 mt-5 lg:mt-0">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for vehicle"
            className="outline-none w-full pl-2 lg:pl-4 placeholder:normal-case text-blue-800 uppercase"
          />
        </form>
      </div>
    </div>
  );
}
