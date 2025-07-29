
import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className={`flex justify-between items-center px-16 py-3 bg-[#0071f8] 
                    sticky top-0 left-0 w-full z-50 transition-all duration-500 
                    ${scrolled ? "rounded-b-4xl shadow-lg" : ""}`}
            >
                <div>
                    <img src="/public/resources/logo.png" alt="Logo" className="h-16  w-auto" />
                </div>
                <div>
                    <ul className="font-sans font-thin text-lg flex space-x-5  ">
                        <li className="inline-block">
                            <button className="px-4 py-2 text-white  hover:bg-blue-400 transition duration-400  rounded-3xl cursor-pointer">Home</button>
                        </li>
                        <li className="inline-block">
                            <button className="px-4 py-2 text-white   hover:bg-blue-400 transition duration-400 rounded-3xl cursor-pointer">Our Shop</button>
                        </li>
                        <li className="inline-block">
                            <button className="px-4 py-2 text-white  hover:bg-blue-400 transition duration-400  rounded-3xl cursor-pointer">Product Details</button>
                        </li>
                        <li className="inline-block">
                            <button className="px-4 py-2 text-white  hover:bg-blue-400 transition duration-400  rounded-3xl cursor-pointer">Contact US</button>
                        </li>
                        <li className="inline-block">
                            <button className="bg-[#ee626b] rounded-3xl px-4 py-2 font-bold text-white hover:bg-red-600
                             transition duration-400 cursor-pointer">
                                Sign In
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
