import React from "react";
import logo from "../../asset/logo.png";
import { AiFillAppstore, AiOutlineLogout, AiFillSetting,AiOutlineFundProjectionScreen,AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiCalendarCheck, BiCalendarX } from "react-icons/bi";
import { ImCheckmark2 } from "react-icons/im";
import { GrTableAdd } from "react-icons/gr";
import { MdPending,MdPendingActions,MdOutlineAssignmentReturned } from "react-icons/md";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const user = "John";

  const admin = false;
  const hop = false;
  const frontDesk = true;
  const pdo = false;
  const teamMember = false;
  const hot = false;
  const evaluation = false;
  

  return (
    <div className={styles.sideBar_container}>
      <div className={styles.logo}>
        <img src={logo} alt="NIRSAl" />
      </div>
      <div className={styles.User}> Hi {user}</div>
      <div className={styles.url}>
        {admin ? (
          <ul>
            <Link to="/#">
              <li className={props.dashboard}>
                <div className={styles.svg}>
                  <AiFillAppstore />
                </div>
                Dashboard
              </li>
            </Link>
            
            <Link to="/#">
              <li className={props.configure_role}>
                <div className={styles.svg}>
                  <div>
                    <AiFillSetting />
                  </div>
                </div>
                Configure Role
              </li>
            </Link>
            <Link to="/#">
              <li className={props.logout}>
                <div className={styles.svg}>
                  <div>
                    <AiOutlineLogout />
                  </div>
                </div>
                Logout
              </li>
            </Link>
          </ul>
        ) : hop ? (
          <ul>
            <Link to="/#">
              <li className={props.dashboard}>
                <div className={styles.svg}>
                  <AiFillAppstore />
                </div>
                Dashboard
              </li>
            </Link>
            <Link to="/#">
              <li className={props.pending}>
                <div className={styles.svg}>
                  <ImCheckmark2 />
                </div>
                Projects
              </li>
            </Link>
            <Link to="/#">
              <li className={props.budget}>
                <div className={styles.svg}>
                  <AiOutlineFundProjectionScreen />
                </div>
                Budget
              </li>
            </Link>
            <Link to="/#">
              <li className={props.logout}>
                <div className={styles.svg}>
                  <div>
                    <AiOutlineLogout />
                  </div>
                </div>
                Logout
              </li>
            </Link>
          </ul>
        ) : frontDesk ? (
            <ul>
              <Link to="/#">
                <li className={props.dashboard}>
                  <div className={styles.svg}>
                    <AiFillAppstore />
                  </div>
                  Dashboard
                </li>
              </Link>
              <Link to="/#">
                <li className={props.initiate_project}>
                  <div className={styles.svg}>
                    <AiOutlineAppstoreAdd />
                  </div>
                  Initiate Project
                </li>
              </Link>
              <Link to="/#">
                <li className={props.project}>
                  <div className={styles.svg}>
                    <ImCheckmark2 />
                  </div>
                  Projects
                </li>
              </Link>

              <Link to="/#">
                <li className={props.logout}>
                  <div className={styles.svg}>
                    <div>
                      <AiOutlineLogout />
                    </div>
                  </div>
                  Logout
                </li>
              </Link>
            </ul>
          ) : pdo ? ( <ul>
            <Link to="/#">
              <li className={props.dashboard}>
                <div className={styles.svg}>
                  <AiFillAppstore />
                </div>
                Dashboard
              </li>
            </Link>
            <Link to="/#">
              <li className={props.new_project}>
                <div className={styles.svg}>
                  <AiOutlineAppstoreAdd />
                </div>
                New Project
              </li>
            </Link>
            <Link to="/#">
              <li className={props.renewal_list}>
                <div className={styles.svg}>
                  <GrTableAdd />
                </div>
                Renewal List
              </li>
            </Link>
            <Link to="/#">
                <li className={props.project}>
                  <div className={styles.svg}>
                    <ImCheckmark2 />
                  </div>
                  Projects
                </li>
              </Link>
            <Link to="/#">
              <li className={props.logout}>
                <div className={styles.svg}>
                  <div>
                    <AiOutlineLogout />
                  </div>
                </div>
                Logout
              </li>
            </Link>
          </ul>) : teamMember? (<ul>
            <Link to="/#">
              <li className={props.dashboard}>
                <div className={styles.svg}>
                  <AiFillAppstore />
                </div>
                Dashboard
              </li>
            </Link>
            <Link to="/#">
              <li className={props.pending_project}>
                <div className={styles.svg}>
                  <MdPending />
                </div>
                Pending Projects
              </li>
            </Link>
           
            <Link to="/#">
              <li className={props.logout}>
                <div className={styles.svg}>
                  <div>
                    <AiOutlineLogout />
                  </div>
                </div>
                Logout
              </li>
            </Link>
          </ul>) : hot? (<ul>
            <Link to="/#">
              <li className={props.dashboard}>
                <div className={styles.svg}>
                  <AiFillAppstore />
                </div>
                Dashboard
              </li>
            </Link>
            <Link to="/#">
              <li className={props.pending_project}>
                <div className={styles.svg}>
                  <MdPending />
                </div>
                Pending Projects
              </li>
            </Link>
            <Link to="/#">
              <li className={props.assign_project}>
                <div className={styles.svg}>
                  <MdOutlineAssignmentReturned />
                </div>
                Assign Project
              </li>
            </Link>
            <Link to="/#">
              <li className={props.logout}>
                <div className={styles.svg}>
                  <div>
                    <AiOutlineLogout />
                  </div>
                </div>
                Logout
              </li>
            </Link>
          </ul>) : evaluation? (<ul>
            <Link to="/#">
              <li className={props.dashboard}>
                <div className={styles.svg}>
                  <AiFillAppstore />
                </div>
                Dashboard
              </li>
            </Link>
            <Link to="/#">
              <li className={props.pending_project}>
                <div className={styles.svg}>
                  <MdPending />
                </div>
                Pending Projects
              </li>
            </Link>
            <Link to="/#">
              <li className={props.logout}>
                <div className={styles.svg}>
                  <div>
                    <AiOutlineLogout />
                  </div>
                </div>
                Logout
              </li>
            </Link>
          </ul>) : (
          <ul>
                        <Link to="/#">
              <li className={props.dashboard}>
                <div className={styles.svg}>
                  <AiFillAppstore />
                </div>
                Dashboard
              </li>
            </Link>
            <Link to="/#">
              <li className={props.pending_project}>
                <div className={styles.svg}>
                  <MdPending />
                </div>
                Pending Projects
              </li>
            </Link>
            <Link to="/#">
              <li className={props.logout}>
                <div className={styles.svg}>
                  <div>
                    <AiOutlineLogout />
                  </div>
                </div>
                Logout lass
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
