import gsap from "gsap";
import React from "react";

const CommonHero = ({ bg, title, subTitle, arrow }) => {
    document.title = `Contact → Future Goals`;
    gsap.to;
    return (
        <div className="">
            <div
                style={{ backgroundImage: `url(${bg})` }}
                className="bg-cover bg-center-center bg-no-repeat w-full relative"
            >
                {/* overlay */}
                <div className="overlay h-full w-full absolute bottom-0 left-0 bg-gradient-to-b from-[#F1EAE210] to-[#1E1E1E] via-[#F1EAE210]" />
                {/* content */}
                <div className="flex flex-col gap-0 sm:gap-4 justify-center items-center pt-44 sm:pt-44 md:pt-50 lg:pt-58 xl:pt-62 2xl:pt-64 pb-14 sm:pb-38 md:pb-38 lg:pb-42 xl:pb-46 2xl:pb-50 text-center relative z-20 px-4 sm:px-5 md:px-8 lg:px-10 mx-auto max-w-[1700px]">
                    {title == null ? null : (
                        <p
                            className={`text-[#F1EAE2] bg-[#1E1E1E] font-PoppinsBold uppercase px-4 pb-1 pt-1 sm:pt-2 inline-block rounded-[5px] md:rounded-[10px] mb-5 sm:mb-2 text-[10px] md:text-[12px] lg:text-sm xl:text-base`}
                        >
                            {title}
                        </p>
                    )}
                    <h4 className="text-[#F1EAE2] text-[9vw] leading-[9.5vw] sm:text-[55px] md:text-[60px] lg:text-[72px] xl:text-[78px] 2xl:text-[85px] sm:leading-[110%] font-BriceBold uppercase mt-1 md:mt-4 lg:mt-5 xl:mt-14">
                        {subTitle}
                    </h4>
                    {/* <button className="absolute top-1/2 left-[1.5vw] sm:left-[15px] lg:left-[20px] xl:left-[25px] -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 xl:w-15 xl:h-15 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden group cursor-pointer">
                        <span className="block w-3.5 sm:w-4 md:w-auto">
                            <img
                                className="z-20 w-full relative transition-all duration-300 ease-in-out group-hover:invert rotate-180"
                                src="/Images/Icons/arrow.svg"
                                alt="arrow Icon"
                            />
                        </span>
                        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0"></span>
                    </button>
                    <button className="absolute top-1/2 right-[1.5vw] sm:right-[15px] lg:right-[20px] xl:right-[25px] -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 xl:w-15 xl:h-15 bg-white rounded-full flex items-center justify-center border-[2px] overflow-hidden group cursor-pointer">
                        <span className="block w-3.5 sm:w-4 md:w-auto">
                            <img
                                className="z-20 w-full relative transition-all duration-300 ease-in-out group-hover:invert"
                                src="/Images/Icons/arrow.svg"
                                alt="arrow Icon"
                            />
                        </span>
                        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0"></span>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default CommonHero;
