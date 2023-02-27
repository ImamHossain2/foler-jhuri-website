import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faInstagram, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons'
import React from 'react';


const Header = () => {
    return (
        <div className='flex justify-between items-center bg-sky-500 px-12 text-white'>
        <div className=''>
        <a className='hover:text-black' href=""><FontAwesomeIcon className='px-2' icon={faFacebook} /></a>
        <a className='hover:text-black' href=""><FontAwesomeIcon className='px-2' icon={faInstagram} /></a>
        <a className='hover:text-black' href=""><FontAwesomeIcon className='px-2' icon={faWhatsapp} /></a>
        <a className='hover:text-black' href=""><FontAwesomeIcon className='px-2' icon={faTwitter} /></a>
        <a className='hover:text-black' href=""><FontAwesomeIcon className='px-2' icon={faYoutube} /></a>
        </div>
        <div className='flex items-center gap-9'>
        <a className='hover:text-black' href=""><FontAwesomeIcon className='' icon={faBell} /></a>
        <a className='hover:text-black' href=""><FontAwesomeIcon className='' icon={faCartShopping} /></a>
        <a className='hover:text-black' href=""><img className='w-10 rounded-full p-1' src="https://www.pngfind.com/pngs/m/317-3177131_636682202684372240-user-profile-photo-round-hd-png-download.png" alt="" /></a>
        </div>
        </div>
    );
};

export default Header;