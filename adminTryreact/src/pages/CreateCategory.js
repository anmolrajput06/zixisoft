import React, { useState ,useEffect} from "react";
import axios from "axios";

function CreateCategory(props) {
  if (props.data) {
    var propsObject = props.data;

  }
  const [categoryName, setCategoryName] = useState("");
  const [fields, setFields] = useState({});
  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };
  useEffect(() => {
    if (propsObject && propsObject !== {} && propsObject !== undefined) {
      propsObject && setFields(propsObject);
    }

  }, [propsObject]);
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the category_name field only
    const requestData = {
      category_name: categoryName,
    };

    axios
      .post("http://localhost:8000/add/category", requestData)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/manage-category";
      })
      .catch((error) => {
        console.error(error);
      });
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
                  <div className="row">
                    <form onSubmit={handleSubmit}>
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
                            // onChange={handleLogoChange}
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
      </div>
    </>
  );
}

export default CreateCategory;
