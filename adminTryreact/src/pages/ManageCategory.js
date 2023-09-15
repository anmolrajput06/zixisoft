import React, { useState, useEffect } from "react";
import logocomp from "../assets/img/logocomp.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
import Swal from "sweetalert2";

const ManageCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Define a function to fetch category data
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/get/category");
        if (Array.isArray(response.data)) {
          setCategoryData(response.data);
        } else {
          setCategoryData(response.data.data);
          // Handle the unexpected response format here
        }
      } catch (error) {
        console.error(error);
        // Handle the API request error here
      }
    };

    // Call the fetchCategoryData function
    fetchCategoryData();
  }, []);
  const handleDeleteCategory = async (id) => {
    try {
      const response = await axios.post("http://localhost:8000/delete/category", {
        id: id
      });
      console.log(response.data);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      // window.location.reload()
    } catch (error) {
      console.error(error);
    }
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
    window.location.reload()
  };
  const LoadEdit = (_id) => {
    const formData = {
      id: _id
    };
    console.log('vjffj', formData);
    navigate(`/UpdateCategory/${formData.id}`);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="row">
            <div className="col-md-12">
              <div className="inv-box">
                <h4>Category</h4>
                <div className="manage-flex">
                  <h5>Manage your Category</h5>
                  <div className="d-flex-bulkbtn">
                    <div>
                      <a className="addpr-btn me-2" href="/create-category">
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
                            <th>Category Name</th>
                            <th>Logo</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>

                          {categoryData.map((item, index) => (
                            <tr key={item.id}>
                              {/* Render your table cells (td) for each property */}
                              <td>{index + 1}</td>
                              <td>{item.category_name}</td>
                              {/* Add more table cells for other properties if needed */}
                              <td>
                                <div>
                                  <img src={`http://localhost:3000/uploads/${item.logo}`} style={{ height: "80px", width: "120px" }} alt='' />
                                </div>
                              </td>
                              <td>
                                <div>
                                  <button className="delvr-button" fdprocessedid="fiuu4q"

                                    onClick={() => LoadEdit(item.id)}>
                                    Edit
                                  </button>
                                  <button
                                    className="nondelvr-button deleteButton me-1"
                                    id="deleteButton"
                                    fdprocessedid="6ag0zc"
                                    onClick={() => handleDeleteCategory(item.id)} // Call delete function with item id
                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}

                        </tbody>
                        {showAlert && (
                          <SweetAlert
                            success
                            title="Category Deleted"
                            onConfirm={handleCloseAlert}
                          >
                            Category has been deleted successfully!
                          </SweetAlert>
                        )}
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
};

export default ManageCategory;
