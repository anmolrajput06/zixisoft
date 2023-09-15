import React from "react";

function TaskEdit() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="row">
            <div className="col-md-12">
              <div className="inv-box">
                <h4>Task</h4>
                <div className="manage-flex">
                  <h5>Edit task</h5>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mt-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="label-font mb-3">
                        <label htmlFor className="form-label">
                          Task Name
                        </label>
                        <input
                          type="text"
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
                          Company Name
                        </label>
                        <input
                          type="text"
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
                          Task Description
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={2}
                          defaultValue={""}
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
                        />
                      </div>
                    </div>

                    <div className="col-md-12 my-3">
                      <div className="d-flex-bulkbtn">
                        <div>
                          <a className="addpr-btn" href="#">
                            <i />
                            Submit
                          </a>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskEdit;