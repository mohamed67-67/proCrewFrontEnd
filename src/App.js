import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login';
import Nav from './Components/Nav';
import SignUp from './Components/SignUp';
import User from './Components/User'


function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
