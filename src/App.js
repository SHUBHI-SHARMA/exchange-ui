import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import Second from './Second';
import Features from './Features';
import OurCrypto from './OurCrypto';
import SecondMobile from './SecondMobile';
import FeaturesMobile from './FeaturesMobile';
import OurCryptoMobile from './OurCryptoMobile';
export default function App() {
  

  const [width,setwidth] = React.useState(window.innerWidth)
  const handleWindowSizeChange = () => {
    setwidth(window.innerWidth)
  };
  useEffect(()=>{
    window.addEventListener('resize', handleWindowSizeChange());
  })
  const isMobile = width <= 900;

    if (isMobile)
    {
      return(
    <div className="App">
      <div className="App-header">
        <HeaderMobile/>
      </div>
      <div className="second">
<SecondMobile/>
      </div>
      <div className="Featuresm">
        <FeaturesMobile/>
      </div>
      <div className="ourcrypto">
        <OurCryptoMobile/>
      </div>
     
    </div>
  );
}
else{
  return(
    <div className="App">
    <div className="App-header">
      <Header/>
    </div>
    <div className="second">
<Second/>
    </div>
    <div className="Features">
      <Features/>
    </div>
    <div className="ourcrypto">
      <OurCrypto/>
    </div>
   
  </div>
    )
}
}


