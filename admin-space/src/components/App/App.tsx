import React, {useEffect, useState} from 'react';
import './app.css';
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import Dashboard from "../Courses/Courses";
import AddCourse from "../AddCourse/AddCourse";

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
                <Dashboard/>
                <AddCourse/>
            </div>
        </div>
    );
};

export default App;