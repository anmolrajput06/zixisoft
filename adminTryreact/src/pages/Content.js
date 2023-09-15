import React from "react";

function Content() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content pt-3">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
            <div className="col">
              <a href="#">
                <div className="card radius-10 border-start border-0 border-4 batchcard-ht">
                  <div className="card-body">
                    <div className="d-flexcard">
                      <div className="widgets-icons-2 rounded-circle bg-gradient-blues text-white">
                        <i className="bx bxs-group" />
                      </div>
                      <div>
                        <h6 className="my-1">40</h6>
                        <p className="mb-0 text-secondary">
                          Total Allowed Batches
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <div className="card radius-10 border-start border-0 border-4 batchcard-ht">
                  <div className="card-body">
                    <div className="d-flexcard">
                      <div className="widgets-icons-2 rounded-circle bg-gradient-orange text-white">
                        <i className="bx bxs-group" />
                      </div>
                      <div>
                        <h6 className="my-1 text-warning">30</h6>
                        <p className="mb-0 text-secondary">
                          Total Enrolled Batches
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <div className="card radius-10 border-start border-0 border-4 batchcard-ht">
                  <div className="card-body">
                    <div className="d-flexcard">
                      <div className="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white">
                        <i className="bx bxs-group" />
                      </div>
                      <div>
                        <h6 className="my-1 text-success">10</h6>
                        <p className="mb-0 text-secondary">Remaining Batches</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="#">
                <div className="card radius-10 border-start border-0 border-4 batchcard-ht">
                  <div className="card-body">
                    <div className="d-flexcard">
                      <div className="widgets-icons-2 rounded-circle bg-gradient-burning text-white">
                        <i className="bx bxs-group" />
                      </div>
                      <div>
                        <h6 className="my-1 text-danger">40</h6>
                        <p className="mb-0 text-secondary">
                          Total Enrolled Students
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
