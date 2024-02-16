import { Spin } from "antd";
import React from "react";
import "./Spinner.css";

const Spinner = () => (
  <div className="spinner-wrapper">
    <Spin size="large" />
  </div>
);

export default Spinner;
