import React from "react";
import { Link } from "react-router-dom";
import * as Eyitel from "../../Component/Images/image";
const Navbar = ()=>{
    return (
        <>
            <div className="flex justify-between align-center w-full p-9 border-violet-200 border-solid border-b-2">
                <img src={Eyitel.eyitel} alt="eyitel" />
                <nav className="flex justify-between w-1/2">
                    <ul className="flex justify-between align-center w-full text-violet-900 text-base font-normal">
                        <Link to="/">Home</Link>
                        <Link to="/customer">Customers</Link>
                        <Link to="/security">Security</Link>
                        <Link to="aboutus">About us</Link>
                        <Link to="contact">Contact</Link>
                    </ul>
                </nav>
                <div className="flex justify-between  align-center w-48">
                    <p className="text-violet-900 text-base font-normal">Sign In</p>
                    <Link to="/signin" className=" flex justify-center p-1.5 align-center bg-violet-900 text-white text-sm w-32 h-9 rounded-md font-sans">Get Started</Link>
                </div>
            </div>
        </>
    );
}
export default Navbar;