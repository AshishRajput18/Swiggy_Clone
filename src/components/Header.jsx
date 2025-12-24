import React from 'react';
import { CiSearch } from "react-icons/ci";
import { MdDiscount } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { PiSignIn } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { RxCaretDown } from "react-icons/rx";

function Header() {
    const links = [
        {
            icons: <CiSearch />,
            name: "Search"
        },
        {
            icons: <MdDiscount />,
            name: "Offers",
            sup:"New"
        },
        {
            icons: <IoIosHelpCircle />,
            name: "Help"
        },
        {
            icons: <PiSignIn />,
            name: "Sign In"
        },
        {
            icons: <GiShoppingCart />,
            name: "Cart",
            sup:"2"
        }
    ];

    return (
        <header className='p-[15px] shadow-xl text-[#686b78]'>
            <div className='max-w-[1200px] mx-auto flex items-center gap-x-4'>
                <div className='w-[60px]'>
                    <img src='images/logo.png' className='w-full' alt='Logo' />
                </div>
                <div className='flex items-center gap-1'>
                    <span className='font-bold border-b-[3px] border-[black]'>Ratanada</span>
                    Jodhpur,Rajasthan,India
                    <RxCaretDown className='text-[0.9rem] text-[#fc8019] font-bold' fontSize={25} />
                </div>
                <nav className='flex list-none gap-7 ml-auto font-semibold text-[18px]'>
                    {links.map((link, index) => (
                        <li key={index} className='flex hover:text-[#fc8019] items-center gap-2'>
                            {link.icons}
                            {link.name}
                            <sup>{link.sup}</sup>
                        </li>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
