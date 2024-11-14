
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import SobreNos from "./pages/SobreNos";
import Detalhamento from "./pages/Detalhamento";
import "./utils/i18next";

const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user)=> {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre-nos" element={<SobreNos/>}/>
        <Route path="/detalhamento/:id" element={<Detalhamento/>}/>
        <Route path="/aluno" element={<SobreNos/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
