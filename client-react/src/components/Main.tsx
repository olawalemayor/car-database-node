import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./details/Details";
import Result from "./result/Result";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="car/:id" element={<Details />} />
        <Route path="" element={<Result />} />
      </Routes>
    </main>
  );
}
