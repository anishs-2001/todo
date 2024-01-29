import React, { useState } from 'react'
import { createContext } from 'react'

export const Theme = createContext({
    theme: false,
    changeTheme: function changeTheme() { }
});

const ThemeContext = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(false);

    const changeTheme = () => {
        setTheme((prev) => !prev)
    }
    return (
        <div>
            <Theme.Provider value={{ theme, changeTheme }}>{children}</Theme.Provider>
        </div>
    )
}

export default ThemeContext
