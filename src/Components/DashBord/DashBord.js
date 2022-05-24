import React from "react";
import { Col, Row } from "react-bootstrap";
import AddService from "./Admin/AddService";
import MakeAdmin from "./Admin/MakeAdmin";
import OrderList from "./Admin/OrderList";

const DashBord = () => {
  return (
    <div style={{ backgroundColor: "#F4F7FC" }}>
      <div style={{ width: "96%" }}>
        <div style={{ backgroundColor: "#FFFFFF" }} class="row">
          <div class="col-12 col-lg-2">1 of 3</div>

          <div style={{ backgroundColor: "#F4F7FC" }} class="col-12 col-lg-10 py-2" >
            <OrderList></OrderList>
            <AddService></AddService>
            <MakeAdmin></MakeAdmin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBord;

