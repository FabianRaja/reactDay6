import React, { useState } from "react";
import WorkSpace from "../Components/WorkSpace";
import Cards from "../Components/Cards";

export default function CareerPage(){
   const bannerImg="https://www.rankuptechnologies.com/wp-content/uploads/2022/05/career-1.jpg";

   
   const data=[{
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Steps-In-The-UX-Design-Process.webp",
    title:"12 Unique UI/UX Project Ideas to Boost Your Portfolio",
    description:"As a UX designer, building a strong portfolio is crucial to landing your dream job"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-What-Does-a-UIUX-Designer-Do-Career-Guide.webp",
    title:"What Does a UI/UX Designer Do?",
    description:"In the vast digital landscape we navigate daily, the seamless and intuitive experiences we encounter"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Steps-In-The-UX-Design-Process.webp",
    title:"8 Steps in the UX Design Process You Should Know",
    description:"The success of a product or a service not only depends on its features but"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-What-Does-a-UIUX-Designer-Do-Career-Guide.webp",
    title:"What is UI/UX? Top Things to Know in 2023",
    description:"In the current technology-driven world, the terms UI(User Interface) and UX(User Experience) have"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Data-Engineering-Projects-How-to-Build-Real-time-Streaming-Data-Pipelines.webp",
    title:"The Easiest Programming Languages to Learn in 2023",
    description:"Are you considering a career in coding? Great choice! Learning to code is valuable"
   },
   {
    img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Blockchain.webp",
    title:"Top 5 IT Jobs for Economics Students",
    description:"In today's digital age, the intersection of economics and technology offers exciting career opportunities for"
   },
   {
     img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Steps-In-The-UX-Design-Process.webp",
     title:"6 Best AI Tools for Coding",
     description:"Are you into coding and want to make your life easier? Then you're in the"
    },
    {
     img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Data-Engineering-Projects-How-to-Build-Real-time-Streaming-Data-Pipelines.webp",
     title:"Software Testing vs. Quality Assurance (QA)",
     description:"When it comes to making computer programs and apps, two important things are making sure"
    }


]
const [storage,setStorage]=useState(data);

    return(
      <WorkSpace bannerImg={bannerImg}>
         <div className="cardSection">
            {
              storage?.map((value,index)=>(
                <Cards
                key={index}
                img={value.img}
                title={value.title}
                description={value.description}
                />
              ))
            }
        </div>
      </WorkSpace>
    )
}