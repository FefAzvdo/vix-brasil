import React from "react";
import Navbar from "./components/navbar"
import FixedHeader from './components/fixed-header'
import "./index.css"

const titleLogo = require('./assets/header-logo-vix.png')
const mainBanner = require('./assets/main-banner.jpg')

function App() {
  return (
    <div>
      <Navbar/>
      <div className="main_title_logo">
        <img src={titleLogo} alt="Logo principal título"/>
      </div>
      <FixedHeader/>
      <img src={mainBanner} alt="Banner principal" width="100%"/>
      <img src={mainBanner} alt="Banner principal" width="100%"/>
      <img src={mainBanner} alt="Banner principal" width="100%"/>
      <img src={mainBanner} alt="Banner principal" width="100%"/>
      <img src={mainBanner} alt="Banner principal" width="100%"/>
      <img src={mainBanner} alt="Banner principal" width="100%"/>
      <img src={mainBanner} alt="Banner principal" width="100%"/>
    </div>
  );
}

export default App;
