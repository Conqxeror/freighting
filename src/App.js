import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import FgPass from "./components/FgPass";
import Hnav from "./components/Hnav";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Trip from "./components/Trip";

function App() {
  return (
    <>
      <Hnav />
      <div className="d-flex">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="fgpass" element={<FgPass />} />
          <Route path="trip" element={<Trip />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
