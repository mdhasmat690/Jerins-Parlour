import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BeatLoader} from "react-spinners";
import Swal from "sweetalert2";

const OrderList = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://dry-journey-03591.herokuapp.com/purches")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
 

   const shippedOrder = (id) => {
    fetch(`https://dry-journey-03591.herokuapp.com/purches/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updatedProducts = products.map((product) => {
            if (product._id === id) {
              product.status = "Done";
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Product Update successfully'
              })
            }

            return product;
          });

          setProducts(updatedProducts);
        }
      });
  };
 

  return (
    <div className="my-5">
      <div className="my-3">
          <h3 className="text-success">All OrderList</h3>
      </div>
      {products?.length ?
      <Table responsive hover>
        
        <tbody>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>Product Name</td>
           
          </tr>

          {products?.map((product, index) => (
           <tr key={index}>
           
           <td>{product.name}</td>
           <td>{product.email}</td>
           <td>{product.productName}</td>
           <td 
           style={product.status === "Pending"
           ? {color: '#FF4545',cursor: 'pointer',fontWeight: '500'}:{color: '#009444',fontWeight: '500'}}

                onClick={() => shippedOrder(product._id)}>{product.status}</td>
         </tr>
        ))}
         
         
        </tbody>
      </Table>:  <div className="mt-5">
          <BeatLoader
            size={15}
            color={"#123abc"}
            
            speedMultiplier={1.5}
          />
        </div>}
    </div>
  );
};

export default OrderList;
