import React from "react";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  return (
    <div className="make-style" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="admin_style">
        <h3 style={{ marginTop: "37px" }}>This is admin</h3>
        <input
          className="input_admin_style"
          type="email"
          placeholder="abc@gamil.com"
        />
        <br />
        <br />
        <input type="button" className="makeAdmin_style" value="Submit" />
      </div>
    </div>
  );
};

export default MakeAdmin;
