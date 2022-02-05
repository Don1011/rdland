import React from 'react';
import Logo from'../assets/RDL_LOGO.svg';
import {Link, NavLink} from "react-router-dom";

const Navigation = () => {
    return (<header>
        <nav className='topNav'>
            <figure>
                <Link to={'/'} className={'no-deco'}>
                    <img alt='logo' className='logo' src={Logo}/>
                </Link>
            </figure>
                <input id='rdMenu' type={'checkbox'} />
                <label htmlFor={'rdMenu'} className='menu'>
                    <span className='menu-bars'>&nbsp;</span>
                </label>
                <ul className='topNav-list'>
                    <li className='topNav-list-item'>
                        <NavLink className='topNav-list-item-link' to='/'>HOME</NavLink>
                    </li>
                    <li className='topNav-list-item'>
                        <NavLink className='topNav-list-item-link' to='/'>EVENTS</NavLink>
                    </li>
                    <li className='topNav-list-item'>
                        <NavLink className='topNav-list-item-link' to='/'>CREATORS</NavLink>
                    </li>
                    <li className='topNav-list-item'>
                        <NavLink className='topNav-list-item-link' to='/'>BUSINESSES</NavLink>
                    </li>
                    <li className='topNav-list-item'>
                        <NavLink className='topNav-list-item-link' to='/'>ABOUT</NavLink>
                    </li>
                    <li className='topNav-list-item'>
                        <NavLink className='topNav-list-item-link' to='/'>LOG IN</NavLink>
                    </li>
                    <li className='topNav-list-item'>
                        <NavLink to='/' className='regBtn'>SIGN UP</NavLink>
                    </li>
                </ul>

        </nav>
    </header>

    );
};

export default Navigation;