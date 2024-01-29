import React, { useContext } from 'react'
import { Button, Navbar } from 'react-bootstrap'
import styles from './Nav.module.css'
import { Theme } from './themeContext/ThemeContext'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const { theme, changeTheme } = useContext(Theme);
    const navigate = useNavigate();

    return (
        <Navbar className={`${styles.main} ${theme ? styles.light : styles.dark}`}>
            My Task App
            <Button type='button' className={`${styles.button}`} onClick={changeTheme}> {theme ? <>Light Theme</> : <>Dark Theme</>}</Button>
            <Button type='button' className='ms-4' onClick={() => { navigate("/") }}> Logout</Button>
        </Navbar>
    )
}

export default Nav
