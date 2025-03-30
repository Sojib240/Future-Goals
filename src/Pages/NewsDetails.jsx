import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewsContext } from "../Utils/Context";
import CommonHero from "../Components/Common/CommonHero";

const NewsDetails = () => {
    const [news] = useContext(NewsContext);
    const { slug } = useParams();
    const [newsDetails, setNewsDetails] = useState();

    useEffect(() => {
        const newsDet =
            news &&
            news.filter((ne) => {
                return ne.slug === slug;
            });
        setNewsDetails(newsDet);
    }, [news, slug]);
    console.log(newsDetails);

    return (
        newsDetails &&
        newsDetails.map(({ title, publishedDate, image, pageContent }) => {
            return (
                <div>
                    <CommonHero
                        bg={`${image}`}
                        title={`${publishedDate}`}
                        subTitle={`${title}`}
                        arrow={true}
                    />
                    <div className="w-full bg-[#1E1E1E] sm:px-5 md:px-8 lg:px-10 xl:px-10">
                        <div className="max-w-[1440px] w-full bg-[#F1EAE2] rounded-3xl mx-auto px-6 sm:px-10 md:px-18 lg:px-24 xl:px-32 py-16 sm:py-20 md:py-24 lg:py-32 text-[15px] sm:text-[17px] text-[#1E1E1E] font-PoppinsRegular  leading-[25px] sm:leading-[27px] -translate-y-0 sm:-translate-y-[100px]">
                            {/* <div className="w-full">
                                <div className="">
                                    <p className="font-BriceBold text-[22px] sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[38px] leading-[135%] lg:leading-[125%] uppercase">
                                        From fishing nets to football goals:
                                        Ajax, Sandals Resorts International and
                                        its Foundation join forces to facilitate
                                        youth football in the Caribbean
                                    </p>
                                    <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 font-BriceSemiBold text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-[135%] lg:leading-[130%] uppercase">
                                        Inspiring the next generation with life
                                        and football skills, starting in Curaçao
                                    </p>
                                    <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                        May 19th, Willemstad - Children in
                                        Curaçao are celebrating new goals, as
                                        AFC Ajax and Sandals Resorts
                                        International (SRI), together with its
                                        philanthropic arm, the Sandals
                                        Foundation, launch an island-wide
                                        program that creatively turns fishing
                                        nets sourced from the ocean and plastic
                                        waste into colorful football goals.
                                        Through the new{" "}
                                        <span className="font-PoppinsBold">
                                            Future Goals
                                        </span>{" "}
                                        program, primary schools across the
                                        Dutch Caribbean island are set to
                                        receive new football equipment,
                                        accompanied by a sports program designed
                                        by the professional football team. With
                                        a common objective of empowering
                                        children through the game of football
                                        and providing the resources to play, the
                                        program marks the beginning of a
                                        collaboration between AFC Ajax and SRI,
                                        which is opening a new resort on the
                                        island.
                                    </div>
                                </div>
                                <div className="mt-8 sm:mt-10 md:mt-18 lg:mt-24">
                                    <div className="w-full overflow-hidden rounded-xl md:rounded-2xl aspect-[3/2] mt-8 sm:mt-10 md:mt-18 lg:mt-24 relative group cursor-pointer">
                                        <img
                                            className="w-full h-full object-cover"
                                            src="/Images/News/9-1440x-q72.jpg"
                                            alt=""
                                        />
                                        <div className="overlay h-full w-full absolute bottom-0 left-0 bg-[#1E1E1E40] group-hover:opacity-100 opacity-0 transition-all duration-500"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 xl:w-18 xl:h-18 bg-[#F1EAE2] rounded-full flex items-center justify-center border-[2px] overflow-hidden">
                                            <img
                                                className="z-20 w-2 sm:w-3 md:w-auto relative transition-all duration-300 ease-in-out group-hover:invert"
                                                src="/Images/Icons/play.svg"
                                                alt="Play Icon"
                                            />
                                            <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-22 h-22 bg-[#1E1E1E] scale-0 group-hover:scale-125 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0"></span>
                                        </div>
                                    </div>
                                    <p className="mt-8 sm:mt-10 md:mt-18 lg:mt-24  font-BriceSemiBold text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-[135%] lg:leading-[130%] uppercase">
                                        THE POWER OF FOOTBALL
                                    </p>
                                    <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                        Future Goals is a movement to encourage
                                        children in Curaçao to play and enjoy
                                        football with sustainably produced
                                        resources. Starting with the proper
                                        equipment – goals and balls – the
                                        program will be further developed based
                                        on the needs of each respective island,
                                        with the ultimate goal to scale the
                                        program throughout the Caribbean. In
                                        Curaçao, Ajax and Sandals Resorts will
                                        work to outfit all primary schools
                                        across the island with Future Goals,
                                        complemented by a curriculum designed by
                                        AFC Ajax coaches. The eight-week program
                                        will focus on the power of football as a
                                        vehicle to equip children with life
                                        skills, while growing their awareness of
                                        the importance of taking care of their
                                        communities, precious islands and their
                                        natural resources. Future Coaches, local
                                        youth trained by Ajax coaches, will
                                        organize and teach the program, with the
                                        curriculum culminating in an islandwide
                                        football tournament where all
                                        participating schools compete.
                                    </p>
                                    <p className="mt-8 sm:mt-10 md:mt-18 lg:mt-24  font-BriceSemiBold text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-[135%] lg:leading-[130%] uppercase">
                                        STAYING LOCAL: CREATING OPPORTUNITY FOR
                                        THE COMMUNITY
                                    </p>
                                    <p className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                        Ensuring the Future Goals program
                                        fulfills its commitment to the island’s
                                        locals and workforce, the program taps
                                        into Curaçao based plastic recycling
                                        company, Limpi, which is in charge of
                                        manufacturing the goals from fishing
                                        nets sourced from the ocean and plastic
                                        waste. Additionally, the local youth
                                        trained by Ajax coaches, the Future
                                        Coaches, are recruited from the island
                                        by Favela Street, a foundation that aims
                                        to turn youngsters into role models by
                                        the game of football, and through a
                                        special education curriculum.
                                    </p>
                                    <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 italic">
                                        <span className="font-PoppinsBold not-italic">
                                            Edwin van der Sar, CEO AFC Ajax:
                                        </span>{" "}
                                        “Ajax is on a mission to impact the
                                        future of football on a global level.
                                        This starts with the youth – our next
                                        generation. That is why we do everything
                                        in our power to inspire future
                                        generations. Together with Sandals
                                        Resorts we are eager to facilitate
                                        impactful football programs for children
                                        in Curaçao and the rest of the
                                        Caribbean. Starting here at MGR.
                                        Niewindt College in Curaçao.”
                                    </div>
                                    <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 italic">
                                        <span className="font-PoppinsBold not-italic">
                                            Heidi Clarke, Executive Director of
                                            the Sandals Foundation:
                                        </span>{" "}
                                        ‘’Future Goals brilliantly encapsulates
                                        Sandals’ unwavering commitment to
                                        empower our islands in the Caribbean
                                        through our philanthropic arm, the
                                        Sandals Foundation, and our core pillars
                                        of education, environment and community.
                                        Enveloping ourselves in the destination
                                        was part of the blueprint as we rolled
                                        out the plans for Sandals Royal Curaçao
                                        – a new island for Sandals and a new
                                        opportunity to expand our impact — and
                                        this one-of-a-kind partnership with Ajax
                                        is a sign of our promise to generations
                                        to come.”
                                    </div>
                                    <p className="mt-8 sm:mt-10 md:mt-18 lg:mt-24  font-BriceSemiBold text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-[135%] lg:leading-[130%] uppercase">CHANGING THE GAME, ONE SCHOOL AT A TIME</p>
                                    <div className="italic mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                        <span className="not-italic">The first Future Goals recipient, Jeanne Hellburg, Head Principal at primary school MGR. Niewindt College, said:</span>
                                        You truly see and feel what football does for the kids; you give them a ball and a goal, and nothing else matters anymore. Future Goals is a real gift to us and the children.”
                                    </div>
                                    <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">To donate, visit the Sandals Foundation page: <a className="underline italic" href="https://sandalsfoundation.org/donation" target="_blank">sandalsfoundation.org/donation</a></div>
                                </div>
                            </div> */}
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: pageContent,
                                }}
                            />
                        </div>
                    </div>
                    <div className="bg-[#1E1E1E] pt-16 sm:pt-0 pb-20 sm:pb-20 md:pb-24 lg:pb-28 flex flex-col gap-2 lg:gap-3 xl:gap-4 sm:flex-row justify-center px-5 md:px-8 lg:px-10 xl:px-10">
                        <button className="group border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-[#1E1E1E] text-[#1E1E1E] border-[#1E1E1E] relative overflow-hidden cursor-pointer w-full sm:w-auto">
                            <span className="mr-1 group-hover:text-[#1E1E1E] text-[#F1EAE2] z-20 relative transition-colors duration-300 custom-transition">
                                ←
                            </span>
                            <span className="group-hover:text-[#1E1E1E] text-[#F1EAE2] z-20 relative transition-colors custom-transition">
                                Previous Article
                            </span>

                            <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-52 h-80 sm:h-52 lg:w-46 lg:h-46 bg-[#F1EAE2] scale-0 group-hover:scale-200 lg:group-hover:scale-150 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                        </button>
                        <button className="group border-[2px] rounded-lg py-3 px-6 font-BriceSemiBold text-sm xl:text-lg uppercase bg-[#F1EAE2] text-[#1E1E1E] border-[#F1EAE2] relative overflow-hidden cursor-pointer w-full sm:w-auto">
                            <span className="group-hover:text-[#F1EAE2] z-20 relative transition-colors custom-transition">
                                Next Article
                            </span>
                            <span className="ml-1 group-hover:text-[#F1EAE2] z-20 relative transition-colors duration-300 custom-transition">
                                →
                            </span>
                            <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-52 h-80 sm:h-52 lg:w-44 lg:h-44 bg-black scale-0 group-hover:scale-200 lg:group-hover:scale-150 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                        </button>
                    </div>
                </div>
            );
        })
    );
};

export default NewsDetails;
