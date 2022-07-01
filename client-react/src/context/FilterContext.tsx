import React from "react";
import ResponseResult from "../models/response";

const filterContext = React.createContext<
  [ResponseResult, React.Dispatch<React.SetStateAction<ResponseResult>>]
>([{ next: [], result: [] }, () => {}]);

export default filterContext;
