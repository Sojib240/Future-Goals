import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NewsContext } from "../Utils/Context";
import CommonHero from "../Components/Common/CommonHero";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";

const NewsDetails = () => {
    const sliderImages = [
        { id: 1, image: "/Images/News/1a-1440x-q72.jpg" },
        { id: 2, image: "/Images/01a-how.jpg" },
        { id: 3, image: "/Images/01b-how.jpg" },
        { id: 4, image: "/Images/01d-how.jpg" },
        { id: 5, image: "/Images/01e-how.jpg" },
        { id: 6, image: "/Images/Footer/footer-img-1.jpg" },
        { id: 7, image: "/Images/News/7a-1440x-q72.jpg" },
        { id: 8, image: "/Images/News/9-1440x-q72.jpg" },
    ];
    const [news] = useContext(NewsContext);
    const { slug } = useParams();
    const [newsDetails, setNewsDetails] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    useEffect(() => {
        const updateSwiperNavigation = () => {
            if (prevRef.current && nextRef.current) {
                return {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                };
            }
        };
        updateSwiperNavigation();
    }, []);
    // const navigate = useNavigate();
    // console.log(navigate);

    // const currentIndex = data.findIndex((item) => item.id === Number(id));

    useEffect(() => {
        const newsDet =
            news &&
            news.filter((ne) => {
                return ne.slug === slug;
            });
        setNewsDetails(newsDet);
    }, [news, slug]);

    // newsDetails &&
    //     newsDetails.map((item) => {
    //         // setCurrentIndex(item.id);
    //         console.log(item);
    //     });
    // // console.log(newsDetails);
    // console.log(currentIndex);

    return (
        newsDetails &&
        newsDetails.map(({ id, title, publishedDate, image, pageContent }) => {
            return (
                <div key={id}>
                    <CommonHero
                        bg={`${image}`}
                        title={`${publishedDate}`}
                        subTitle={`${title}`}
                        arrow={true}
                    />
                    <div className="w-full bg-[#1E1E1E] sm:px-5 md:px-8 lg:px-10 xl:px-10">
                        <div className="max-w-[1440px] w-full bg-[#F1EAE2] rounded-3xl mx-auto px-6 sm:px-10 md:px-18 lg:px-24 xl:px-32 py-16 sm:py-20 md:py-24 lg:py-32 text-[15px] sm:text-[17px] text-[#1E1E1E] font-PoppinsRegular  leading-[25px] sm:leading-[27px] -translate-y-0 sm:-translate-y-[100px]">
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
                            <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-80 sm:w-52 h-80 sm:h-52 lg:w-44 lg:h-44 bg-[#1E1E1E] scale-0 group-hover:scale-200 lg:group-hover:scale-150 transition-transform duration-[0.44s] ease-in-out rounded-full block z-0" />
                        </button>
                    </div>
                </div>
            );
        })
    );
};

export default NewsDetails;
