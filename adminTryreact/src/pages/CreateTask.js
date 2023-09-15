import React, { useState } from "react";
import axios from "axios";

function CreateTask() {
  const [taskname, setTaskName] = useState("");
  const [taskdesc, setTaskDesc] = useState("");
  const [comAssoName, setComAssoName] = useState("");
  const [monetaryReward, setMonetaryReward] = useState("");
  const [taskDuration, setTaskDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Create an object with form data
    const formData = {
      catagory_name: " two", // You can update this as needed
      brand_logo: "", // You can update this as needed
      task_name: taskname,
      task_description: taskdesc,
      associated_company_name: comAssoName,
      price: 100, // You can update this as needed
      task_duration: taskDuration,
      monetary_reward: monetaryReward,
    };
console.log(formData,'formData');
    // Send the formData using Axios
    axios
      .post("http://localhost:8000/add/task", formData)
      .then((response) => {
        console.log(response.data);
        window.location.href="/manage-task"
        // Handle the response or update your UI as needed.
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors here.
      });
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="row">
            <div className="col-md-12">
              <div className="inv-box">
                <h4>Task</h4>
                <div className="manage-flex">
                  <h5>Create task</h5>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mt-3">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor="categorySelect" className="form-label">
                            Select Category
                          </label>
                          <select
                            id="categorySelect"
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Category</option>
                            <option value={1}>Demo One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor="taskName" className="form-label">
                            Task Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="task_name"
                            name="task_name"
                            value={taskname}
                            onChange={(e) => setTaskName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor="taskDescription" className="form-label">
                            Task Description
                          </label>
                          <textarea
                            className="form-control"
                            id="taskdesc"
                            rows={2}
                            value={taskdesc}
                            onChange={(e) => setTaskDesc(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor="companyName" className="form-label">
                            Associated Company Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="comAssoName"
                            value={comAssoName}
                            onChange={(e) => setComAssoName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor="monetaryReward" className="form-label">
                            Monetary Reward
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="monetaryReward"
                            value={monetaryReward}
                            onChange={(e) => setMonetaryReward(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor="taskDuration" className="form-label">
                            Task Duration
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="taskDuration"
                            value={taskDuration}
                            onChange={(e) => setTaskDuration(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-12 my-3">
                        <div className="d-flex-bulkbtn">
                          <div>
                            <button type="submit" className="addpr-btn" >
                              <i /> Submit
                            </button>
                          </div>
                          <div>
                            <a className="cancel-btn" href="#!">
                              <i />
                              Cancel
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTask;
