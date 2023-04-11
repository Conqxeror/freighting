import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import FgPass from "./components/FgPass";
import Hnav from "./components/Hnav";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div >
      <Hnav />
      <div className="d-flex">
      <div >
      <SideBar />
      </div>
      <div>
      <Home />
      <LogIn />
      <FgPass />
      </div>
      </div>
    </div>
  );
}

export default App;
