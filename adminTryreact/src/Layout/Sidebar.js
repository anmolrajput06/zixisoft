import React from "react";
import { Link } from "react-router-dom";
import tssicon from "../assets/img/tssicon.png";
import stocktrnsfericon from "../assets/img/stocktrnsfericon.png";
import logouticon from "../assets/img/logout-icon.png";

function Sidebar() {
  return (
    <>
      {/*wrapper*/}
      <div className="wrapper">
        {/*sidebar wrapper */}
        <div className="sidebar-wrapper" data-simplebar="true">
          <div className="sidebar-header">
            <div>
              <h4 className="logo-text text-center">Referral</h4>
            </div>
            <div className="toggle-icon ms-auto">
              <i className="bx bx-arrow-back" />
            </div>
          </div>
          {/*navigation*/}
          <ul className="metismenu" id="menu">
            <li className="menu-label">Dashboard</li>
            <li>
              <Link to="./Dashboard">
                <div className="parent-icon">
                  <img src={tssicon} alt="" />
                </div>
                <div className="menu-title">Dashboard </div>
              </Link>
            </li>
            <li className="menu-label">User</li>
            <li>
              <Link to="/manage-user">
                <div className="parent-icon">
                  <img src={stocktrnsfericon} alt="" />
                </div>
                <div className="menu-title">Manage Users </div>
              </Link>
            </li>
            <li className="menu-label">Category</li>
            <li>
              <Link to="/manage-category">
                <div className="parent-icon">
                  <img src={stocktrnsfericon} alt="" />
                </div>
                <div className="menu-title">Manage Category</div>
              </Link>
              <li>
                <Link to="/create-category">
                  <div className="parent-icon">
                    <img src={stocktrnsfericon} alt="" />
                  </div>
                  <div className="menu-title">Create Category</div>
                </Link>
              </li>
            </li>
            <li className="menu-label">Task</li>
            <li>
              <Link to="/manage-task">
                <div className="parent-icon">
                  <img src={stocktrnsfericon} alt="" />
                </div>
                <div className="menu-title">Manage Task</div>
              </Link>
              <li>
                <Link to="/create-task">
                  <div className="parent-icon">
                    <img src={stocktrnsfericon} alt="" />
                  </div>
                  <div className="menu-title">Create Task</div>
                </Link>
              </li>

              <li className="menu-label">Approval</li>
              <li>
                <Link to="/pending-status">
                  <div className="parent-icon">
                    <img src={stocktrnsfericon} alt="" />
                  </div>
                  <div className="menu-title">Pending </div>
                </Link>
              </li>
              <li>
                <Link to="/approve-status">
                  <div className="parent-icon">
                    <img src={stocktrnsfericon} alt="" />
                  </div>
                  <div className="menu-title">Approve </div>
                </Link>
              </li>
              <li>
                <Link to="/disapprove-status">
                  <div className="parent-icon">
                    <img src={stocktrnsfericon} alt="" />
                  </div>
                  <div className="menu-title">Disapprove </div>
                </Link>
              </li>

              <li className="menu-label">Financial Transaction</li>
              <li>
                <Link to="/transaction">
                  <div className="parent-icon">
                    <img src={stocktrnsfericon} alt="" />
                  </div>
                  <div className="menu-title">Transaction </div>
                </Link>
              </li>

              <li className="menu-label">Content</li>
              <li>
                <Link to="/content">
                  <div className="parent-icon">
                    <img src={stocktrnsfericon} alt="" />
                  </div>
                  <div className="menu-title">content </div>
                </Link>
              </li>

              <li className="menu-label mt-3">Logout</li>
              <li>
                <Link to="#">
                  <div className="parent-icon">
                    <img src={logouticon} alt="" />
                  </div>
                  <div className="menu-title">Logout </div>
                </Link>
              </li>
            </li>
          </ul>
          {/*end navigation*/}
        </div>
        {/*end sidebar wrapper */}

        {/*start page wrapper */}
      </div>
      {/*end wrapper*/}
    </>
  );
}

export default Sidebar;
