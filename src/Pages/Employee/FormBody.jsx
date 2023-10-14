import React from "react";

const FormBody = () => {
  return (
    <div className="modal-body">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Employee Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Employee Name"
        />
      </div>
      <div className="w-100 d-flex gap-3">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Employee Email Id
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email@gmail.com"
          />
        </div>
        <div className="mb-3 w-50">
          <label for="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="w-100 d-flex gap-3">
        <div className="mb-3 w-50">
          <label for="exampleFormControlInput1" className="form-label">
            Department
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Web Development</option>
            <option value="1">It Management</option>
            <option value="2">Marketing</option>
          </select>
        </div>
        <div className="mb-3 w-50">
          <label for="exampleFormControlInput1" className="form-label">
            Designation
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>UI/UX Design</option>
            <option value="1">Website Design</option>
            <option value="2">App Development</option>
            <option value="3">Quality Assurance</option>
            <option value="4">Development</option>
            <option value="5">Software Testing</option>
            <option value="6">Backend Development</option>
            <option value="7">Marketing</option>
            <option value="8">SEO</option>
            <option value="9">Other</option>
          </select>
        </div>
      </div>
      <div className="w-100 d-flex gap-3">
        <div className="mb-3 w-50">
          <label for="exampleFormControlInput1" className="form-label">
            Employee ID
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="12345"
          />
        </div>
        <div className="mb-3 w-50">
          <label for="Joining Date" className="form-label">
            Joining Date
          </label>
          <div className="input-group date" id="datetimepicker1">
            <input
              type="date"
              className="form-control"
              id="datepicker-input"
              data-target="#datetimepicker1"
              data-toggle="datetimepicker"
            />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Description (Optional)
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default FormBody;
