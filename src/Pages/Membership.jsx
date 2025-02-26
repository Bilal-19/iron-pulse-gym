import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Membership() {
    return (
        <>
            <Header />

            <div className="bg-[url(/membership.jpg)] bg-no-repeat w-full h-80 md:h-100 bg-cover flex flex-col items-center justify-center">
                <h1 className="m-5 md:m-0 w-full text-center text-gray-100 text-3xl md:text-5xl p-5 font-semibold">
                    Membership
                </h1>
                <p className="ff-playfair italic text-gray-100 text-xl md:text-2xl text-center mx-3 md:m-0">
                    Choose your plan and join the IronPulse family today!
                </p>
            </div>

            <div className="w-full mt-10 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl mb-2">Membership Plans:</h2>
                <p>
                    We offer flexible membership plans to fit your lifestyle and budget. Here’s what you can choose from:
                </p>
            </div>

            <div class="container mx-auto mt-10 mb-10">
                <div class="grid md:grid-cols-3 gap-20">
                    <div className="m-3 md:m-0 text-justify">
                        <span class="text-5xl">🏋️‍♂️</span>
                        <h3 className="font-medium text-2xl">Basic Plan</h3>
                        <p className="text-justify">
                            Access to gym facilities during off-peak hours. Perfect for those who prefer a flexible schedule.
                        </p>
                    </div>

                    <div className="m-3 md:m-0 text-justify">
                        <span class="text-5xl">🌟</span>
                        <h3 className="font-medium text-2xl">Premium Plan</h3>
                        <p className="text-justify">
                            Unlimited access to all facilities, group classes, and discounts on personal training sessions.
                        </p>
                    </div>

                    <div className="m-3 md:m-0 text-justify">
                        <span class="text-5xl">🔥</span>
                        <h3 className="font-medium text-2xl">Elite Plan</h3>
                        <p className="text-justify">
                            Everything in Premium, plus 24/7 access, complimentary fitness assessments, and exclusive member events.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-30 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl mb-2">Perks of Joining:</h2>
                <p>
                    When you join IronPulse Fitness, you’re not just getting a gym membership – you’re joining a community. Here’s what you’ll enjoy:
                </p>
            </div>

            <div class="container mx-auto mt-10 mb-10">
                <div class="grid md:grid-cols-4 gap-2">
                    <div className="m-3 md:m-0 text-justify">
                        <p>Free trial session</p>
                    </div>

                    <div className="m-3 md:m-0 text-justify">
                        <p>No long-term contracts</p>
                    </div>

                    <div className="m-3 md:m-0 text-justify">
                        <p>Access to exclusive member events</p>
                    </div>

                    <div className="m-3 md:m-0 text-justify">
                        <p>Supportive community to keep you motivated</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}