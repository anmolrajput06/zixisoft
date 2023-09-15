import React from "react";

function PendingStatus() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="row">
            <div className="col-md-12">
              <div className="inv-box">
                <h4>Approval</h4>
                <div className="manage-flex">
                  <h5>
                    Manage{" "}
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                    Approval
                  </h5>
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
                            <th>Date</th>
                            <th>User Name</th>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>22.01.2022</td>
                            <td>XYZ</td>
                            <td>Demo task</td>
                            <td>Demo</td>
                            <td>Rs 1000</td>
                            <td>Pending</td>
                            <td>
                              <div>
                                <button
                                  className="delvr-button"
                                  fdprocessedid="fiuu4q"
                                >
                                  Approve
                                </button>
                                <button
                                  className="nondelvr-button deleteButton me-1"
                                  id="deleteButton"
                                  fdprocessedid="6ag0zc"
                                >
                                  Disapprove
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>22.01.2022</td>
                            <td>XYZ</td>
                            <td>Demo task</td>
                            <td>Demo</td>
                            <td>Rs 1000</td>
                            <td>Pending</td>
                            <td>
                              <div>
                                <button
                                  className="delvr-button"
                                  fdprocessedid="fiuu4q"
                                >
                                  Approve
                                </button>
                                <button
                                  className="nondelvr-button deleteButton me-1"
                                  id="deleteButton"
                                  fdprocessedid="6ag0zc"
                                >
                                  Disapprove
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
    </>
  );
}

export default PendingStatus;