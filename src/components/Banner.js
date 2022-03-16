import React from 'react';
import Logo from '../img/like.png';
import '../App.scss';

function Banner () {
    
    return (
      <div className="banner">
          <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                    <div className="banner-text text-left mt-4">
                        <h1 className="title-font">
                            We turn
                            your
                            dreams into
                            <span className="text-customer"> reality</span> 
                        </h1>
                    </div>
                </div>
                <div className="banner-image-mobile">
                    <div className="col-xl-7 col-lg-6 d-lg-block">
                        <div className="banner-area">
                            <img className="banner-image" src={Logo} alt="images"/>
                        </div>
                    </div>
                </div>
                <div className="banner-image-desktop col-xl-7 col-lg-6 d-lg-block">
                    <div className="banner-area">
                        <img className="banner-image" src={Logo} alt="images"/>
                    </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Banner;