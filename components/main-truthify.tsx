"use client";

import Image from "next/image";
import Logo from "@/public/images/logo-no-border-center-800.png";
import React from "react";
import YouTube from "react-youtube";
import Link from "next/link";

export default function Truthify() {
  const videoOps = {
    height: "472",
    width: "840",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
     
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
       
          <div className="text-center">
            <Image
              className="mx-auto pb-12 md:pb-16"
              data-aos="zoom-y-out"
              src={Logo}
              width={800}
              priority
              alt="Hero"
            />
          </div>
          <div className="text-center pb-12 md:pb-16">

            <div className="max-w-3xl mx-auto">
              <div
                className="max-w-xs mx-auto sm:max-w-none mb-4 sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Link
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="/demo"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pb-12 md:pb-16">
            <h4
              className="text-3xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-3"
              data-aos="zoom-y-out"
            >
              Watch Truthify Live
            </h4>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <YouTube videoId="" opts={videoOps} />{/** add videoId here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
