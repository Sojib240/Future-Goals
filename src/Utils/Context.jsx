import React, { useState } from "react";
import { createContext } from "react";

export const NewsContext = createContext();

const Context = (props) => {
    const [news, setNews] = useState([
        {
            id: 1,
            title: "World Oceans Day: Art Challenge",
            shortDescription:
                "The 2023-2024 Future Goals academic year wrapped up with elementary students from fourteen schools around the island competing in an...",
            publishedDate: "8 July — Curacao",
            image: "/Images/News/future-goals-x-sandals.jpg",
            pageContent: null,
        },
        {
            id: 2,
            title: "Vacancy: Future Coach",
            shortDescription: "Do you want to be a Future Coach?",
            publishedDate: "12 December — Curacao",
            image: "/Images/News/whatsapp-image.jpg",
            pageContent: null,
        },
        {
            id: 3,
            title: "Interview with Limpi Recycling",
            shortDescription: "“In order to create one Future Goal we need approximately 30 kilos of plastic waste”. An interview with local organization Limpi Recycling.",
            publishedDate: "19 May — Curacao",
            image: "/Images/News/news-3-interview-limpi.jpg",
            pageContent: null,
        },
        {
            id: 4,
            title: "MGR. Niewindt College receives first Future Goals",
            shortDescription: "Today was most definitely not an ordinary school day for the children of the MGR. Nieuwindt college in Curaçao. The first school on the island to receive th...",
            publishedDate: "19 May — Curacao",
            image: "/Images/News/news-1a.jpg",
            pageContent: null,
        },
        {
            id: 5,
            title: "Ajax, SRI and its Foundation sign partnership",
            shortDescription: "From fishing nets to football goals: Ajax and Sandals Resorts International join forces to facilitate youth football in the Caribbean. Inspiring the next...",
            publishedDate: "19 May — Curacao",
            image: "/Images/News/news-1-ajax-and-sandals.jpg",
            pageContent: null,
        },
    ]);
    return (
        <NewsContext.Provider value={[news, setNews]}>
            {props.children}
        </NewsContext.Provider>
    );
};

export default Context;
