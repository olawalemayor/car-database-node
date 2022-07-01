import React, { useState } from "react";
import { Car } from "../../models";
import EngineTable from "./EngineTable";
import { Engine } from "../../models/car";

interface EngineBlockProps {
  car: Car;
}

export default function EngineBlock({ car }: EngineBlockProps) {
  const [engineName, setEngineName] = useState<string>(
    Object.keys(car.engines[0])[0]
  );
  const [activeEngine, setActiveEngine] = useState<Engine>(car.engines[0]);

  const setEngineTable = (engine: Engine, name: string) => {
    setActiveEngine(engine);
    setEngineName(name);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/4 mb-5 lg:mb-0">
        {car.engines.map((engine) => {
          const engineNames = Object.keys(engine);

          return engineNames.map((name, engineIndex) => (
            <React.Fragment key={engineIndex}>
              <li
                className="text-blue-600 underline cursor-pointer"
                onClick={() => setEngineTable(engine, name)}
              >
                {name}
              </li>
            </React.Fragment>
          ));
        })}
      </div>

      <div className="lg:w-3/4">
        <EngineTable name={engineName} engine={activeEngine} />
      </div>
    </div>
  );
}
