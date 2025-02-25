import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Membership() {
    return (
        <>
            <Header />

            <div className="w-full mt-10 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl mb-2">Membership Plans:</h2>
                <p>
                    We offer flexible membership plans to fit your lifestyle and budget. Here’s what you can choose from:
                </p>
            </div>

            <div class="container mx-auto mt-10 mb-10">
                <div class="grid grid-cols-3 gap-20">
                    <div>
                    <span class="text-5xl">🏋️‍♂️</span> 
                        <h3 className="font-medium text-2xl">Basic Plan</h3>
                        <p className="text-justify">
                            Access to gym facilities during off-peak hours. Perfect for those who prefer a flexible schedule.
                        </p>
                    </div>

                    <div>
                    <span class="text-5xl">🌟</span>  
                        <h3 className="font-medium text-2xl">Premium Plan</h3>
                        <p className="text-justify">
                        Unlimited access to all facilities, group classes, and discounts on personal training sessions.
                        </p>
                    </div>

                    <div>
                    <span class="text-5xl">🔥</span> 
                        <h3 className="font-medium text-2xl">Elite Plan</h3>
                        <p className="text-justify">
                        Everything in Premium, plus 24/7 access, complimentary fitness assessments, and exclusive member events.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full mt-30 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl mb-2">Perks of Joining:</h2>
                <p>
                When you join IronPulse Fitness, you’re not just getting a gym membership – you’re joining a community. Here’s what you’ll enjoy:
                </p>
            </div>

            <div class="container mx-auto mt-10 mb-10">
                <div class="grid grid-cols-4 gap-2">
                    <div>
                        <p>Free trial session</p>
                    </div>

                    <div>
                        <p>No long-term contracts</p>
                    </div>

                    <div>
                        <p>Access to exclusive member events</p>
                    </div>

                    <div>
                        <p>Supportive community to keep you motivated</p>
                    </div>
                </div>
            </div>

            <div className="w-full text-center mt-30 mb-10">
                <p className="ff-playfair italic text-md md:text-2xl">
                Choose your plan and join the IronPulse family today!
                </p>
            </div>
            <Footer />
        </>
    )
}