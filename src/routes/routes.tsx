/* eslint-disable prettier/prettier */
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import { Users } from "../pages/Users";
import { Doctors } from "../pages/Doctors";
import { Ubs } from "../pages/Ubs";

export function RoutesApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/ubs" element={<Ubs />} />
      </Routes>
    </div>
  );
}
