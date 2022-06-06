import React, { useEffect, useState } from "react";
import "./MakeAdmin.css";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleChange = (val) => {
    setEmail(val);
  };

  const handleSubmit = (e) => {
    const user = { email };
    fetch("https://dry-journey-03591.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setSuccess(true);
          setPopup(true);
        }
      });
    e.preventDefault();
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setPopup(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  if (popup) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Product Update successfully",
    });
  }

  return (
    <div className="make-style" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="admin_style">
        <h3 style={{ marginTop: "37px" }}>This is admin</h3>
        <form onClick={handleSubmit}>
          <input
            onChange={(e) => handleChange(e.target.value)}
            className="input_admin_style"
            type="email"
            placeholder="abc@gamil.com"
          />
          <br />
          <br />
          <button type="button" className="makeAdmin_style" value="Submit">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
