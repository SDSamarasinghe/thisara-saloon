import { Card } from "antd";
import React from "react";
import "./ServicesCard.css";

const { Meta } = Card;

const ServicesCard = ({ service, forWhom }) => {
  return (
    <Card
      hoverable
      className="services__card"
      cover={
        <img
          alt="example"
          src={`images${forWhom}-${service.toLowerCase()}.png`}
        />
      }
    >
      <Meta title={service} description="" />
    </Card>
  );
};

export default ServicesCard;
