import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cards, Navigation, PageTitle } from "../../components";
import { getNewProjects } from "../../redux/actions/getAllProjectsAction/getAllProjectsAction";
import "./podDashboard.css";

function PdoDashboard() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getNewProjects());
  }, [dispatch]);

  const getProjectNew = useSelector((state) => state.getProjectNew);
  const { newProject } = getProjectNew;
  console.log(newProject);

  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Dashboard" />
        <div className="pageContent">
          <div className="cardFlex">
            <Cards
              title="New Projects"
              count={newProject && newProject.length}
            />
            <Cards title="Renewals" count={5} />
            <Cards title="Terminated" count={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdoDashboard;
