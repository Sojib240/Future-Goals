import gsap from "gsap";
import React from "react";

const CommonHero = ({ bg, title, subTitle }) => {
    document.title = `Contact → Future Goals`;
    gsap.to
    return (
        <div className="">
            <div
                style={{ backgroundImage: `url(${bg})` }}
                className="bg-cover bg-center-top bg-no-repeat w-full relative"
            >
                {/* overlay */}
                <div className="overlay h-full w-full absolute bottom-0 left-0 bg-gradient-to-b from-[#F1EAE210] to-[#1E1E1E] via-[#F1EAE210]"/>
                {/* content */}
                <div className="flex flex-col gap-4 justify-center items-center pt-48 sm:pt-48 md:pt-52 lg:pt-54 xl:pt-60 pb-[8vw] text-center sm:pb-10 relative z-20">
                    <p
                        className={`text-[#F1EAE2] bg-[#1E1E1E] font-PoppinsBold uppercase px-4 pb-1 pt-1 sm:pt-2 inline-block rounded-[5px] md:rounded-[10px] mb-5 sm:mb-2 text-[10px] md:text-[12px] lg:text-sm xl:text-base ${
                            title == null ? "hidden" : "block"
                        }`}
                    >
                        {title}
                    </p>
                    <h4 className="text-[#F1EAE2] text-[13vw] leading-[13.5vw] sm:text-[55px] md:text-[60px] lg:text-[80px] xl:text-[90px] font-BriceBold uppercase">
                        {subTitle}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default CommonHero;
