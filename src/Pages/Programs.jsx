import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Programs() {
    return (
        <>
            <Header />

            <div className="bg-[url(/programs-bg.jpg)] bg-no-repeat w-full h-80 md:h-100 bg-cover flex flex-col items-center justify-center">
                <h1 className="m-5 md:m-0 w-full text-center text-gray-100 text-3xl md:text-5xl p-5 font-semibold">
                Programs           
                </h1>
                <p className="ff-playfair italic text-gray-100 text-xl md:text-2xl text-center mx-3 md:m-0">
                Find the perfect program for your goals. Start your journey today!
                </p>
            </div>

            <div className="container md:mx-auto mt-10 mb-10 text-center">
                <h2 className="text-4xl mb-2 font-medium">Programs Offered:</h2>
                <p className="m-1 md:m-0">
                    At IronPulse Fitness, we offer a variety of programs to suit every fitness level and goal. Here’s what you can expect:
                </p>
            </div>

            <div className="container mx-auto mt-10 mb-20">
                <div className="grid md:grid-cols-3 gap-20 text-justify">
                    <div className="mx-4 md:m-0">
                        <img src="./strength-training.png" alt="strength-training" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl text-center">Strength Training:</h3>
                        <p>
                            Build muscle, increase endurance, and boost your metabolism with our expert-led strength training programs.
                        </p>
                    </div>

                    <div className="mx-4 md:m-0">
                        <img src="./cardio.png" alt="cardio" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl text-center">HIIT & Cardio:</h3>
                        <p>
                            Burn fat, improve cardiovascular health, and push your limits with our high-intensity interval training sessions.
                        </p>
                    </div>

                    <div className="mx-4 md:m-0">
                        <img src="./yoga.png" alt="yoga" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl text-center">Yoga & Recovery:</h3>
                        <p>
                            Balance your body and mind with our yoga classes designed to improve flexibility, reduce stress, and aid recovery.
                        </p>
                    </div>

                    <div className="mx-4 md:m-0">
                        <img src="./personal-trainer.png" alt="personal-trainer" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl text-center">Personal Training:</h3>
                        <p>
                            Get one-on-one attention with a customized plan tailored to your goals. Our trainers are here to help you succeed.
                        </p>
                    </div>

                    <div className="mx-4 md:m-0">
                        <img src="./classes.png" alt="classes" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl text-center">Group Classes:</h3>
                        <p>
                            Join our group classes for a fun, motivating workout experience. From spin classes to boot camps, there’s something for everyone.
                        </p>
                    </div>

                    <div className="mx-4 md:m-0">
                        <img src="./fullbody-workout.png" alt="fullbody-workout" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl text-center">PowerCore Circuit:</h3>
                        <p>
                        A high-energy, full-body workout combining strength, cardio, and core exercises. Perfect for building endurance, burning calories, and maximizing results in every session.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full text-center mt-30 mb-10">
                <p className="ff-playfair italic text-xl md:text-2xl">
                    
                </p>
            </div>
            <Footer />
        </>
    )
}