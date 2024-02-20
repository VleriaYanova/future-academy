import React, {useEffect, useState} from 'react';
import './app.css';
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import SideBar from "../SideBar/SideBar";

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
            <SideBar/>
        </>
    );
};

export default App;