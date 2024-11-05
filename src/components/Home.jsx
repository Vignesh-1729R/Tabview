import React from "react";
import "../saas/home.scss";
import Background from "../assets/background.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const handleTable = () => {
    navigate("/table");
  };

  const handleCards = () => {
    navigate("/cards");
  }
  return (
    <div className="main">
      <img src={Background} alt="background" />
      <h1>Welcome to the Home Page</h1>
      <h3>To Know about Student and Staff </h3>
      <p>Click the Home link in the navbar to view the TableView.</p>
      <div className="btn-container">
        <button className="home-btn" onClick={handleTable}>Table</button>
        <button className="home-btn" onClick={handleCards}>Cards</button>
      </div>
    </div>
  );
};

export default Home;
