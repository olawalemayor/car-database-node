import React, { useEffect, useState } from "react";
import { ResponseResult } from "../../models";
import FilterService from "../../services/FilterService";
import Select from "./Select";
import { useNavigate } from "react-router-dom";

interface filterProp {
  setFilterCars: React.Dispatch<React.SetStateAction<ResponseResult>>;
  setFilteredYear: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filter({ setFilterCars, setFilteredYear }: filterProp) {
  const [makes, setMakes] = useState<string[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [models, setModels] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const filterService = apiUrl && new FilterService(apiUrl);

    const setFilterMakes = async () => {
      const result = filterService && (await filterService.getMakes());

      if (!result) return;

      setMakes(result.data);
    };

    setFilterMakes();
  }, [apiUrl]);

  const handleMakeSelect = (
    e: React.SyntheticEvent<HTMLSelectElement, Event>
  ) => {
    setYears([]);
    setModels([]);

    const setFilterModels = async () => {
      const filterService = apiUrl && new FilterService(apiUrl);
      const result =
        filterService && (await filterService.getModels(e.currentTarget.value));

      result && setModels(result.data);
    };

    setFilterModels();
    setSelectedMake(e.currentTarget.value);
  };

  const handleModelSelect = async (
    selectedMake: string,
    e: React.SyntheticEvent<HTMLSelectElement, Event>
  ) => {
    setYears([]);

    const setFilterYears = async () => {
      const filterService = apiUrl && new FilterService(apiUrl);
      const result =
        filterService &&
        (await filterService.getYears(selectedMake, e.currentTarget.value));

      result && setYears(result.data);
    };

    setFilterYears();
  };

  const handleSearch = (e: any) => {
    e.preventDefault();

    const getFormValue = (event: any, item: string) => event.target[item].value;

    const make = getFormValue(e, "make");
    const model = getFormValue(e, "model");
    const year = getFormValue(e, "year");

    const setCar = async (make: string, model: string, year: string) => {
      const filterService = apiUrl && new FilterService(apiUrl);

      const result =
        filterService && (await filterService.searchCar(make, model, year));

      result && setFilterCars(result.data);
    };

    setCar(make, model, year);
    setFilteredYear(year);

    navigate("");
  };

  return (
    <div className="w-full px-2 py-5">
      <form onSubmit={handleSearch} className="w-full">
        <Select
          data={makes}
          onChange={(e) => handleMakeSelect(e)}
          id="make"
          name="make"
          placeholder="Select Make"
        />

        <Select
          data={models}
          onChange={(e) => handleModelSelect(selectedMake, e)}
          id="model"
          name="model"
          placeholder="Select Model"
        />

        <Select data={years} id="year" name="year" placeholder="Select Year" />

        <button
          className="block mx-auto px-5 py-2 bg-blue-700 hover:bg-blue-500 text-white"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
