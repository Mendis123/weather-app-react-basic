import Navbar from "./components/common/Navbar.jsx";
import { Route, Routes } from "react-router";
import Home from "./components/home/Home.jsx";

const App = () => {

  return (
      <div>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
  )
}

export default App
