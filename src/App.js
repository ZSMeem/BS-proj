import React from 'react'
import { Outlet } from 'react-router-dom';
import HeadBar from './Component/HeadBar/Navbar';
import Footer from './Component/Footer/Footer';
import SideBar from './Component/SideBar/SideBar';
import { Box } from '@mui/material';
const App = () => {
  return (
    <div>
      <div>
        <HeadBar/>
        <Box sx={{display: 'flex',  paddingTop:10}}>
            <SideBar/>
            <div>
            <Outlet/>
            <Footer/>
            </div>
        </Box>
      </div>
    </div>
  )
}

export default App;
