import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  createRoleReducer,
  deleteRoleReducer,
  getRoleReducer,
  updateRoleReducer,
} from "./reducers/admin/rolesReducers";
import { createUserReducer } from "./reducers/admin/userReducers";
import { authReducer, profileReducer } from "./reducers/authReducers";
import { postProjectReducer } from "./reducers/HopReducer/hopReducer";
import {
  getFrontDeskReducer,
  getProcurementHeadReducer,
  getProjectDeskReducer,
} from "./reducers/HopReducer/getProjectUserReducer";
import {
  getAllProjectReducer,
  getApprovedProjectReducer,
  getClosedProjectReducer,
  getNewProjectReducer,
  getPendingProjectReducer,
  getTerminatedProjectReducer,
} from "./reducers/getAllProjectsReducer/getAllProjectReducer";

const reducer = combineReducers({
  userLogin: authReducer,
  userProfile: profileReducer,
  createRole: createRoleReducer,
  getRole: getRoleReducer,
  updateRole: updateRoleReducer,
  deleteRole: deleteRoleReducer,
  createUser: createUserReducer,
  postNewProject: postProjectReducer,
  getProcurementPerson: getProcurementHeadReducer,
  getFrontDeskPerson: getFrontDeskReducer,
  getProjectPerson: getProjectDeskReducer,
  getProjectAll: getAllProjectReducer,
  getProjectNew: getNewProjectReducer,
  getClosedProject: getClosedProjectReducer,
  getProjectPending: getPendingProjectReducer,
  getProjectApproved: getApprovedProjectReducer,
  getTerminated: getTerminatedProjectReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
