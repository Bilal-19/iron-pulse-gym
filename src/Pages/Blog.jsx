import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Blog() {
    return (
        <>
            <Header />

            <div className="bg-[url(/blog-bg.jpg)] bg-no-repeat w-full h-50 md:h-100 bg-cover flex flex-col justify-center items-center">
                <h1 className="m-5 md:m-0 w-full text-center text-gray-100 text-3xl md:text-5xl p-5 font-semibold">Blogs</h1>
                <p className="ff-playfair italic text-gray-100 text-xl md:text-3xl text-center mx-3 md:m-0">
                Stay updated with our latest fitness tips and stories. Check out our blog!
                </p>
            </div>

            <div className="w-full mt-30 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl mb-2">Featured Articles:</h2>
                <p>
                    Stay informed and inspired with our latest fitness tips, stories, and insights. Here are some of our most popular articles:
                </p>
            </div>

            <div class="container mx-auto mt-30 mb-30">
                <div class="grid md:grid-cols-2 gap-20">
                    <div className="mx-4 md:m-0">
                        <img src="/Gym-Fitness-Motivation-Tips.png" alt="Gym-Fitness-Motivation-Tips" className="w-full rounded-lg"/>
                        <h3 className="font-medium text-xl md:text-2xl">5 Tips to Stay Motivated on Your Fitness Journey</h3>
                        <p className="text-justify">
                            Struggling to stay on track? Here are five practical tips to keep you motivated and focused on your goals.
                        </p>
                    </div>

                    <div className="mx-4 md:m-0">
                    <img src="/women-strength-training.png" alt="women-strength-training" className="w-full rounded-lg"/>
                        <h3 className="font-medium text-2xl">The Benefits of Strength Training for Women</h3>
                        <p className="text-justify">
                        Strength training isn’t just for men. Discover how lifting weights can transform your body and boost your confidence.                        </p>
                    </div>

                    <div className="mx-4 md:m-0">
                    <img src="/fuel-body-optimal-performance.png" alt="fuel-body-optimal-performance" className="w-full rounded-lg"/>
                        <h3 className="font-medium text-2xl">How to Fuel Your Body for Optimal Performance</h3>
                        <p className="text-justify">
                        Learn how to eat for energy, recovery, and results with our guide to proper nutrition.
                        </p>
                    </div>

                    <div className="mx-4 md:m-0">
                    <img src="/rest-days-workout-important.png" alt="rest-days-workout-important" className="w-full rounded-lg"/>
                        <h3 className="font-medium text-2xl">Recovery 101: Why Rest Days Are Just as Important as Workouts</h3>
                        <p className="text-justify">
                        Rest days aren’t lazy – they’re essential. Find out why recovery is key to achieving your fitness goals
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}