import React, { useState, useEffect } from "react";
import axios from "axios";
import logocomp from "../assets/img/logocomp.png";

function ManageTask() {
  const [taskData, setTaskData] = useState([]);
  const [formattedTaskDuration, setFormattedTaskDuration] = useState(""); // State for formatted date

  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/get/task',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        // setTaskData(response.data); // Update the state with API data

        if (Array.isArray(response.data)) {
          setTaskData(response.data);
        } else {
          setTaskData(response.data.data);
          // Handle the unexpected response format here
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);



  // The empty array [] means this effect will run once when the component mounts
  console.log(taskData, 'taskData');
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="row">
            <div className="col-md-12">
              <div className="inv-box">
                <h4>Task</h4>
                <div className="manage-flex">
                  <h5>Manage your task</h5>
                  <div className="d-flex-bulkbtn">
                    <div>
                      <a className="addpr-btn me-2" href="/create-task">
                        Create
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card mt-3">
                <div className="card-body">
                  <div className="table-top">
                    <div className="search-set">
                      <div className="search-input-box">
                        <a className="btn-searchset">
                          <i className="fa-solid fa-filter" />
                        </a>
                        <div id className>
                          <label>
                            <input
                              type="search"
                              className="form-control form-control-sm"
                              placeholder="Search..."
                              aria-controls="DataTables_Table_0"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <div className="delverystatustable">
                      <table className="table">
                        <thead>
                          <tr role="row">
                            <th>S.No</th>
                            <th>Category</th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Company</th>
                            {/* <th>Logo</th> */}
                            <th>Money Reward</th>
                            <th>Task duration</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {taskData.map((task, index) => (
                            <tr key={index}>
                              {
                                console.log(task, '888888')
                              }
                              <td>{index + 1}</td>
                              <td>{task.catagory_name}</td>
                              <td>{task.task_name}</td>
                              <td>{task.task_description}</td>
                              <td>{task.associated_company_name}</td>
                              {/* <td>
                                <div>
                                  <img src={logocomp} alt="" />
                                </div>
                              </td> */}
                              <td>{task.monetary_reward}</td>
                              <td>{task.task_duration.substring(0, 10)}</td>

                              <td>
                                <div>
                                  <button
                                    className="delvr-button"
                                    data-bs-target="#ModalEdit"
                                    data-bs-toggle="modal"
                                    fdprocessedid={task.id} // Assuming you have an id field in your API response
                                  >
                                    Edit
                                  </button>
                                  <button
                                    className="nondelvr-button deleteButton me-1"
                                    id="deleteButton"
                                    fdprocessedid={task.id} // Assuming you have an id field in your API response
                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>

                      </table>
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

export default ManageTask;