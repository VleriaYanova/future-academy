import React, {useEffect, useState} from 'react';
import './app.css';
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import Dashboard from "../Courses/Courses";
import AddCourse from "../AddCourse/AddCourse";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailCourse from '../DetailCourse/DetailCourse';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }

    }, [darkTheme])

    return (
        <BrowserRouter>
            <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout  h-full'>
                <ThemeToggler onClick={() => {
                    setDarkTheme(!darkTheme)
                }}/>
                <div className='grid-in-header'>
                    <Header/>
                </div>
                <div className='grid-in-nav'>
                    <SideBar/>
                </div>
                <div className='grid-in-main'>
                    <Routes>
                        <Route path="/courses" element={<Dashboard/>}/>
                        <Route path="/addcourse" element={<AddCourse/>}/>
                        <Route path='/detailcourse/:id' element={<DetailCourse/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;