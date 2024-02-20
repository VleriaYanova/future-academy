import React from 'react';
import logo from './img/logo.png'
const SideBar = () => {
    return (
        <div className='h-full max-w-xs flex flex-col items-center'>
            <div>
                <img width={60} height={60} src={logo} alt="#"/>
            </div>
        </div>
    );
};

export default SideBar;