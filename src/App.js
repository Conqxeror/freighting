import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import FgPass from "./components/FgPass";
import Hnav from "./components/Hnav";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Hnav />
      <div className="d-flex">
        <div>
          <SideBar />
        </div>
        <Routes>
          <div className="w-100 align-items-center flex-row">
            <Route path element={<Home />} />
            <Route path element={<LogIn />} />
            <Route path element={<FgPass />} />
          </div>
        </Routes>
      </div>
    </div>
  );
}

export default App;
