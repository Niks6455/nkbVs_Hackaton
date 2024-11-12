import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import DataContext from "./context";
import styles from "./styles/app.css";
import Page1 from "./pages/PageGroup/Page1/Page1";
import Page2 from "./pages/PageGroup/Page2/Page2";
import Page3 from "./pages/PageGroup/Page3/Page3";
import Page4 from "./pages/PageGroup/Page4/Page4";
import Page5 from "./pages/PageGroup/Page5/Page5";
import Page6 from "./pages/PageGroup/Page6/Page6";
import Page7 from "./pages/PageGroup/Page7/Page7";
import Page8 from "./pages/PageGroup/Page8/Page8";
import Page9 from "./pages/PageGroup/Page9/Page9";
import Page10 from "./pages/PageGroup/Page10/Page10";
import Page11 from "./pages/PageGroup/Page11/Page11";
import Page12 from "./pages/PageGroup/Page12/Page12";
import Page13 from "./pages/PageGroup/Page13/Page13";
import Page14 from "./pages/PageGroup/Page14/Page14";
import Page15 from "./pages/PageGroup/Page15/Page15";
import Page16 from "./pages/PageGroup/Page16/Page16";
import Page17 from "./pages/PageGroup/Page17/Page17";
import Page18 from "./pages/PageGroup/Page18/Page18";
import Page19 from "./pages/PageGroup/Page19/Page19";
import Page20 from "./pages/PageGroup/Page20/Page20";
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
      <main className={styles.App}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Page1" element={<Page1 />}></Route>
          <Route path="/Page2" element={<Page2 />}></Route>
          <Route path="/Page3" element={<Page3 />}></Route>
          <Route path="/Page4" element={<Page4 />}></Route>
          <Route path="/Page5" element={<Page5 />}></Route>
          <Route path="/Page6" element={<Page6 />}></Route>
          <Route path="/Page7" element={<Page7 />}></Route>
          <Route path="/Page8" element={<Page8 />}></Route>
          <Route path="/Page9" element={<Page9 />}></Route>
          <Route path="/Page10" element={<Page10 />}></Route>
          <Route path="/Page11" element={<Page11 />}></Route>
          <Route path="/Page12" element={<Page12 />}></Route>
          <Route path="/Page13" element={<Page13 />}></Route>
          <Route path="/Page14" element={<Page14 />}></Route>
          <Route path="/Page15" element={<Page15 />}></Route>
          <Route path="/Page16" element={<Page16 />}></Route>
          <Route path="/Page17" element={<Page17 />}></Route>
          <Route path="/Page18" element={<Page18 />}></Route>
          <Route path="/Page19" element={<Page19 />}></Route>
          <Route path="/Page20" element={<Page20 />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  </DataContext.Provider>
  );
}

export default App;
