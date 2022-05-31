import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ClipLoader, HashLoader, MoonLoader } from "react-spinners";
import Swal from "sweetalert2";

const ManageService = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  const handleDelete = (id) => {
    // const proceed = window.confirm("Are you sure you want to delete");

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


        fetch(`http://localhost:5000/services/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const deleteData = service?.filter((pb) => pb._id !== id);
              setService(deleteData);
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
        <h3>~~All Service~~</h3>
      </div>

      {service.length ? (
        <Table responsive hover>
          <tbody>
            <tr>
              <td>#</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Mark</td>
            </tr>

            {service?.map((services, index) => (
              <tr key={services._id}>
                <td>{index + 1}</td>
                <td>{services?.name}</td>
                <td>{services?.price}</td>
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

export default ManageService;
