import React from "react";
import ResponseResult from "../models/response";

const filterContext = React.createContext<
  [ResponseResult, React.Dispatch<React.SetStateAction<ResponseResult>>, string]
>([{ next: [], result: [] }, () => {}, ""]);

export default filterContext;
