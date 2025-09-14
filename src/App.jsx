import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Secondpage from "./Pages/Secondpage";
import { DataProvider } from "./context/DataContext";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <DataProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/second-page" element={<Secondpage />} />
          </Routes>
        </DataProvider>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
