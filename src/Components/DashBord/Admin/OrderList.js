import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const OrderList = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/purches")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

   const shippedOrder = (id) => {
    fetch(`http://localhost:5000/purches/${id}`, {
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
            }

            return product;
          });

          setProducts(updatedProducts);
        }
      });
  };
 

  return (
    <div className="my-5">
      <div>
          <h3>OrderList</h3>
      </div>
      <Table responsive hover>
        
        <tbody>
          <tr>
            <td>#</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Mark</td>
           
          </tr>

          {products?.map((product, index) => (
           <tr>
           
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
      </Table>
    </div>
  );
};

export default OrderList;
