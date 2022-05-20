import React, { useState } from "react";
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
import data from "../dataPdo";
import { Modal, Navigation, PageTitle } from "../../components";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";

function PdoNewProjectList() {
  const columns = [
    { title: "SN", field: "id", hidden: false },
    { title: "Name", field: "Name", type: "string" },
    { title: "Email", field: "Email", type: "string" },
    { title: "Project Title", field: "ProjectTile", type: "string" },
    { title: "Contract Type", field: "ContractType", type: "string" },
    { title: "Project Desk Officer", field: "ProjectDeskOfficer" },
    { title: "Front Desk Officer", field: "FrontDeskOfficer" },
    { title: "Actions", field: "actions" },
  ];

  const [openModal, setOpenModal] = useState(false);

  // const [data, setData] = useState([]);
  const datapoints = data;
  console.log(datapoints);

  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Dashboard" />
        <div className="pageContentList">
          <MaterialTable
            title="New Project List"
            icons={{
              Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
              Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
              Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
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
            columns={columns}
            data={data}
            actions={[
              {
                icon: () => (
                  <Link to="/">
                    <button
                      style={{
                        backgroundColor: "#6B9109",
                        fontSize: 14,
                        padding: 10,
                        borderRadius: 10,
                        color: "#fff",
                      }}
                    >
                      Select
                    </button>
                  </Link>
                ),
                tooltip: "Select",
                onClick: (e, data) => console.log(data),
              },
            ]}
          />
          <Modal isVisible={openModal} />
        </div>
      </div>
    </div>
  );
}

export default PdoNewProjectList;
