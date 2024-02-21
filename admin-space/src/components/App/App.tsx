import React, {useEffect, useState} from 'react';
import './app.css';
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

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
        <>
            <ThemeToggler onClick={() => {
                setDarkTheme(!darkTheme)
            }}/>
            <Header/>
            <SideBar/>
        </>
    );
};

export default App;