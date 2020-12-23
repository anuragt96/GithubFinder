import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({icon,title}) => {

        return (
            <nav className="navbar bg-success">
                <h1>
                <i className={icon}/> {title}
                </h1>
                <ul>
                    <li>
                        <i class="fas fa-home"></i>
                        <Link to='/'>Home</Link> 
                    </li>
                    <li>
                        <i class="fas fa-info-circle"></i>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>

            </nav>
        )
    }

Navbar.defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
};


export default Navbar
