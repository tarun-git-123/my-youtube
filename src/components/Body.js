import React from 'react';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';
const Body = () => {
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(toggleMenu())
    // });

    const isMenuOpen = useSelector( store => store.app.isMenuOpen);
    // console.log(isMenuOpen);
    return (
        <div className='flex'>
            <Sidebar/>
            <MainContainer/>
        </div>
    );
};

export default Body;