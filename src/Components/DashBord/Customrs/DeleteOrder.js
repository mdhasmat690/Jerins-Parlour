import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/UseAuth';
import { ClipLoader} from "react-spinners";
import Swal from "sweetalert2";


const DeleteOrder = () => {


    const { user } = useAuth();
    const [orderlList, setOrderList] = useState([]);
  
    useEffect(() => {
      const url = `https://dry-journey-03591.herokuapp.com/purches/${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setOrderList(data));
    }, []);

    const handleDelete = (id) => {
    
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
          if (result.isConfirmed) {
    
    
            fetch(`https://dry-journey-03591.herokuapp.com/purches/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  const deleteData = orderlList?.filter((pb) => pb._id !== id);
                  setOrderList(deleteData);
                }
              });
    
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      };

    return (
        <div className="my-5">
      <div className="my-4 text-primary">
        <h3>~~All Purches Service~~</h3>
      </div>

      {orderlList.length ? (
        <Table responsive hover>
          <tbody>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Otto</td>
              <td>Mark</td>
            </tr>

            {orderlList?.map((services, index) => (
              <tr key={services._id}>
                <td>{index + 1}</td>
                <td>{services?.productName}</td>
                <td>{services?.email}</td>
                <td
                  style={{
                    color: "#FF4545",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                   onClick={() => handleDelete(services._id)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="mt-5">
          {" "}
          <ClipLoader size={40} color={"#123abc"} speedMultiplier={1.5} />
        </div>
      )}
    </div>
    );
};

export default DeleteOrder;