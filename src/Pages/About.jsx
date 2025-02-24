import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function About() {
    return (
        <>
            <Header />

            <div class="container mx-auto mt-10 mb-10">
                <div class="grid md:grid-cols-2 gap-24">
                    <div className="m-2 mt-20 md:mt-25">
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

                    <div className="m-2">
                        <img src="./our-story.jpg" alt="our-story" className="rounded-lg h-120 object-cover" />
                    </div>
                </div>
            </div>

            <div class="container mx-auto mt-10 mb-10">
                <div class="grid md:grid-cols-2 gap-24">
                    <div className="m-2">
                        <img src="./mission.jpg" alt="mission" className="rounded-lg h-100 object-cover" />
                    </div>
                    <div className="m-2 mt-20 md:mt-25">
                        <h2 className="text-4xl font-medium mb-2">Our Mission</h2>
                        <p>
                            We’re here to help you achieve your fitness goals, no matter where you’re starting from. Whether you’re looking to lose weight, build muscle, or simply live a healthier lifestyle, we’ll provide the tools, knowledge, and motivation you need to succeed.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-30 mb-10">
                <h2 className="text-4xl mb-2 font-medium text-center">Meet the Team:</h2>
                <p>
                    Our certified trainers are here to inspire, motivate, and guide you every step of the way. From nutrition advice to workout plans, they’ve got you covered. Get to know the faces behind IronPulse Fitness:
                </p>
            </div>

            <div class="container mx-auto mt-10 mb-10">
                <div class="grid md:grid-cols-3 gap-1">
                    <div className="text-center mb-10 md:mb-0">
                        <img src="/team-member.png" alt="Alex Carter" className="size-24 mx-auto"/>
                        <h4 className="text-xl font-medium">Alex Carter</h4>
                        <p>Strength Training Specialist with 10+ years of experience.</p>
                    </div>

                    <div className="text-center mb-10 md:mb-0">
                        <img src="/team-member.png" alt="Maya Patel" className="size-24 mx-auto"/>
                        <h4 className="text-xl font-medium">Maya Patel</h4>
                        <p>Yoga and Recovery Coach, passionate about holistic wellness.</p>
                    </div>

                    <div className="text-center mb-10 md:mb-0">
                        <img src="/team-member.png" alt="Chris Johnson" className="size-24 mx-auto"/>
                        <h4 className="text-xl font-medium">Chris Johnson</h4>
                        <p>HIIT and Cardio Expert, known for his high-energy classes.</p>
                    </div>
                </div>
            </div>

            <div className="w-full text-center mt-30 mb-10">
                <p className="ff-playfair italic text-xl md:text-2xl">
                Get to know us better – drop by for a tour or schedule a free consultation!
                </p>
            </div>

            <Footer />
        </>
    )
}