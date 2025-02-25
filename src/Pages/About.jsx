import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function About() {
    return (
        <>
            <Header />

            <div className="bg-[url(/about-bg.jpg)] bg-no-repeat w-full h-80 md:h-100 bg-cover flex flex-col items-center justify-center">
                <h1 className="m-5 md:m-0 w-full text-center text-gray-100 text-3xl md:text-5xl p-5 font-semibold">
                    About
                </h1>
                <p className="ff-playfair italic text-gray-100 text-xl md:text-2xl text-center mx-3 md:m-0">
                    Get to know us better – drop by for a tour or schedule a free consultation!
                </p>
            </div>

            <div class="mx-auto rounded-lg text-white h-120 w-[94%] mt-10 mb-10 bg-[url(/our-story.jpg)] bg-cover bg-no-repeat flex items-center justify-center">
                <div className="w-3/4 md:w-1/2 text-justify">
                    <h2 className="text-4xl font-medium mb-2">Our Story</h2>
                    <p>
                        IronPulse Fitness was born out of a passion for fitness and a belief that
                        everyone deserves access to top-notch training. Founded in 2023 by fitness
                        enthusiasts, we’ve grown into a community of like-minded individuals who
                        thrive on progress and positivity. Our mission is simple: to empower
                        individuals to unlock their full potential through personalized fitness
                        programs, expert guidance, and a supportive environment.
                    </p>
                </div>
            </div>

            <div class="mx-auto rounded-lg text-white h-120 w-[94%] mt-10 mb-10 bg-[url(/mission.jpg)] bg-cover bg-no-repeat flex items-center justify-center">
                <div className="w-3/4 md:w-1/2 text-justify">
                    <h2 className="text-4xl font-medium mb-2">Our Mission</h2>
                    <p>
                        We’re here to help you achieve your fitness goals, no matter where you’re starting from. Whether you’re looking to lose weight, build muscle, or simply live a healthier lifestyle, we’ll provide the tools, knowledge, and motivation you need to succeed.
                    </p>
                </div>
            </div>

            <div className="container mx-auto mt-30 mb-10">
                <h2 className="text-4xl mb-2 font-medium text-center">Meet the Team:</h2>
                <p className="mx-4 md:m-0">
                    Our certified trainers are here to inspire, motivate, and guide you every step of the way. From nutrition advice to workout plans, they’ve got you covered. Get to know the faces behind IronPulse Fitness:
                </p>
            </div>

            <div class="container mx-auto mt-10 mb-30">
                <div class="grid md:grid-cols-3 gap-1">
                    <div className="text-center mb-10 md:mb-0">
                        <img src="/team-member.png" alt="Alex Carter" className="size-24 mx-auto" />
                        <h4 className="text-xl font-medium">Alex Carter</h4>
                        <p>Strength Training Specialist with 10+ years of experience.</p>
                    </div>

                    <div className="text-center mb-10 md:mb-0">
                        <img src="/team-member.png" alt="Maya Patel" className="size-24 mx-auto" />
                        <h4 className="text-xl font-medium">Maya Patel</h4>
                        <p>Yoga and Recovery Coach, passionate about holistic wellness.</p>
                    </div>

                    <div className="text-center mb-10 md:mb-0">
                        <img src="/team-member.png" alt="Chris Johnson" className="size-24 mx-auto" />
                        <h4 className="text-xl font-medium">Chris Johnson</h4>
                        <p>HIIT and Cardio Expert, known for his high-energy classes.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}