/* eslint-disable prettier/prettier */
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Patient/Home";
import { Appointment } from "../pages/Patient/Appointment";

import { Dashboard } from "../pages/Admin/Dashboard";
import { Users } from "../pages/Admin/Users";
import { Doctors } from "../pages/Admin/Doctors";
import { Clinics } from "../pages/Admin/Clinics";
import { Appointments } from "../pages/Admin/Appointments";

export function RoutesApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-appointment" element={<Appointment />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/ubs" element={<Clinics />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </div>
  );
}
