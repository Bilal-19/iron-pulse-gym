import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="w-full bg-gray-900 h-fit md:h-110 text-white">
                <div>
                    <Link to="/" className="flex items-center justify-center space-x-3 p-3">
                        <img src="/Iron-Pulse-Logo.png" alt="logo" className="size-24" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Iron Pulse Fitness</span>
                    </Link>
                </div>

                <div class="flex flex-col md:flex-row justify-around mt-10">
                    <div className="mx-5 mb-5 md:mb-0 md:mx-0">
                        <h4 className="font-bold uppercase text-xl md:mb-3">Contact Us</h4>
                        <p>Dubai, UAE</p>
                        <p>(+92)-3082491543</p>
                        <p>info@ironpulsefitness.com</p>
                    </div>

                    <div className="mx-5 mb-5 md:mb-0 md:mx-0">
                        <h4 className="font-bold uppercase text-xl md:mb-3">Sitemap</h4>
                        <ul className="font-lighter flex flex-col">
                            <li>
                                <NavLink to="/" className="block p md:p-0 dark:text-white">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="block p md:p-0 dark:text-white">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/programs" className="block p md:p-0 dark:text-white">
                                    Programs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/membership" className="block p md:p-0 dark:text-white">
                                    Membership
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs" className="block p md:p-0 dark:text-white">
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="block p md:p-0 dark:text-white">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="mx-5 mb-5 md:mb-0 md:mx-0">
                        <h4 className="font-bold uppercase text-xl md:mb-3">Social Media</h4>
                        <div className="grid grid-cols-3 md:text-center">
                            <a href=""><i class="fa-brands fa-facebook fa-xl"></i></a>
                            <a href=""><i class="fa-brands fa-instagram fa-xl"></i></a>
                            <a href=""><i class="fa-brands fa-linkedin fa-xl"></i></a>
                        </div>
                    </div>
                </div>

                <div class="container mx-auto mt-5 mb-5">
                    <hr />
                </div>

                <div class="container mx-auto text-center">
                    <p className="text-sm">Copyright &copy; 2025. Iron Pulse Fitness. | All Rights Reseved.</p>
                </div>
            </div>
        </>
    )
}