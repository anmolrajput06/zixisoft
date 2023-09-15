import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import SweetAlert from "react-bootstrap-sweetalert";
function CreateCategory(props) {
  if (props.data) {
    var propsObject = props.data;

  }
  const [categoryName, setCategoryName] = useState("");
  const [logoFile, setLogoFile] = useState(null); // State to store the selected logo file
  const [showAlert, setShowAlert] = useState(false);
  const [fields, setFields] = useState({});
  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleLogoChange = (event) => {
    // Get the selected file from the input element
    const selectedFile = event.target.files[0];
    setLogoFile(selectedFile); // Update the state with the selected file
  };
  useEffect(() => {
    if (propsObject && propsObject !== {} && propsObject !== undefined) {
      propsObject && setFields(propsObject);
    }

  }, [propsObject]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!categoryName || !logoFile) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Category Name and Logo are required fields',
      });
      return; // Stop form submission
    }
    const formData = new FormData();
    formData.append("category_name", categoryName);
    formData.append("logo", logoFile);
    axios
      .post("http://localhost:8000/add/category", formData)
      .then((response) => {

        console.log(response.data.message,'999999999999999999999999999');
        if (response.data.message === "Category successfully add") {
          // API request was successful, show SweetAlert for success
          window.location.href = "/manage-category";
        }
        
      })
      .catch((error) => {

      });
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
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
                  <h5>Create category</h5>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card mt-3">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                  <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor className="form-label">
                            Category Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="categoryName"
                            defaultValue={fields.category_name}
                            // value={categoryName}
                            onChange={handleCategoryNameChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="label-font mb-3">
                          <label htmlFor className="form-label">
                            Upload Logo
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="logo"
                            onChange={handleLogoChange} // Call handleLogoChange when the file input changes
                          />
                        </div>
                      </div>

                      <div className="col-md-12 my-3">
                        <div className="d-flex-bulkbtn">
                          <div>
                            <button type="submit" className="addpr-btn">
                              <i />
                              Submit
                            </button>
                          </div>

                          <div>
                            <a className="cancel-btn" href="#!">
                              <i />
                              Cancel
                            </a>
                            {showAlert && (
                              <SweetAlert
                                success
                                title="Category Deleted"
                                onConfirm={handleCloseAlert}
                              >
                                Category has been deleted successfully!
                              </SweetAlert>
                            )}
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

export default CreateCategory;
