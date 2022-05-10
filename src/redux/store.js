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

const reducer = combineReducers({
  userLogin: authReducer,
  userProfile: profileReducer,
  createRole: createRoleReducer,
  getRole: getRoleReducer,
  updateRole: updateRoleReducer,
  deleteRole: deleteRoleReducer,
  createUser: createUserReducer,
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
