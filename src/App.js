import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Sheared/Home/Home";
import Footer from "./Components/Footer/Footer";
import GoogleLogin from "./Components/Login/GoogleLogin";
import Registration from "./Components/Login/Register/Registration";
import AuthProvider from "./Context/AuthProvider";
import About from "./Components/About/About";
import PrivetRoute from "./Components/Login/Privet_Route/PrivetRoute";
import DashBord from "./Components/DashBord/DashBord";
import BookingLisht from "./Components/DashBord/Customrs/BookingLisht";
import AddService from "./Components/DashBord/Admin/AddService";
import OrderList from "./Components/DashBord/Admin/OrderList";
import MakeAdmin from "./Components/DashBord/Admin/MakeAdmin";
import Review from "./Components/DashBord/Customrs/Review";
import Purches from "./Components/Services/Purches/Purches";
import AdminRoute from "./Components/DashBord/AdminRoute";
import ManageService from "./Components/DashBord/Admin/ManageService";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import Welcome from "./Components/DashBord/Welcome";
import Erro from "./Components/Sheared/Home/Erro";
import OurStory from "./Components/Test/OurStory";
import ServiceMenue from "./Components/ServiceMenue/ServiceMenue";
import Blog from "./Components/ServiceMenue/Blog";
import AllService from "./Components/Services/AllService";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  console.log(loading);

  return (
    <div className="App">
      {loading ? (
        <div className="mt-5">
          <ScaleLoader
            size={15}
            color={"#123abc"}
            loading={loading}
            speedMultiplier={1.5}
          />
        </div>
      ) : (
        <AuthProvider>
          <Router>
            <Header></Header>
            {/* <Home></Home> */}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />

              <Route
                path="/dashBord"
                element={
                  <PrivetRoute>
                    <DashBord />
                  </PrivetRoute>
                }
              >
                <Route path="/dashBord" element={<Welcome></Welcome>}></Route>

                <Route
                  path="/dashBord/service"
                  element={<AddService></AddService>}
                ></Route>
                <Route
                  path="/dashBord/orderList"
                  element={<OrderList></OrderList>}
                ></Route>
                <Route
                  path="/dashBord/makeAdmin"
                  element={
                    <AdminRoute>
                      <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                  }
                ></Route>
                <Route
                  path="/dashBord/review"
                  element={<Review></Review>}
                ></Route>
                <Route
                  path="/dashBord/bookingLisht"
                  element={<BookingLisht></BookingLisht>}
                ></Route>
                <Route
                  path="/dashBord/manageService"
                  element={
                    <ManageService>
                      <BookingLisht></BookingLisht>
                    </ManageService>
                  }
                ></Route>
              </Route>

              <Route path="googleLogin" element={<GoogleLogin></GoogleLogin>} />
              <Route
                path="about"
                element={
                  <PrivetRoute>
                    <About />
                  </PrivetRoute>
                }
              ></Route>
              <Route
                path="allservice"
                element={
                  <PrivetRoute>
                    <AllService />
                  </PrivetRoute>
                }
              ></Route>
              <Route
                path="dashBord"
                element={
                  <PrivetRoute>
                    <DashBord />
                  </PrivetRoute>
                }
              ></Route>
              <Route
                path="registration"
                element={<Registration></Registration>}
              />

              <Route
                path="/purches/:id"
                element={
                  <PrivetRoute>
                    <Purches />
                  </PrivetRoute>
                }
              />

              <Route path="*" element={<Erro />} />
            </Routes>

            <Footer></Footer>
            <br />
            <br />
            <br />

           
            <br />
            <br />
            <br />
             <Blog></Blog>
            {/* <OurStory></OurStory> */}
            <ServiceMenue></ServiceMenue>
          </Router>
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
