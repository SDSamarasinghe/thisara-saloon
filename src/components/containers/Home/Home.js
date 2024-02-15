import { Button, Carousel } from "antd";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="wrapper wrapper--home d-flex space-between align-items-center">
      <div>
        <h2 className="title">
          Cuts, Colour Specialists, Hair, Waxing for Men & Women
        </h2>

        <Button type="primary" size={"large"} className="button-main">
          Sign up for booking
        </Button>
      </div>
      <Carousel dotPosition="bottom" autoplay="true">
        <div className="slide">
          <img
            src="/images/stylist-1.jpg"
            alt="Anna is a cutting Specialist"
          ></img>
          <h3>Anna</h3>
          <div>Cutting Specialist</div>
        </div>
        <div>
          <img
            src="/images/stylist-2.png"
            alt="Whitney is a Makeup Artist and a Facial Waxing Specialist"
          ></img>
          <h3>Whitney</h3>
          <div>
            Makeup Artist,
            <br /> Facial Waxing Specialist
          </div>
        </div>
        <div>
          <img
            src="/images/stylist-3.jpg"
            alt="Karla is a Master Colorist"
          ></img>
          <h3>Karla</h3>
          <div>Master Colorist</div>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
