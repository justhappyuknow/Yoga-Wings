import React from "react";
import { Parallax } from "react-parallax";
import Image from "../assets/images/hero/guy.png";
import Header from "./Header";

const Hero = () => {
  return (
    <section
      className="min-h-[618px] lg:min-[815px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top"
      id="home"
    >
      <div className="container mx-auto">
       
        <div className="flex flex-col items-center lg:flex-row lg:items-start pt-32">
          <div className="flex-1 lg:mt-12">
            <h1 className="h1 mb-3 lg:mb-[22px]">
              Yoga to <br />
              Release Stress
            </h1>
            <p className="mb-6 lg:mb-12 max-w-[480px] lg:text-lg">
              Yoga is a way of life, rather than a chore. Counteract the stress
              of the modern life by becoming more mindful and compassionate.
            </p>
            <div className="mb-12 space-x-4">
              <button className="btn btn-sm lg:btn-lg btn-orange">Get started</button>
              <button className="btn btn-sm lg:btn-lg text-heading bg-transparent border border-stroke-1 px-4 hover:bg-stroke-3 transition">
                Learn More
              </button>
            </div>
            <div className="w-full bg-circle bg-cover lg:bg-none lg:w-auto">
              <div
                style={{ marginTop: "-30rem" }}
                className="hidden lg:flex flex-1 justify-center lg:justify-end"
              >
                <div className="w-[234px] h-[500px] lg:w-[400px] lg:h-[744px] lg:mt-0">
                  <Parallax
                    className="w-full h-full p-28 lg:p-16"
                    bgImage={Image}
                    bgImageAlt="Loading"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
