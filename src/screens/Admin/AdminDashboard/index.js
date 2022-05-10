import React from "react";
import { Cards, Navigation, PageTitle } from "../../../components";

const AdminDashboard = () => {
  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Dashboard" />
        <div className="cardFlex">
          <Cards title="Total Number of Roles" count={10} />
          <Cards title="Front Office" count={10} />
          <Cards title="Origination Team" count={10} />
          <Cards title="Evaluation Team" count={10} />
          <Cards title="Contract Team" count={10} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
