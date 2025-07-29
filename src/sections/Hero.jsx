import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";
import Spline from '@splinetool/react-spline';
import AppShowcase from "./ShowcaseSection";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-visible">

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="textblack flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
            <span className="textblack mb-6 relative top-[-60px]">I'm Charlotte Lew,</span>
              <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
            </div>

            <p className="text-gray-500 md:text-xl relative z-10 pointer-events-none">
              CS + Design @UPenn
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="work"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout w-[70%] h-[900px] -mt-50 translate-x-[80px] transform">
          <Spline
        scene="https://prod.spline.design/KloznGYeeIggTG-l/scene.splinecode" 
      />
{/* Fade Left */}
</div>
        </figure>
      </div>

      <AppShowcase />
    </section>
  );
};

export default Hero;
