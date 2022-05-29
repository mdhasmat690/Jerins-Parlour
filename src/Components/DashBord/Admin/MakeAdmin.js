import React, { useEffect, useState } from "react";
import "./MakeAdmin.css";

const MakeAdmin = () => {


  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleChange = (val) => {
    setEmail(val);
  };

  const handleSubmit = (e) => {
    const user = { email };
    console.log(email, "submit");
    fetch("http://localhost:5000/users/admin", {
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





  return (
    <div className="make-style" style={{ backgroundColor: "#F4F7FC" }}>
      <div className="admin_style">
        <h3 style={{ marginTop: "37px" }}>This is admin</h3>
        <form onSubmit={handleSubmit}>
        <input
         onChange={(e) => handleChange(e.target.value)}
          className="input_admin_style"
          type="email"
          placeholder="abc@gamil.com"
        />
        <br />
        <br />
        <input type="button" className="makeAdmin_style" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
