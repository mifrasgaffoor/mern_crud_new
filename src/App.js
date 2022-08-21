import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import components
import CreateUser from "./components/CreateUser";
import UserTable from "./components/UserTable";
import Navbarcomponent from "./components/navbar.component";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Navbarcomponent />
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/users" element={<UserTable />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
