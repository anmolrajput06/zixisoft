import React from "react";
import logocomp from "../assets/img/logocomp.png";

function ManageTask() {
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
                      <a className="addpr-btn me-2" href="#">
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
                            <th>Logo</th>
                            <th>Money Reward</th>
                            <th>Task duration</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Education</td>
                            <td>Follow</td>
                            <td>Follow</td>
                            <td>XYZ</td>
                            <td>
                              <div>
                                <img src={logocomp} alt="" />
                              </div>
                            </td>
                            <td>100 Rs</td>
                            <td>5 days</td>

                            <td>
                              <div>
                                <button
                                  className="delvr-button"
                                  data-bs-target="#ModalEdit"
                                  data-bs-toggle="modal"
                                  fdprocessedid="fiuu4q"
                                >
                                  Edit
                                </button>
                                <button
                                  className="nondelvr-button deleteButton me-1"
                                  id="deleteButton"
                                  fdprocessedid="6ag0zc"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Education</td>
                            <td>Follow</td>
                            <td>Follow</td>
                            <td>XYZ</td>
                            <td>
                              <div>
                                <img src={logocomp} alt="" />
                              </div>
                            </td>
                            <td>100 Rs</td>
                            <td>5 days</td>

                            <td>
                              <div>
                                <button
                                  className="delvr-button"
                                  data-bs-target="#ModalEdit"
                                  data-bs-toggle="modal"
                                  fdprocessedid="fiuu4q"
                                >
                                  Edit
                                </button>
                                <button
                                  className="nondelvr-button deleteButton me-1"
                                  id="deleteButton"
                                  fdprocessedid="6ag0zc"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
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

      {/* Button edit modal */}
      {/* Modal */}
      <div
        className="modal fade"
        id="ModalEdit"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="label-font mb-3">
                    <label className="form-label">Select Category</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      fdprocessedid="l9xp4e"
                    >
                      <option>Select Category</option>
                      <option value={1}> Demo One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="label-font mb-3">
                    <label className="form-label">Task Name</label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="true"
                      fdprocessedid="dp1lw"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="label-font mb-3">
                    <label className="form-label">Task Description</label>
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
                    <label className="form-label">
                      Associated Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="true"
                      fdprocessedid="dp1lw"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="label-font mb-3">
                    <label className="form-label">Upload Logo</label>
                    <input
                      type="file"
                      className="form-control"
                      aria-describedby="true"
                      fdprocessedid="dp1lw"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="label-font mb-3">
                    <label className="form-label">Monetary Reward</label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="true"
                      fdprocessedid="dp1lw"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="label-font mb-3">
                    <label className="form-label">Task Duration</label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="true"
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
    </>
  );
}

export default ManageTask;