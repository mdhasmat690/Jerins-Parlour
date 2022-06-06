import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";
import "./purches.css";
import Swal from "sweetalert2";

const Purches = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [product, setProduct] = useState({});
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(`https://dry-journey-03591.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  useEffect(() => {
    reset();
  }, [product]);

  const onSubmit = (data) => {
    fetch("https://dry-journey-03591.herokuapp.com/purches", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data, status: "Pending" }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order has been send",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  return (
    <div
      className="container"
      style={{ marginTop: "30px", backgroundColor: "#FFFFFF" }}
    >
      <div style={{ width: "350px" }} className=" mx-auto">
        <div>
          <img src={product.img} className="card-img-top mt-4 w-25" alt="..." />

          <div className="card-body">
            <h5
              style={{ fontWeight: "700", fontSize: "17px" }}
              className="card-title"
            >
              {product.name}
            </h5>
            <span style={{ color: "#F63E7B", fontSize: "17px" }}>
              $ {product.price}
            </span>
            <p style={{ fontSize: "", lineHeight: " " }} className="card-text">
              {product.desc}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="purche_style mt-3"
            defaultValue={user?.displayName}
            {...register("name")}
          />
          <input
            className="purche_style mt-3"
            defaultValue={user?.email}
            {...register("email")}
          />
          <input
            className="purche_style mt-3 mx-auto "
            defaultValue={product?.name}
            {...register("productName", { required: true })}
          />
          <input
            className="purche_style mt-3"
            defaultValue={product?.desc}
            placeholder="price"
            {...register("price", { required: true })}
          />

          <input
            className="purche_style h-5 mt-3"
            defaultValue=""
            placeholder="phone number"
            {...register("phone", { required: true })}
            required
          />
          <input
            className="purche_style mt-3"
            defaultValue=""
            placeholder="location"
            {...register("location", { required: true })}
            required
          />
          <br />
          <br />
          <button
            className="mb-5 btn_service_style"
            type="submit"
            variant="contained"
          >
            purches
          </button>
        </form>
      </div>
    </div>
  );
};

export default Purches;
