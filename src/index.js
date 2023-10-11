import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom/client';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Profile/pages/mainPage';
import Employee from './Pages/Employee/Employee';
import Home from './Pages/Home';
import Signin from './Pages/SigninSignup/signin/SignIn';
import AdminSignUp from './Pages/SigninSignup/signup/AdminSignUp';
import EmpSignUp from './Pages/SigninSignup/signup/empSignUp';
import Project from './Pages/Project/components/KanbanBoard';
import App from './App';
//import "./App.css";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ToastContainer theme="colored" position="top-right"></ToastContainer>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/App" element={<App/>}>
        <Route exact path="/App/Dashboard" element={<Dashboard/>}/>
        <Route exact path="/App/Project" element={<Project/>}/>
        <Route exact path="/App/Profile" element={<Profile/>}/>
        <Route exact path="/App/Employee" element={<Employee/>}/>
      </Route>
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/Admin-sign-up" element={<AdminSignUp/>} />
      <Route path="/Emp-sign-up" element={<EmpSignUp/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
