import React from "react";
import profilePic from "../assets/clew.jpg"; // Update this path as needed

const AboutMe = () => {
  return (
<section id="aboutme" className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20 bg-white">
{/* Left: Circular Image */}
      <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={profilePic}
          alt="Charlotte Lew"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-2xl font-bold mb-2 textgreen">Charlotte Lew</h2>
        <p className="text-gray-600 mb-4">Junior @ University of Pennsylvania</p>
        <p className="text-gray-700">
        I’m an Los Angeles native double majoring in Design and Computer Science. I love everything at the intersection of art and tech — from playful UI/UX to creative, code-driven experiences. I'm passionate about crafting intuitive, impactful solutions that feel as good as they function.

        </p>

        


        <p className="text-gray-700 mt-4">
            Outside of school and work, you'll catch me touring with the Penn Glee Club, playing piano @ Fisher Bennet Hall or picking up a pup cup for my dog at Starbucks!       
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
