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
            <Route path="googleLogin" element={<GoogleLogin></GoogleLogin>} />
            <Route path="about" element={<PrivetRoute><About/></PrivetRoute>}></Route>
            <Route path="dashBord" element={<PrivetRoute><DashBord/></PrivetRoute>}></Route>
            <Route
              path="registration"
              element={<Registration></Registration>}
            />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
