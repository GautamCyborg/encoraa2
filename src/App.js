import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Technology from "./pages/Technology";
import Upload from "./pages/Upload";
import Search from "./pages/Search";
import Register from "./pages/Register";
import Map from "./pages/Map";
import Statistics from "./pages/Statistics";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import { AddressProvider } from "./contexts/AddressContext";

import InteractiveTable from "./components/stats/InteractiveTable"
import Chart from './components/stats/Chart'
import UsersTable from "./components/stats/UsersTable";


function App() {
  return (
    <AddressProvider> 
      <Router>
        <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="TreeRegistry" element={<Home/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="Technology" element={<Technology/>}/>
            <Route path="Upload" element={<Upload/>}/>
            <Route path="trees" element={<Search/>}/>
            <Route path="signup" element={<Register/>}/>
            <Route path="map" element={<Map/>}/>
            <Route path="statistics" element={<Statistics/>}>
              <Route path="chart" element={<Chart/>}/>
              <Route path="country" element={<InteractiveTable/>}/>
              <Route path="users" element={<UsersTable/>}/>
            </Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </AddressProvider>
  );
}

export default App;
