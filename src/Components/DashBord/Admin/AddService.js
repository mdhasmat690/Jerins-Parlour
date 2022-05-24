import React from "react";
import "./AddService.css";

const AddService = () => {
  return (
    <div style={{ backgroundColor: "#F4F7FC", marginBottom: "250px" }}>
      <h2>This is add service</h2>
      <div style={{ backgroundColor: "white", marginLeft: "25px" }}>
        <form className="a pt-4">
          <h5 className="service_style" style={{ marginLeft: "-50%" }}>
            Please type Service Title
          </h5>
          <input
            className="input_style mb-4"
            type="text"
            placeholder="Enter title"
          />

          <h5 className="service_style" style={{ marginLeft: "-50%" }}>
            Please submit an Image link
          </h5>
          <input
            className="input_style mb-4"
            type="text"
            placeholder="Enter title"
          />

          <br />
          <h5 className="service_style" style={{ marginLeft: "-50%" }}>
            Please type Description
          </h5>
          <input
            className="input_text"
            type="text"
            placeholder="Enter Designation"
          />
          <br />
          <input
            className="mb-5 btn_service_style"
            type="button"
            value="Submit Now"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
