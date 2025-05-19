/* eslint-disable prettier/prettier */
import { Route, Routes } from "react-router-dom";

import Home from "./pages/User/Home/Home";
import Header from "./components/Header";
import Add from "./pages/User/Add";
import { Edit } from "./pages/User/Edit";
import Users from "./pages/User/Users";
import Search from "./pages/User/Search";
import { GlobalStyle } from "./styles/global";
import { Doctors } from "./pages/User/Doctors";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<Add />} />
          <Route path="/edit-user/:id" element={<Edit />} />
          <Route path="/users" element={<Users />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/search-users" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
