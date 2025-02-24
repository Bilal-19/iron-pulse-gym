import React from "react";

export default function Footer(){
    return (
        <>
        <div className="w-full bg-gray-900 h-50">
            <a href="" className="flex items-center space-x-3 p-3">
                <img src="/public/Iron-Pulse-Logo.png" alt="logo" className="size-24"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Iron Pulse Fitness</span>
            </a>
        </div>
        </>
    )
}