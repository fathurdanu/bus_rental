import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-item'>
                <Link className='a-logo h1' to='/'>Bus Rental</Link>
            </div>
            <div className='navbar-item h5'>
                <ul>
                    <li><Link to='/brands'>Brand</Link></li>
                    <li><Link to='/users'>User</Link></li>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;