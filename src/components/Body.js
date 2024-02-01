import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Body = () => {
    const isMenuOpen = useSelector( store => store.app.isMenuOpen);
    return (
        <div className='flex'>
            {isMenuOpen && <Sidebar/>}
            <Outlet/>
        </div>
    );
};

export default Body;