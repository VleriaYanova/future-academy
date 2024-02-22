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
        <div className='h-dvh flex flex-col items-center border-r-2 dark:bg-dark_1'>
            <div className='mt-12 flex flex-col items-center'>
                <div className='mb-24'>
                    <img width={60} height={60} src={logo} alt="#"/>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <Home  width={32} height={32}  fill={'#D1D1D1'}/>
                    <Email width={32} height={32} fill={'#D1D1D1'} />
                    <ContactBook width={32} height={32} fill={'#D1D1D1'}/>
                    <Coin width={32} height={32} fill={'#D1D1D1'}/>
                    <Dashboard width={32} height={32} fill={'#D1D1D1'}/>
                    <Invoices width={32} height={32} fill={'#D1D1D1'} />
                    <Money width={32} height={32} fill={'#D1D1D1'}/>
                    <Ticket width={32} height={32} fill={'#D1D1D1'}/>
                </div>
            </div>
        </div>
    );
};
//TODO сдеать границу сбоку
export default SideBar;