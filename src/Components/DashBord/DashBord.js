// import React from "react";
// import { Link, Outlet } from "react-router-dom";


// const DashBord = () => {
//    const { admin, logout } = useAuth();
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-3 ">
//           <div className="dashboard">
//             <h5>Dashboard</h5>
           
//               <>
//                 <Link to={`/dashboard/manageAllOrder`}>
//                   {/* <Button color="inherit">manageAllOrder</Button> */}
//                 </Link>
//                 <br />
//                 <Link to={`/dashBord/service`}>
//                   <button>service</button>
//                 </Link>
//                 <br />
//                 <Link to={`/dashboard/manageProduct`}>
//                   {/* <Button color="inherit">ManageProduct</Button> */}
//                 </Link>
//                 <br />
//                 <Link to={`/dashboard/makeAdmin`}>
//                   {/* <Button color="inherit">MakeAdmin</Button> */}
//                 </Link>
//                 <br />
//               </>
           
//               <>
//                 {" "}
//                 <Link to={`/dashboard/mayOrder`}>
//                   {/* <Button color="inherit">MayOrder</Button> */}
//                 </Link>
//                 <br />
//                 <Link to={`/dashboard/review`}>
//                   {/* <Button color="inherit">Review</Button> */}
//                 </Link>
//               </>
           
//           </div>
//         </div>
//         <div className="col-md-9">
//           <Outlet></Outlet>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashBord;













 import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import './Dashboard.css'
import person from '../../Image_Icon/person-add-outline 1.png'
import grid from '../../Image_Icon/grid-outline 1.png'
import group1 from '../../Image_Icon/Group 1343.png'
import plus from '../../Image_Icon/plus 1.png'

const DashBord = () => {
  return (
    <>
    <div style={{ backgroundColor: "#FFFFFF" }}>
        
      <div style={{ width: "96%" }}>
        <div style={{ backgroundColor: "#FFFFFF" }} class="row">
        
          <div class="col-12 col-lg-2 ">
          <>
          
               <div className="new_style">
               <Link style={{textDecoration: 'none'}} to={``}>
                  <h3 className="kk" color="inherit">manageAllOrder</h3>
                </Link>
                <br />
                <br />
                <Link  style={{textDecoration: 'none'}} to={`/dashBord/service`}>
                <span className="link_color"><img style={{marginRight: '10px'}} src={person} alt="" />Add service</span>
              
                </Link>
                <br />
                <br />
                <Link style={{textDecoration: 'none'}} to={`/dashBord/orderList`}>
                <span  className="link_color"><img style={{marginRight: '10px'}} src={person} alt="" />Order list</span>
                 
                </Link>
                <br />
                <br />
                <Link className="link_color" style={{textDecoration: 'none'}} to={`/dashBord/makeAdmin`}>
                  <span><img style={{marginRight: '10px'}} src={person} alt="" />Make Adimn</span>
                </Link>
                <br />
               </div>

              </>
           
              <div className="new_style" >
                {" "}
                <Link className="link_color" style={{textDecoration: 'none'}} to={`/dashBord/review`}>
                  <span><img style={{marginRight: '10px'}} src={person} alt="" />Review</span>
                </Link>
                <br />
                <Link className="link_color" style={{textDecoration: 'none'}} to={`/dashBord/bookingLisht`}>
                  <span><img style={{marginRight: '10px'}} src={person} alt="" />Booking list</span>
                </Link>
                <br />
                <Link to={`/dashboard/review`}>
                  {/* <Button color="inherit">Review</Button> */}
                </Link>
              </div>
          </div>

          <div style={{ backgroundColor: "#F4F7FC" }} class="col-12 col-lg-10 py-2" >
          <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DashBord;
