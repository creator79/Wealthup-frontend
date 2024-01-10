"use client";
import * as React from "react";

import Link from "next/link";
import Image from "next/image";

interface PageProps {}

const Health: React.FC<PageProps> = () => {

  return (
    <div className="items-stretch bg-gradient-to-r from-[#0A5783] to-[#138792] flex flex-col justify-center">
      <span className="flex w-full flex-col pt-12 px-5 max-md:max-w-full">
        <div className="text-white text-7xl font-semibold self-center mt-14 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Check your financial health
        </div>
        <div className="text-white text-center text-3xl font-[275] leading-10 self-center max-w-[599px] mt-5 max-md:max-w-full">
          Use WeathoMeter to get a free report
          <br />
          card for your finances- within minutes!{" "}
        </div>
        <div className="self-center w-full max-w-[1234px] mt-10 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch my-auto max-md:mt-10">
                <span className="flex items-stretch justify-between gap-1.5">
                  <Image
                    loading="lazy"
                    width={100}
                    height={100}
                    alt="None"
                    src="/Images/save.png"
                    className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-white text-3xl font-semibold grow shrink basis-auto mt-2 self-start">
                    Expected Retirement Age
                  </div>
                </span>
                <div className="bg-white w-[363px] shrink-0 max-w-full h-[3px] mt-5 self-end" />
                <span className="flex items-stretch justify-between gap-2.5 mt-6">
                  <Image
                    loading="lazy"
                    width={100}
                    height={100}
                    src="/Images/save.png"
                    alt="None"
                 
                    className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-white text-3xl font-semibold self-center grow shrink basis-auto my-auto">
                    Identify Mistakes
                  </div>
                </span>
                <div className="bg-white w-[363px] shrink-0 max-w-full h-[3px] mt-5 self-end" />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[65%] ml-5 max-md:w-full max-md:ml-0">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-start max-md:max-w-full">
<Link href="/Code">
                      <button className="text-white text-3xl font-semibold whitespace-nowrap shadow-sm bg-orange-500 justify-center items-stretch ml-11 px-11 py-6 rounded-[32px] max-md:ml-2.5 max-md:px-5">
                        Get Started
                      </button>
</Link>

                      
                      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[515px] w-full mt-1.5 px-20 py-12 items-end max-md:max-w-full max-md:px-5">
                        <Image
                          loading="lazy"
                          width={1000}
                          height={1000}
                          src='/Images/phone.png'
                          alt="None"
                     
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <Image
                          loading="lazy"
                          width={100}
                          height={100}
                          alt="None"
                        src="/Images/save.png"
                          className="aspect-square object-contain object-center w-[41px] overflow-hidden max-w-full mr-4 mt-14 max-md:mr-2.5 max-md:mt-10"
                        />
                        <Image
                          loading="lazy"
                          width={100}
                          height={100}
                          alt="None"
                         src="/Images/save.png"
                          className="aspect-square object-contain object-center w-[41px] overflow-hidden max-w-full mr-4 mt-12 mb-44 max-md:mr-2.5 max-md:my-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
                    <span className="flex flex-col items-stretch mt-48 max-md:mt-10">
                      <div className="text-white text-3xl font-semibold">
                        Personalised Road Map
                      </div>
                      <div className="text-white text-3xl font-semibold mt-14 max-md:mt-10">
                        Tips To Improve
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col ml-5 fill-sky-800 overflow-hidden self-stretch relative flex min-h-[790px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <Image
            loading="lazy"
            width={100}
            height={100}
            alt="None"
            src="/Images/Wave.svg"
            className="absolute h-full w-full object-cover object-center ml-2 "
          />

          <div className="relative flex w-[956px] max-w-full flex-col items-stretch mt-[15rem] mb-3.5 max-md:mt-10">
            <div className="text-white text-6xl font-bold max-w-[414px] mx-auto text-center mt-10">
              How it works?
            </div>

            <Image
              loading="lazy"
              width={1000}
              height={1000}
              alt="None"
             src="/Images/Three.png"
              className="aspect-[1.78] object-contain object-center w-full overflow-hidden max-w-[884px] mx-auto text-center mt-[-3rem] "
            />
               <span className="flex justify-between gap-20 items-start max-md:max-w-full max-md:flex-wrap ml-20 mt-[-10rem] ">
              <div className="text-white text-center text-3xl  flex-1 mr-5 font-">
                Answer few
                <br />
                questions
              </div>
              <div className="text-white text-center text-3xl tracking-widest">
                Register using
                <br />
                phone and OTP
              </div>
              <div className="text-white text-center text-3xl tracking-widest grow shrink basis-auto">
                Get report and
                <br />
                personal roadmap
              </div>
            </span>
  
            <button className="text-white text-3xl font-semibold whitespace-nowrap shadow-sm bg-orange-500 self-center justify-center items-stretch mt-20 px-11 py-6 rounded-[32px] max-md:mt-10 max-md:px-5">
              Get Started
            </button>
          </div>
        </div>
      </span>
    </div>
  );
}


export default Health;