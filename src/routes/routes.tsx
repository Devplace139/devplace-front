/* eslint-disable prettier/prettier */
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Users } from "../pages/Users";
import { Doctors } from "../pages/Doctors";
import { Clinics } from "../pages/Clinics";
import { Appointments } from "../pages/Appointments";

export function RoutesApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/ubs" element={<Clinics />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </div>
  );
}
