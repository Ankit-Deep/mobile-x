import React from "react";
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
import { Link } from "react-router-dom";
import { Container, BestSeller, Reviews } from "@/components";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <main className="min-h-screen w-full">
        {/* Hero Section starts */}
        <section className="h-[50%] w-full py-12 md:py-28 lg:py-28 bg-[#1A1B2D] overflow-hidden">
          <Container>
            <div className=" flex flex-col md:flex-row items-center justify-between gap-5 lg:gap-12">
              {/* Left column - CTA */}
              <div className=" w-full md:w-1/3 flex flex-col items-center justify-center gap-4 md:gap-5">
                <p
                  className="text-[#3144C5] font-bold text-sm md:text-base lg:text-lg tracking-wide"
                  aria-label="Promotional banner"
                >
                  CREATING A FEATURE NOW!
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold flex flex-col items-center">
                  <span className="block">Best</span>
                  <span className="block">Laptops!</span>
                </h1>

                <p className="text-white text-sm md:text-base max-w-md">
                  Our extensive collection for everyone's computing needs!
                </p>

                <Link href="/shop">
                  <span className="inline-block bg-[#495AD6] hover:bg-[#3A49C5] transition-colors text-white px-8 py-3 text-sm font-semibold rounded-md cursor-pointer mt-2">
                    SHOP NOW
                  </span>
                </Link>
              </div>

              {/* Middle column - Product image */}
              <div className=" w-full md:w-1/3 flex items-center justify-center md:mb-0 mb-10">
                <div className="relative w-full h-48 ">
                  <img
                    src="/assets/dell_laptop-removebg-preview.png"
                    alt="Dell laptop promotional image"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              {/* Right column - Price info */}
              <div className="w-full md:w-1/3 flex flex-col items-center text-center gap-4 md:gap-6 md:mt-0 mt-5">
                <h2 className="text-white text-lg md:text-xl font-semibold">
                  Great deals every weekend!
                </h2>
                <hr className="w-16 md:w-20 border-[#495AD6] border-2" />
                <p className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
                  From $699
                </p>
              </div>
            </div>
          </Container>
        </section>
        {/* Hero Section ends */}

        {/* Mac, Big Sale, Computers Section */}
        <section className="w-full h-[40%]  bg-gray-50">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className="bg-[#F0F5FF] border h-full  w-full md:w-1/3 flex flex-col items-center justify-between gap-4 md:gap-36  py-5 ">
              <div className=" w-full h-fit  flex flex-col gap-1 px-2">
                <h2 className="text-3xl font-bold">Mac Desktops</h2>
                <p className="text-gray-700 ">Quality products!</p>
                <button className="p-2 bg-[#495AD6] hover:bg-[#3A49C5] rounded-md text-white w-fit">
                  <FaArrowRight />
                </button>
              </div>

              <img
                src="../../public/assets/mac img.png"
                alt=""
                className="w-[90%]"
              />
            </div>

            <div className="bg-[#495AD9] border w-full md:w-1/3 flex flex-col items-center justify-center gap-4 md:gap-5 py-5 md:py-0">
              <div className="flex flex-col gap-1 items-center text-white">
                <h2 className="text-xl font-bold">Up to 30% </h2>
                <p className="text-4xl font-bold">BIG SALE</p>

                <p className="text-sm font-semibold">Get new Smartphone!</p>
                <p className="px-5 py-2 rounded-sm bg-[#FF3057] text-xs font-semibold">
                  FREE SHIPPING
                </p>
              </div>

              <img
                src="../../public/assets/2_smartphones-removebg-preview.png"
                alt=""
                className="w-[80%]"
              />
            </div>

            <div className="bg-[#F0F5FF] border h-full  w-full md:w-1/3 flex flex-col items-center justify-center gap-4 md:gap-5 py-5 ">
              <div className=" w-full flex flex-col gap-1 px-2">
                <h2 className="text-3xl font-bold">Computers</h2>
                <p className="text-gray-700 ">Limited time offer!</p>
                <button className="p-2 bg-[#495AD6] hover:bg-[#3A49C5] rounded-md text-white w-fit">
                  <FaArrowRight />
                </button>
              </div>

              <img
                src="../../public/assets/cpu_img-removebg-preview.png"
                alt=""
                className="w-[80%]"
              />
            </div>
          </div>
        </section>

        {/* Tablet Section */}
        <section className="w-full bg-[#190E36] py-5 ">
          <Container>
            <div className="flex flex-row gap-5 justify-between w-[100%] h-full ">
              <div className=" w-[60%] ">
                <img
                  src="../../public/assets/tab.png"
                  alt=""
                  className="md:px-28 md:w-fit w-[80%]  "
                />
              </div>

              <div className=" w-[40%] text-white flex flex-col items-start md:pt20 lg:pt-24 gap-7 ">
                <h2 className="text-[#3144C5] text-sm font-bold ">
                  ALL NEW TREND TABLETS
                </h2>

                <div className="flex flex-col gap-5 md:text-6xl text-2xl font-bold ">
                  <span>Top rated</span>
                  <span>tablets!</span>
                </div>

                <p className="text-base font-semibold">
                  Doing it all, all new ways.
                </p>

                <button className="bg-[#495AD9] text-sm font-semibold px-5 py-2 rounded ">
                  SHOP NOW
                </button>
              </div>
            </div>
          </Container>
        </section>

        <BestSeller />

        <section className="w-full flex md:flex-row flex-col ">
          {/* left div */}
          <div className="md:w-[50%]  h-full bg-[#F0F5FF]  relative md:top-0  top-80 ">
            <img
              src="../../public/assets/headphones-removebg-preview.png"
              alt=""
              className="z-0 w-[50%] absolute top-20 right-5  "
            />

            <div className="z-10 absolute top-5 left-5 flex flex-col gap-2 items-start ">
              <p className="text-[#495AD9] font-bold text-xs ">
                GREAT HEADPHONES
              </p>

              <h2 className="text-5xl flex flex-col font-bold">
                <span>Find your </span>
                <span>sound!</span>
              </h2>

              <button className="px-5 py-2 text-xs font-semibold rounded bg-[#495AD9] text-white ">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* right div */}
          <div className="md:w-[50%]  h-full bg-[#F0F5FF]  relative ">
            <img
              src="../../public/assets/smartwatch-removebg-preview.png"
              alt=""
              className="z-0 w-[50%] absolute top-20 right-5  "
            />

            <div className="z-10 absolute top-5 left-5 flex flex-col gap-2 items-start ">
              <p className="text-[#495AD9] font-bold text-xs ">
                BEST SMARTWATCH 2020
              </p>

              <h2 className="text-5xl flex flex-col font-bold">
                <span>Smartwatch  </span>
                <span>for you!</span>
              </h2>

              <button className="px-5 py-2 text-xs font-semibold rounded bg-white text-black  ">
                SHOP NOW
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
