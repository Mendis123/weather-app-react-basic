import Navbar from "./components/common/Navbar.jsx";
import { Route, Routes } from "react-router";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";

const App = () => {

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-500 to-indigo-700">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App
