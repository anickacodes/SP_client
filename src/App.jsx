
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Community from "./pages/Community";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community-resources" element={<Community />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
