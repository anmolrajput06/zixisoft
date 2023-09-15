import React from "react";
import { Link } from "react-router-dom";

function Transaction() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="row">
            <div className="col-md-12">
              <div className="inv-box">
                <h4>Transaction</h4>
                <div className="manage-flex">
                  <h5>Manage transaction</h5>
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
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>22.01.2022</td>
                            <td>XYZ</td>
                            <td>Rs 100</td>
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
                            <td>2</td>
                            <td>22.01.2022</td>
                            <td>XYZ</td>
                            <td>Rs 100</td>
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

export default Transaction;