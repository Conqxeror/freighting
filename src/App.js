import { HashRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import FgPass from "./components/FgPass";
import Hnav from './components/Hnav';
import SideBar from './components/SideBar';

function App() {
  return (
    <div>
      <HashRouter>
        <Hnav />
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/fgpass" element={<FgPass />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
