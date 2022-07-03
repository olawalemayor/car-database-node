import React, { useState } from "react";
import "./App.css";
import Filter from "./components/filter/Filter";
import Header from "./components/Header";
import Main from "./components/Main";
import FilterContext from "./context/FilterContext";
import { ResponseResult } from "./models";

function App() {
  const [filterCars, setFilterCars] = useState<ResponseResult>({
    result: [],
    next: [],
  });
  const [filteredYear, setFilteredYear] = useState<string>("");

  return (
    <div className="App">
      <FilterContext.Provider value={[filterCars, setFilterCars, filteredYear]}>
        <header className="mb-10 fixed top-0 w-full bg-white z-50 shadow-lg">
          <Header setFilterCars={setFilterCars} />
        </header>

        <div className="flex flex-col lg:flex-row mt-32 ">
          <div className="w-full lg:w-[30%] mt-5">
            <div className="lg:fixed lg:w-[30%] lg:h-full">
              <Filter
                setFilterCars={setFilterCars}
                setFilteredYear={setFilteredYear}
              />
            </div>
          </div>

          <div className="w-full lg:w-[70%] mt-5 px-5">
            <Main />

            <footer className="border-t py-10 bg-slate-800">
              <div className="text-center text-white">
                Designed by{" "}
                <span className="font-bold uppercase text-blue-700">
                  Olawale Mayor
                </span>{" "}
                using MongoDB, Express, React and NodeJs
              </div>
            </footer>
          </div>
        </div>
      </FilterContext.Provider>
    </div>
  );
}

export default App;
