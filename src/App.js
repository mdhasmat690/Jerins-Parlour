import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Sheared/Home/Home";
import Footer from "./Components/Footer/Footer";
import GoogleLogin from "./Components/Login/GoogleLogin";
import Registration from "./Components/Login/Register/Registration";
import Login from "./Components/Login/Login/Login";
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

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          {/* <Home></Home> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />

            <Route path="/dashBord" element={<DashBord />}>
              {/*  <Route
                path="/dashboard"
                element={<DashBoardHome></DashBoardHome>}
              ></Route> */}

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
                element={<MakeAdmin></MakeAdmin>}
              ></Route>
              <Route
                path="/dashBord/review"
                element={<Review></Review>}
              ></Route>
              <Route
                path="/dashBord/bookingLisht"
                element={<BookingLisht></BookingLisht>}
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
          </Routes>

          <Footer></Footer>
          <br />
          <br />
          <br />
          <br />
          {/* <BookingLisht></BookingLisht> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
