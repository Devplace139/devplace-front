/* eslint-disable prettier/prettier */
import { Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./styles/global";

import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Users from "./pages/Users";
import { Doctors } from "./pages/Doctors";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
