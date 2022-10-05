import Home from "./pages/Home";
import Project from "./pages/Project";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:slug' element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}
