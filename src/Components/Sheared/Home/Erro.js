import React from "react";
import Swal from "sweetalert2";

const Erro = () => {
  return (
    <div>
      {Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Please go to Home",
      })}
    </div>
  );
};

export default Erro;
