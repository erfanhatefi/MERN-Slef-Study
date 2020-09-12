import React, { useState } from 'react';

import './MainNavigation.css';
import MainHeader from './MainHeader.js'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks.js';
import SideDrawer from './SideDrawer.js';
import Backdrop from '../UIElements/Backdrop.js';

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer = () => {
        setDrawerIsOpen(true)
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }

    return(
        <React.Fragment>
            {drawerIsOpen ? (<Backdrop onClick={closeDrawer}/>) : null}
            {drawerIsOpen ? (
            <SideDrawer className='main-navigation__drawer-nav'>
                <NavLinks/>
            </SideDrawer>) : null}
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawer   }>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className='main-navigation__title'>
                    <Link to="/">Your Places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}


export default MainNavigation