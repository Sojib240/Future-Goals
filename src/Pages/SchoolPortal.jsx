import React from "react";
import CommonHero2 from "../Components/Common/CommonHero2";

const SchoolPortal = () => {
    return (
        <div>
            <CommonHero2
                backgroundImage={"/Images/news-1b.jpg"}
                title={"School Portal"}
                subtitle={null}
                bgColor={"bg-[#00000070]"}
                margins={"mt-0"}
                sizes={
                    "text-[#F1EAE2] text-[8.8vw] leading-[10.5vw] sm:text-[44px] md:text-[50px] lg:text-[58px] xl:text-[65px] 2xl:text-[70px] sm:leading-[120%]"
                }
                logo={true}
                paddings={
                    "pt-44 sm:pt-44 md:pt-50 lg:pt-58 xl:pt-62 2xl:pt-64 pb-16 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-23 2xl:pb-26"
                }
            />
            <div className="bg-[#F1EAE2] px-5 md:px-8 lg:px-10 xl:px-10">
                <div className="max-w-[1600px] w-full bg-[#F1EAE2] mx-auto pt-16 pb-20 sm:pt-20 sm:pb-28 md:py-24 lg:py-32">
                    <div className="flex md:flex-row flex-col items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24">
                        <div className="w-full md:w-[52.5%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
                            <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/00-about-future-goals.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-[47.5%]">
                            <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8">
                                01
                            </p>
                            <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-BriceSemiBold uppercase leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px]">
                            About Future Goals
                            </h4>
                            <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                            Future Goals is a movement to encourage the next generation to play football. The program, which creatively turns plastic waste and fishing nets sourced from the ocean into colorful football goals, symbolizes today’s fun and tomorrow’s opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col-reverse items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
                        <div className="w-full md:w-[47.5%]">
                            <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8">
                                02
                            </p>
                            <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-BriceSemiBold uppercase leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px]">
                            About the program
                            </h4>
                            <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                            The program will focus on the power of football as a vehicle to equip children with life skills, while growing their awareness of the importance of taking care of their communities and the natural resources of their islands.
                            </p>
                        </div>
                        <div className="w-full md:w-[52.5%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
                            <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/onenil-presseventajaxxsandals (2).jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
                        <div className="w-full md:w-[52.5%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
                            <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/onenil-presseventajaxxxsandals (2).jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-[47.5%]">
                            <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8">
                                03
                            </p>
                            <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-BriceSemiBold uppercase leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px]">
                            How it works
                            </h4>
                            <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                            Primary schools in Curaçao have the opportunity to participate in an 8-week program taught by local Future Coaches – who are trained by Ajax coaches - concluding with an islandwide tournament.
                            </p>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col-reverse items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
                        <div className="w-full md:w-[47.5%]">
                            <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8">
                                04
                            </p>
                            <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-BriceSemiBold uppercase leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px]">
                            Good to know
                            </h4>
                            <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                            All participating schools receive 2 Future Goals, 14 adidas balls and at least two Future Coaches, who will lead the lessons within the eight-week program designed by Ajax coaches.
                            </p>
                        </div>
                        <div className="w-full md:w-[52.5%] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
                            <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/onenil-presseventajaxxxsandals.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col items-center gap-5 md:gap-8 lg:gap-13 xl:gap-15 2xl:gap-24 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
                        <div className="w-full md:w-[52.5%]  overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl relative">
                            <div className="rounded-lg overflow-hidden w-full aspect-[3/2] ">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Images/onenil-presseventajaxxsandals.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-[47.5%]">
                            <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-BriceRegular  mb-3 lg:mb-5 2xl:mb-8">
                                05
                            </p>
                            <h4 className="text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-BriceSemiBold uppercase leading-[30px] lg:leading-[36px] xl:leading-[48px] 2xl:leading-[60px]">
                            Welcome to Future Goals
                            </h4>
                            <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-PoppinsRegular mt-1 xl:mt-4">
                            Let the fun begin! Get started by enrolling your school today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolPortal;
