import './App.css';
import React from 'react'
import Login from './Components/Login'
import NavigationBar from './Components/NavigationBar'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Signup from './Components/Customer/Signup'
import './Styles/bootstrap.css'
import AdminHome from './Components/Admin/AdminHome';
import AddMedicine from './Components/Admin/AddMedicine';
import ViewMedicine from './Components/Admin/ViewMedicine';
import SalesMedicine from './Components/Admin/SalesMedicine';
import DeleteMedicine from './Components/Admin/DeleteMedicine';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Router>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/admin' element={<AdminHome />}></Route>
            <Route path='/addmed' element={<AddMedicine />}></Route>
            <Route path='/viewmed' element={<ViewMedicine />}></Route>
            <Route path='/delmed' element={<DeleteMedicine />}></Route>
            <Route path='/salesmed' element={<SalesMedicine />}></Route>
          </Routes>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
