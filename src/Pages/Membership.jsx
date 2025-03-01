import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Membership() {
    return (
        <>
            <Header />

            <div className="bg-[url(/membership.webp)] bg-no-repeat w-full h-80 md:h-150 bg-cover flex flex-col items-center justify-center">
                <h1 className="m-5 md:m-0 w-full text-center text-gray-100 text-2xl md:text-5xl p-5 font-semibold slideFromTop">
                    Membership
                </h1>
                <div className="backdrop-blur-xl p-5 rounded-md slideFromRight bg-gray-500/70">
                    <p className="ff-playfair italic text-gray-100 text-md md:text-2xl text-center mx-3 md:m-0">
                        Choose your plan and join the IronPulse family today!
                    </p>
                </div>
            </div>

            <div className="w-full mt-10 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl mb-2 slideFromRight">Membership Plans:</h2>
                <p className="m-3 md:m-0 slideFromLeft">
                    We offer flexible membership plans to fit your lifestyle and budget. Here’s what you can choose from:
                </p>
            </div>

            <div class="container mx-auto mt-10 mb-10">
                <div class="grid md:grid-cols-3 gap-20">
                    <div className="m-3 md:m-0">
                        <img src="/basic.png" alt="basic-plan" className="size-16 mx-auto" />
                        <h3 className="font-medium text-2xl text-center mb-5">Basic Plan</h3>
                        <ul className="li-checkmark">
                            <li>Access to gym facilities during off-peak hours</li>
                            <li>Use of state-of-the-art equipment</li>
                            <li>Complimentary fitness assessment</li>
                            <li>No long-term contracts</li>
                            <li>Supportive community environment</li>
                        </ul>
                    </div>

                    <div className="m-3 md:m-0">
                        <img src="/premium.png" alt="premium-plan" className="size-16 mx-auto" />
                        <h3 className="font-medium text-2xl text-center mb-5">Premium Plan</h3>
                        <ul className="li-checkmark">
                            <li>Unlimited access to all gym facilities</li>
                            <li>Access to group classes (yoga, HIIT, spin, etc.)</li>
                            <li>Discounts on personal training sessions</li>
                            <li>Complimentary fitness assessment</li>
                            <li>No long-term contracts</li>
                            <li>Exclusive member events</li>
                        </ul>
                    </div>

                    <div className="m-3 md:m-0">
                        <img src="/elite.png" alt="elite-plan" className="size-16 mx-auto" />
                        <h3 className="font-medium text-2xl text-center mb-5">Elite Plan</h3>
                        <ul className="li-checkmark">
                            <li>24/7 access to gym facilities</li>
                            <li>Unlimited group classes and personal training discounts</li>
                            <li>Complimentary fitness assessment and progress tracking</li>
                            <li>Priority booking for classes and events</li>
                            <li>Exclusive access to member-only workshops</li>
                            <li>Complimentary recovery sessions (e.g., massage, sauna)</li>
                            <li>No long-term contracts</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-30 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl mb-2 slideFromRight">Perks of Joining:</h2>
                <p className="m-1 md:m-0 slideFromLeft">
                    When you join IronPulse Fitness, you’re not just getting a gym membership – you’re joining a community. Here’s what you’ll enjoy:
                </p>
            </div>

            <div class="container mx-auto mt-10 mb-30">
                <div class="grid md:grid-cols-4 gap-8">
                    <div className="m-3 md:m-0 text-center">
                        <img src="/free.png" alt="free" className="size-12 mx-auto" />
                        <p>Free trial session</p>
                    </div>

                    <div className="m-3 md:m-0 text-center">
                        <img src="/no-contract.png" alt="no-contract" className="size-12 mx-auto" />
                        <p>No long-term contracts</p>
                    </div>

                    <div className="m-3 md:m-0 text-center">
                        <img src="/events.png" alt="events" className="size-12 mx-auto" />
                        <p>Access to exclusive member events</p>
                    </div>

                    <div className="m-3 md:m-0 text-center">
                        <img src="/supported-community.png" alt="supported-community" className="size-12 mx-auto" />
                        <p>Supportive community to keep you motivated</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}