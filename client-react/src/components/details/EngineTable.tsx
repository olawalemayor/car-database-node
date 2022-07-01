import React from "react";
import { Engine } from "../../models/car";

interface EngineTableProps {
  name: string;
  engine: Engine;
}

export default function EngineTable({ engine, name }: EngineTableProps) {
  const props = Object.keys(engine[name]);

  return (
    <div>
      <h5 className="font-bold tracking-wider uppercase">
        Information for Engine: {name}
      </h5>

      {/* Table Header */}
      <div className="text-white bg-blue-700 flex px-2 uppercase">
        <div className="w-1/3 border-r border-white pr-2">Engine Property</div>
        <div className="w-2/3 pl-2">Description</div>
      </div>

      {/* Table body */}
      {props.map((prop, index) => (
        <div className="flex px-2 border-x border-b border-black" key={index}>
          <div className="w-1/3 border-r border-black pr-2">{prop}</div>
          <div className="w-2/3 pl-2">{engine[name][prop]}</div>
        </div>
      ))}
    </div>
  );
}
