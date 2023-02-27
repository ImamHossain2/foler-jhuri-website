import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



const HeaderTwo = () => {
    return (
        <div className='flex justify-between mt-3 px-12' >
            <a href=""><img className="" src="https://github.com/ProgrammingHero1/legal-solution-resources/blob/main/images/logo2.png?raw=true" alt="" /></a>
            <div>
            <input className="px-20 py-1 rounded border border-solid border-b-gray-500 bg-slate-500" type="search" name="Search" id="" placeholder='Search here' />
            <button className='px-3 py-1 border-black bg-sky-500 text-white rounded hover:bg-black'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>
            <a href=""><ul className='flex justify-between items-center gap-5 font-bold'>
            <li>
            Login/Register
            </li>
            <li>
            Order
            </li>
            <li>
            About
            </li>
            </ul></a>
        </div>
    );
};

export default HeaderTwo;