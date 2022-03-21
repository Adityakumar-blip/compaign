import React, { Component } from "react";
import "./main.css";
import Slider from "react-slick";

export default class main extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      // speed: 20000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <>
        <div className="main-container">
      <div className="nav">
        <div className='nav-text'>
        <h5>Homes</h5>
        <h5>Games</h5>
        <h5>Tournaments</h5>
        </div>
      </div>
          <div className="main-first-container">
            <div className="logo">
              <img src="https://www.gamerji.com/img/logo.png" alt="" />
            </div>
            <div className="orange-text">
              <h1>
                PLAY ESCORTS
                <br /> TOURNAMENTS
              </h1>
            </div>
            <div className="white-text">
              <h1>& WIN REWARDS</h1>
            </div>
            <div className="yellow-text">
              <h5>Your first step to becoming a gamer!</h5>
            </div>
            <div className="playstore-button">
              <img
                src="https://brandlogos.net/wp-content/uploads/2016/09/get-it-on-google-play.png"
                alt=""
              />
            </div>
          </div>

          <div className="main-second-container">
            <div className="row games">
              <div className="col-sm-4 game">
                <h1>Games</h1>
                <p>
                  Daily tournaments for your
                  <br /> favourite games. Build your slots &<br /> win exciting
                  prizes!.
                </p>
              </div>
              <div className="col-sm-8">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div className="slide-one">
                      <div className="slides"></div>
                    </div>
                    <div className="slide-one">
                      {" "}
                      <div className="slides"></div>
                    </div>
                    <div className="slide-one">
                      {" "}
                      <div className="slides"></div>
                    </div>
                    <div className="slide-one">
                      {" "}
                      <div className="slides"></div>
                    </div>
                    <div className="slide-one">
                      {" "}
                      <div className="slides"></div>
                    </div>
                    <div className="slide-one">
                      {" "}
                      <div className="slides"></div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>

          <div className="main-third-container">
            <h1>FEATURED TOURNAMENTS</h1>
          </div>
        </div>

        <div className="second-main-container">
        <div class="trapezoid1 triangle-right">
            <div className="weekly-main">
            <div className="weekly-tournament">
                <h3>WCC3-WEEKLY TOURNAMENT</h3>
                <h5>Date:21-03-2022 | ID:OKINDIA</h5>
            </div>
            <div className="match-details">
                <div className="map">
                    <h5>Map:Chennai</h5>
                    <h5>Winning:Rs.500</h5>
                    <h5>Hosted By:</h5>
                </div>
                <div className="perspective">
                    <h5>Perspective:2</h5>
                    <h5>Winners:2</h5>
                    </div>
                <div className="round">
                    <h5>Round:4</h5>
                    <h5>Entry Fee: Rs 0</h5>
                </div>

            </div>
            </div>
            <div className="join-now"><h1>JOIN NOW</h1></div>
        </div>
        <div class="trapezoid2">
            <div className="trapezoid2-join-now"><h1>JOIN NOW</h1></div>
            <div className="trapezoid2-weekly-main">
            <div className="trapezoid2-weekly-tournament">
                <h3>VALORANT</h3>
                <h5>Date:21-03-2022 | ID:OKINDIA</h5>
            </div>
            <div className="match-details">
                <div className="map">
                    <h5>Map:Chennai</h5>
                    <h5>Winning:Rs.500</h5>
                    
                </div>
                <div className="perspective">
                    <h5>Perspective:2</h5>
                    <h5>Winners:2</h5>
                    </div>
                <div className="round">
                    <h5>Round:4</h5>
                    <h5>Entry Fee: Rs 0</h5>
                    <h5>Hosted By:</h5>
                </div>

            </div>
            </div>
        </div>
        </div>
      </>
    );
  }
}
