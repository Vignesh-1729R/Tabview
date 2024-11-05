import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TableView from './components/TableView';
import CardView from './components/CardView';
import Home from './components/Home';
function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/collegeData') 
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
console.log(data,"appjsdata");


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/table" element={<TableView data={data} />} />
        <Route path="/cards" element={<CardView data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
