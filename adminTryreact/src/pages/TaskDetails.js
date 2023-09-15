import React from "react";

import ne2 from "../assets/img/ne2.png";
import { Link } from "react-router-dom";

function TaskDetails() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="row">
            <div className="col-md-12">
              <div className="inv-box">
                <h4>Task</h4>
                <div className="manage-flex">
                  <h5>Task-Details</h5>
                  <div className="d-flex-bulkbtn">
                    <div>
                      <Link to="/task-edit" className="addpr-btn me-2">
                        Edit
                      </Link>
                    </div>
                    <div>
                      <button className="addpr-btn me-2">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card mt-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="">
                        <div className="detfol">
                          <div className="detfolimg">
                            <img src={ne2} className="" alt="..." />
                          </div>
                          <h6>Meta Company Ltd</h6>
                        </div>
                        <div className="card-body linkedpage">
                          <h5 className="card-title">
                            Follow our Linkedin Page
                          </h5>
                          <p className="card-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quam eum harum possimus voluptatum rerum atque
                            ratione accusantium dicta nam assumenda?
                          </p>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item  lirsp">
                            10 Days | <span>1000 Rs</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskDetails;