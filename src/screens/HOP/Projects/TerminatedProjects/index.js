import React from "react";
import { forwardRef } from "react";
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from "@material-ui/icons";
import MaterialTable from "material-table";
import { Navigation, PageTitle, TabNavigation } from "../../../../components";
import { Tabs } from "../../../../components/TabNavigation";
import "./terminatedProjects.css";
import "../projects.css";
import { useNavigate } from "react-router-dom";
import { getTotalProjects } from "../ProjectApiCalls";

const TerminatedProjects = () => {
  const [data, setData] = React.useState([]);
  const [findingData, setFindingData] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    setFindingData(true);
    getTotalProjects(setFindingData, setData);
  }, []);

  console.log(data);

  const columns = [
    { title: "SN", field: "name", type: "string" },
    { title: "Name", field: "email", type: "string" },
    { title: "Email", field: "alias", type: "string" },
    { title: "Project Title", field: "division", type: "string" },
    { title: "Contract Type", field: "AvatarGroup", type: "string" },
    { title: "Project Desk Officer", field: "EXApprovalStatus" },
    { title: "Front Desk Officer", field: "EXApprovalStatus" },
  ];

  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentContainer contentsRight">
        <PageTitle title="Projects" />
        <div>
          <TabNavigation tabs={Tabs} />
        </div>
        <div>
          {findingData ? (
            <div className="loading__indicator">Getting...</div>
          ) : (
            <MaterialTable
              icons={{
                Add: forwardRef((props, ref) => (
                  <AddBox {...props} ref={ref} />
                )),
                Check: forwardRef((props, ref) => (
                  <Check {...props} ref={ref} />
                )),
                Clear: forwardRef((props, ref) => (
                  <Clear {...props} ref={ref} />
                )),
                Delete: forwardRef((props, ref) => (
                  <DeleteOutline {...props} ref={ref} />
                )),
                DetailPanel: forwardRef((props, ref) => (
                  <ChevronRight {...props} ref={ref} />
                )),
                Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
                Export: forwardRef((props, ref) => (
                  <SaveAlt {...props} ref={ref} />
                )),
                Filter: forwardRef((props, ref) => (
                  <FilterList {...props} ref={ref} />
                )),
                FirstPage: forwardRef((props, ref) => (
                  <FirstPage {...props} ref={ref} />
                )),
                LastPage: forwardRef((props, ref) => (
                  <LastPage {...props} ref={ref} />
                )),
                NextPage: forwardRef((props, ref) => (
                  <ChevronRight {...props} ref={ref} />
                )),
                PreviousPage: forwardRef((props, ref) => (
                  <ChevronLeft {...props} ref={ref} />
                )),
                ResetSearch: forwardRef((props, ref) => (
                  <Clear {...props} ref={ref} />
                )),
                Search: forwardRef((props, ref) => (
                  <Search {...props} ref={ref} />
                )),
                SortArrow: forwardRef((props, ref) => (
                  <ArrowDownward {...props} ref={ref} />
                )),
                ThirdStateCheck: forwardRef((props, ref) => (
                  <Remove {...props} ref={ref} />
                )),
                ViewColumn: forwardRef((props, ref) => (
                  <ViewColumn {...props} ref={ref} />
                )),
              }}
              title={`Terminated Projects: ${data.length}`}
              columns={columns}
              data={data}
              options={{
                exportButton: true,
                actionsCellStyle: {
                  color: "#FF00dd",
                },
                actionsColumnIndex: -1,

                headerStyle: {
                  backgroundColor: "none",
                  color: "black",
                  padding: "10px",
                  borderBottom: "1px solid rgba(196, 196, 196, 0.32)",
                },
              }}
              style={{
                boxShadow: "none",
                width: "95%",
                boxSizing: "border-box",
                paddingLeft: "30px",
                paddingRight: "30px",
                backgroundColor: "white",
                margin: "auto 1rem",
              }}
              actions={[
                {
                  icon: "visibility",
                  iconProps: {
                    style: { fontSize: "20px", color: "gold" },
                  },
                  tooltip: "View all",

                  onClick: (event, rowData) => {
                    navigate(`/totalproject/view/${rowData.ID}`);
                  },
                },
              ]}
              components={{
                Action: (props) => (
                  <button
                    onClick={(event) => props.action.onClick(event, props.data)}
                    className=""
                  >
                    <span>{props.action.tooltip}</span>
                  </button>
                ),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminatedProjects;
