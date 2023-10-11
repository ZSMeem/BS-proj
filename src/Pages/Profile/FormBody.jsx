import React from "react";

const FormBody = () => {
  return (
    <div>
      <div tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable custom-modal-width">
          <div className="modal-body">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter User Name"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Designation
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Designation"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Department
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Department"
              />
            </div>
            <div className="mb-3">
              <label for="formFile" className="form-label">
                Change Profile Picture
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="w-100 d-flex gap-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBody;
