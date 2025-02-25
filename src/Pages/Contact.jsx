import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Contact() {
    return (
        <>
            <Header />

            <div className="bg-[url(/contact.jpg)] bg-no-repeat w-full h-80 md:h-100 bg-cover flex flex-col items-center justify-center">
                <h1 className="m-5 md:m-0 w-full text-center text-gray-100 text-3xl md:text-5xl p-5 font-semibold">
                    Let's connect! Reach out to us today.
                </h1>
                <p className="ff-playfair italic text-gray-100 text-xl md:text-3xl text-center mx-3 md:m-0">
                    Have questions or want to schedule a tour? We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
                </p>
            </div>

            <div className="container mx-auto mt-10 mb-20">
                <div className="grid grid-col-1 md:grid-cols-2 gap-10 text-justify">
                    <div className="border border-gray-300 rounded-lg p-10 m-5 md:m-0 bg-gray-100 shadow-md">
                        <div className="mb-5">
                            <h5 className="font-bold">Phone</h5>
                            <p><i class="size-4 fa-solid fa-phone"></i> (92) 3082491543</p>
                        </div>

                        <div className="mb-5">
                            <h5 className="font-bold">Email</h5>
                            <p><i class="size-4 fa-solid fa-envelope"></i> info@ironpulsefitness.com</p>
                        </div>

                        <div className="mb-5">
                            <h5 className="font-bold">Location</h5>
                            <p><i class="size-4 fa-solid fa-location-dot"></i> Visit us at 123 Fitness Lane, Cityville, USA</p>
                        </div>

                        <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.141605514804!2d-83.01659612347264!3d40.00528441762626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388ebd3c54d8b5%3A0xf6e017a0b209e909!2s123%20W%20Lane%20Ave%2C%20Columbus%2C%20OH%2043210%2C%20USA!5e0!3m2!1sen!2s!4v1740483382112!5m2!1sen!2s" className="h-100 w-full shadow-md" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-10 m-5 md:m-0 bg-gray-100 shadow-md">
                        <h4 className="text-center font-medium text-3xl mb-3">Contact Us</h4>
                        <form action="">
                            <input type="text" className="shadow-sm p-2 w-full md:w-3/4 block mx-auto border border-gray-300 rounded-sm focus:outline-none mb-5" placeholder="Name" />
                            <input type="email" className="shadow-sm p-2 w-full md:w-3/4 block mx-auto border border-gray-300 rounded-sm focus:outline-none mb-5" placeholder="Email" />
                            <input type="text" className="shadow-sm p-2 w-full md:w-3/4 block mx-auto border border-gray-300 rounded-sm focus:outline-none mb-5" placeholder="Phone" />
                            <textarea rows="5" style={{resize:"none"}} className="shadow-sm p-2 w-full md:w-3/4 block mx-auto border border-gray-300 rounded-sm focus:outline-none mb-3" placeholder="Message"></textarea>
                            <button className="bg-gray-900 text-white w-full md:w-3/4 block mx-auto p-2 shadow-sm rounded-sm">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}