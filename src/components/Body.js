import React from 'react';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';
const Body = () => {
    const isMenuOpen = useSelector( store => store.app.isMenuOpen);
    return (
        <div className='flex'>
            {isMenuOpen && <Sidebar/>}
            <MainContainer/>
        </div>
    );
};

export default Body;