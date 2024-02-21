import React, {useState} from 'react';
import logo from './img/logo.png';
import Home from './img/Home.svg';
import Email from './img/email.svg';
import ContactBook from './img/ContactBook.svg';
import Coin from './img/Coin.svg';
import Dashboard from './img/Dashboard.svg';
import Invoices from './img/Invoice.svg';
import Money from './img/Money.svg';
import Ticket from './img/Ticket.svg';

const SideBar = () => {
    const [cheked, setCheked] = useState([]);

    const toggleSection = () => {

    }
    return (
        <div className='h-dvh w-1/12 flex flex-col items-center dark:bg-dark_1'>
            <div className='mt-12 flex flex-col items-center'>
                <div className='mb-24'>
                    <img width={60} height={60} src={logo} alt="#"/>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <Home  width={60} height={60}  fill={'#D1D1D1'}/>
                    <Email width={60} height={60} fill={'#D1D1D1'} />
                    <ContactBook width={60} height={60} fill={'#D1D1D1'}/>
                    <Coin width={60} height={60} fill={'#D1D1D1'}/>
                    <Dashboard width={60} height={60} fill={'#D1D1D1'}/>
                    <Invoices width={60} height={60} fill={'#D1D1D1'} />
                    <Money width={60} height={60} fill={'#D1D1D1'}/>
                    <Ticket width={60} height={60} fill={'#D1D1D1'}/>
                </div>
            </div>
        </div>
    );
};

export default SideBar;