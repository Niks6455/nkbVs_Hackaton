import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import DataContext from "./context";
import Auth from "./pages/PageGroup/Page1/Auth";

function App() {

  const context = {
    valueBasic: "Home Page",
  };

  return (
    <DataContext.Provider
    value={
      context
    }
  >
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Auth" element={<Auth />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  </DataContext.Provider>
  );
}

export default App;
