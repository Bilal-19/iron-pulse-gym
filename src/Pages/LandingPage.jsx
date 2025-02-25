import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function LandingPage() {
    return (
        <>
            <Header />
            <div className="bg-[url(/HomeImg.jpg)] bg-no-repeat w-full h-60 md:h-100 bg-cover flex flex-col justify-center items-center">
                <h1 className="m-5 md:m-0 w-full text-center text-gray-100 text-3xl md:text-5xl p-5 font-semibold">Welcome to IronPulse Fitness</h1>
                <p className="ff-playfair italic text-gray-100 text-xl md:text-3xl text-center mx-3 md:m-0">
                    Ready to transform? Join IronPulse Fitness today and take the first step toward a stronger, healthier you!
                </p>
            </div>

            <div class="container-fluid mt-10 mb-10 text-justify mx-auto">
                <p className="mx-4 md:m-0">
                    Welcome to IronPulse Fitness - Where Strength Meets Passion. Whether you're taking your first step into fitness or you're a seasoned athlete, we’re here to help you crush your goals and redefine your limits. At IronPulse, we believe fitness is more than just lifting weights – it’s about building confidence, resilience, and a community that supports you every step of the way.
                </p>
            </div>

            <div className="w-full mt-30 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl mb-2">Why Choose Us?</h2>
                <p>
                    At IronPulse Fitness, we're not just a gym - we're a movement. Here's what sets us apart:
                </p>
            </div>

            <div className="container mx-auto mt-10 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                    <div className="m-3 md:m-0 text-justify">
                        <img src="./equipment.png" alt="equipment" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl">State-of-the-Art Equipment:</h3>
                        <p>From cutting-edge cardio machines to free weights and functional training zones, we’ve got everything you need to level up your fitness game.</p>
                    </div>

                    <div className="m-3 md:m-0 text-justify">
                        <img src="./gym-trainer.png" alt="gym-trainer" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl">Expert Trainers:</h3>
                        <p>
                            Our certified trainers are passionate about helping you succeed. Whether you need a personalized plan or just a spotter, they’ve got your back.
                        </p>
                    </div>

                    <div className="m-3 md:m-0 text-justify">
                        <img src="./communities.png" alt="communities" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl">Inclusive Community:</h3>
                        <p>
                            We celebrate every milestone, big or small. Our members are more than just gym-goers – they’re family.
                        </p>
                    </div>

                    <div className="m-3 md:m-0 text-justify">
                        <img src="./flexible-membership.png" alt="flexible-membership" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl">Flexible Memberships:</h3>
                        <p>
                            No long-term contracts, no hidden fees. Just pure fitness freedom.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full mt-30 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl mb-2">Programs Overview</h2>
                <p>
                    Explore our wide range of programs designed to fit your lifestyle and goals:
                </p>
            </div>
            <div className="container mx-auto mt-10 mb-10">
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="m-3 md:m-0 text-justify">
                        <img src="./strength-training.png" alt="strength-training" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl">Strength Training:</h3>
                        <p>
                            Build muscle, increase endurance, and boost your metabolism with our expert-led strength training programs.
                        </p>
                    </div>

                    <div className="m-3 md:m-0 text-justify">
                        <img src="./cardio.png" alt="cardio" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl">HIIT & Cardio:</h3>
                        <p>
                            Burn fat, improve cardiovascular health, and push your limits with our high-intensity interval training sessions.
                        </p>
                    </div>

                    <div className="m-3 md:m-0 text-justify">
                        <img src="./yoga.png" alt="yoga" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl">Yoga & Recovery:</h3>
                        <p>
                            Balance your body and mind with our yoga classes designed to improve flexibility, reduce stress, and aid recovery.
                        </p>
                    </div>

                    <div className="m-3 md:m-0 text-justify">
                        <img src="./personal-trainer.png" alt="personal-trainer" className="size-16 mx-auto" />
                        <h3 className="font-semibold text-xl">Personal Training:</h3>
                        <p>
                            Get one-on-one attention with a customized plan tailored to your goals. Our trainers are here to help you succeed.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full text-center mt-30 mb-10">
                <p className="ff-playfair italic text-md md:text-2xl">
                </p>
            </div>

            <Footer />
        </>
    )
}