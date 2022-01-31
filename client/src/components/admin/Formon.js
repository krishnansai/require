import React from "react";
import "./Admin.css";
import { BorwserRouter as Router, Link } from "react-router-dom";
import { useFormik } from "formik";
function Formon() {
  const formik = useFormik({
    initialValues: {
      company: "",
      roll: "",
      package: "",
      location: "",
      email: "Nil",
    },

    onSubmit: (e) => {
      console.log(e.email);
      e.company = "";
      e.roll = "";
      e.package = "";
      e.location = "";
      e.email = "";
    },
  });
  return (
    <div className="formon">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <br />
          <label>Company Name </label>
          <br />
          <input
            required
            type="text"
            name="company"
            value={formik.values.company}
            onChange={formik.handleChange}
          />
          <br />
        </div>
        <div className="form-group">
          <br />
          <label>Roll</label>
          <br />
          <input
            required
            type="text"
            name="roll"
            value={formik.values.roll}
            onChange={formik.handleChange}
          />
          <br />
          <br />
        </div>
        <div className="form-group">
          <label>Package </label>
          <br />
          <input
            required
            type="number"
            name="package"
            value={formik.values.package}
            onChange={formik.handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <br />
          <label>Location</label>
          <br />
          <input
            required
            type="text"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <br />
          <label>Contact Email</label>
          <br />
          <input
            required
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <br />
        <br />
        <div className="sub">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
        
      </form>
      <Link to="/oncampus">
                  <button >
                    cancel
                  </button>
                </Link>
    </div>
  );
}

export default Formon;
