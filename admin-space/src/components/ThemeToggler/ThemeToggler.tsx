import React from 'react';


const ThemeToggler = ({value, onClick}: any) => {
    return (
        <>
            <button onClick={onClick} className="px-3 rounded-sm bg-yellow dark:bg-blue font-semi">hi</button>
        </>
    )
}

export default ThemeToggler;