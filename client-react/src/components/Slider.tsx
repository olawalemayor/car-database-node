import React, { useState } from "react";
import prev from "../assets/images/previous-svgrepo-com.svg";
import next from "../assets/images/next-svgrepo-com.svg";

interface SliderProps {
  images: string[];
}

export default function Slider({ images }: SliderProps) {
  const [index, setIndex] = useState(0);

  const onPrevious = () => {
    const newIndex = index >= 0 ? index - 1 : 0;
    setIndex(newIndex);
  };
  const onNext = () => {
    const newIndex = index <= images.length - 1 ? index + 1 : images.length - 1;
    setIndex(newIndex);
  };

  return (
    <div>
      <img src={images[index]} className="w-full h-full lg:h-auto" alt="" />

      {index !== 0 && (
        <div className="absolute left-0 top-1/2">
          <button onClick={() => onPrevious()}>
            <img
              src={prev}
              alt="Previous"
              className="w-[30px] lg:w-[80px] bg-white rounded-full"
            />
          </button>
        </div>
      )}

      {index !== images.length - 1 && (
        <div className="absolute right-0 top-1/2">
          <button onClick={() => onNext()}>
            <img
              src={next}
              alt="Next"
              className="w-[30px] lg:w-[80px] bg-white rounded-full"
            />
          </button>
        </div>
      )}
    </div>
  );
}
