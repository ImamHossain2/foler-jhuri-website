import { faBars, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HeaderThree = () => {
    return (
        <>
            <div className='flex justify-center items-center px-12 mt-3 bg-gray-300 p-2'>
            <div className='bg-sky-500 font-bold text-white hover:text-black rounded p-2 '>
            <h5><FontAwesomeIcon icon={faBars} /> Browser Catagrory <FontAwesomeIcon icon={faDownload} /></h5> 
            
            <a href="#">
                <ul className='flex font-bold gap-5 hover:text-sky-500'>
                <li>Home</li>
                <li>SHOP NOW</li>
                <li>Contract US</li>
                <li>Order Tracking</li>
                </ul>
            </a>
            </div>

            <div>
            <a href="#">
            <ul className='flex font-bold'>
            <li className=''>
            OFFER & Discount
            </li>
            <li><button className='bg-sky-500 text-white hover:text-black rounded-full p-2 font-bold'>DOWNLOAD APP</button></li>
            </ul>
            </a>
            </div>
            </div>
        </>
    );
};

export default HeaderThree;