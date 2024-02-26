import React from 'react';
import Chat from './img/Chat.svg'
import Bell from './img/bell.svg'
import Settings from './img/Setting.svg';
import United from './img/United.png'
import ArrowUp from './img/arrowUp.svg';

const Header = () => {
    return (
        <div className='flex dark:bg-dark_1 h-full justify-between items-center border-b-2 border-gray_3 '>
            <div className='ml-9'>
                <input type="text"
                       className="bg-gray_4 w-72 px-8 text-gray_1 text-sm rounded-2xl block p-2.5 focus:border-none  focus:outline-none"/>
            </div>
            <div className='flex items-center justify-between font-bold dark:text-white text-base gap-10 mr-12'>
                <div>
                    <div className='flex items-center gap-4 border border-gray_1 p-4 rounded-3xl'>
                        <img src={United} alt="united"/>
                        English (US)
                        <ArrowUp width={30} height={30} fill={'#D1D1D1'}/>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <Chat width={32} height={32}/>
                    <Bell width={32} height={32}/>
                    <Settings width={32} height={32}/>
                </div>
                <div className='flex items-center'>
                    <div className='w-16 bg-blue h-16 rounded-xl'>
                    </div>
                    <div className='ml-6'>
                        <p>Zara Wardani</p>
                        <p className='text-gray_4 font-semi'>Admin</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;