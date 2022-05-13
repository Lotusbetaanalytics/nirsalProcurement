import React from "react";
import { Cards, Navigation, PageTitle } from "../../../components";

const FrontDeskDashboard = () => {
    
  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Dashboard" />
        <div className="cardFlex">
          <Cards title="Number of Created Projects" count={10} />
          <Cards title="Number of confirmed projects" count={10} />
          <Cards title="Number of rejected Projects" count={10} />
        </div>
      </div>
    </div>
  );
};

export default FrontDeskDashboard;
