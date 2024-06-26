import React from 'react';
import { useState } from 'react';
import Logo from '../Images/leverLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const NavBar = () => {

    const [show, setShow] = useState(false);
    return (
        <div className='bg-[#0d364f] text-zinc-50 py-4'>
            <div className='w-5/6 mx-auto flex justify-between items-center'>
                <p className='grow'>Lever Advertising</p>
                <FontAwesomeIcon icon={faBars} className='md:hidden cursor-pointer' onClick={() => setShow(!show)} />
                <div className='hidden md:flex justify-between items-center grow'>
                    <Link to='/' className='navbar__link'>Home</Link>
                    <Link to='products' className='navbar__link'>Products</Link>
                    <Link to='faq' className='navbar__link'>FAQ</Link>
                    <Link to='contact' className='navbar__link'>Contact</Link>
                </div>


            </div>
            {/* Mobile Menu */}
            <div className={!show ? 'hidden' : 'flex flex-col md:hidden items-center justify-between'}>
                <Link className='navbar__link' to='/' onClick={() => setShow(!show)}>Home</Link>
                <Link className='navbar__link' to='products' onClick={() => setShow(!show)}>Products</Link>
                <Link className='navbar__link' to='faq' onClick={() => setShow(!show)}>FAQ</Link>
                <Link className='navbar__link' to='contact' onClick={() => setShow(!show)}>Contact</Link>
            </div>
        </div >
    )
}

export default NavBar;