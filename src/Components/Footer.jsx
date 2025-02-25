import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <>
        <div className="w-full bg-gray-900 h-50">
            <Link to="/" className="flex items-center space-x-3 p-3">
                <img src="/Iron-Pulse-Logo.png" alt="logo" className="size-24"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Iron Pulse Fitness</span>
            </Link>
        </div>
        </>
    )
}