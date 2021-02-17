import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Routes from "./Routes.jsx"

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
