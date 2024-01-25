import React, { useState } from 'react'
import { Navbar, ToggleButton } from 'react-bootstrap'
import styles from './Nav.module.css'

const Nav = () => {
    const [theme, setTheme] = useState(false);

    return (
        <Navbar className={`${styles.main} ${theme ? styles.light : styles.dark}`}>
            My Task App
            <ToggleButton id={''} value={''} onClick={(e) => setTheme((prev) => !prev)}> {theme ? <>Light Theme</> : <>Dark Theme</>}</ToggleButton>
        </Navbar>
    )
}

export default Nav
