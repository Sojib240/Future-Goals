import React from "react";

const CommonHero2 = ({
    backgroundImage,
    title,
    subtitle,
    bgColor,
    margins,
    sizes,
    logo,
    paddings,
}) => {
    return (
        <div className="bg-[#F1EAE2] relative">
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
                className="bg-cover bg-center bg-no-repeat w-full relative rounded-b-3xl lg:rounded-b-[40px] overflow-hidden"
            >
                {/* overlay */}
                <div
                    className={`overlay h-full w-full absolute bottom-0 left-0 ${bgColor} pointer-events-none select-none z-10`}
                />
                {/* content */}
                <div className={`flex flex-col gap-4 justify-center items-center ${paddings} text-center relative z-20 px-5 md:px-8 lg:px-10 xl:px-10 max-w-[1700px] mx-auto`}>
                    <h4
                        className={`text-[#F1EAE2] ${sizes} font-BriceSemiBold uppercase`}
                    >
                        {title}
                    </h4>
                    {subtitle != null && (
                        <p
                            className={`text-[#F1EAE2] font-BriceRegular mt-2 sm:mt-0 text-sm md:text-base lg:text-lg xl:text-xl`}
                        >
                            {subtitle}
                        </p>
                    )}
                    {logo != null && (
                        <div className={`flex items-center gap-6 ${margins}`}>
                            <p className="font-BriceRegular text-sm md:text-base lg:text-lg xl:text-xl text-[#F1EAE2]">
                                Initiated by
                            </p>
                            <div className="w-[120px] sm:w-[130px] md:w-[150px] lg:w-[180px] xl:w-[200px]">
                                <img
                                    className="invert"
                                    src="/Images/Footer/sandels.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommonHero2;
