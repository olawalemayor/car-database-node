import React from "react";

interface SelectProp {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  data: string[];
  id: string;
  name: string;
  placeholder?: string;
}

export default function Select({
  onChange,
  data,
  id,
  name,
  placeholder,
}: SelectProp) {
  return (
    <div className="mb-3 w-full">
      <select
        className="w-full lg:w-[80%] mx-auto block border p-3 text-center"
        name={name}
        id={id}
        onChange={onChange}
      >
        <option className="w-full" value="">
          {placeholder}
        </option>
        {data.map((item, index) => (
          <option className="w-full" key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
