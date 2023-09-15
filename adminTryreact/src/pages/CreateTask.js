import React, { useState } from "react";
import axios from "axios";

function CreateTask() {


  const [formData, setFormData] = useState({
    catagory_name: "new add",
    brand_logo: "logo",
    task_name: "new tasjk  adsia",
    task_description: "dfd",
    price: 5,
  });

  const [taskname,setTaskName]=useState("")
  const [taskdesc,settaskdesc]=useState("")
  const [comAssoName,setcomAssoName]=useState("")
  const [MonetarReward,setMonetarReward]=useState("")
  const [TaskDuration,setTaskDuration]=useState("")

  const submitRequest =()=>{

    console.log("taskname",taskname);
    console.log("taskdesc",taskdesc);
    console.log("comAssoName",comAssoName);
    console.log("MonetarReward",MonetarReward);
    console.log("TaskDuration",TaskDuration);

  }



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/add/task", formData)
      .then((response) => {
        console.log(response.data);
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
                  <form >
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor className="form-label">
                            Select Category
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Category</option>
                            <option value={1}> Demo One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor className="form-label">
                            Task Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="taskName"
                            name="task_name" // Add the name attribute
                            defaultValue={formData.task_name} // Set the value from the state
                            // onChange={handleChange} // Handle changes
                            onChange={(e) => setTaskName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor className="form-label">
                            Task Description
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={2}
                            defaultValue={""}
                            onChange={(e) => settaskdesc(e.target.value)}

                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor className="form-label">
                            Associated Company Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id
                            aria-describedby
                            fdprocessedid="dp1lw"
                            onChange={(e) => setcomAssoName(e.target.value)}

                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor className="form-label">
                            Upload Logo
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id
                            aria-describedby
                            fdprocessedid="dp1lw"
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor className="form-label">
                            Monetary Reward
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id
                            aria-describedby
                            fdprocessedid="dp1lw"
                            onChange={(e) => setMonetarReward(e.target.value)}

                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor className="form-label">
                            Task Duration
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id
                            aria-describedby
                            fdprocessedid="dp1lw"
                            onChange={(e) => setTaskDuration(e.target.value)}

                          />
                        </div>
                      </div>

                      <div className="col-md-12 my-3">
                        <div className="d-flex-bulkbtn">
                          <div>
                            <button type="submit" className="addpr-btn" onClick={submitRequest()}>
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