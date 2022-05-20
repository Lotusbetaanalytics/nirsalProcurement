import React from "react";
import { Cards, Navigation, PageTitle } from "../../components";
import "./podDashboard.css";

function PdoDashboard() {
  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Dashboard" />
        <div className="pageContent">
          <div className="cardFlex">
            <Cards title="New Projects" count={10} />
            <Cards title="Renewals" count={5} />
            <Cards title="Terminated" count={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdoDashboard;
