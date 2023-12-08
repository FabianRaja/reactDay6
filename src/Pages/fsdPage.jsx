import React, { useState } from "react";
import WorkSpace from "../Components/WorkSpace";
import Cards from "../Components/Cards";

export default function FsdPage(){

    const bannerImg="https://cubettech.com/_next/image/?url=https%3A%2F%2Fcubettech.com%2Fwp-content%2Fuploads%2F2021%2F05%2FWEB-Full-Stack-Developer.jpg&w=1920&q=75";

    const data=[{
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2023",
      description:"When you're hiring a full-stack developer what are the most important things you look for?"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      title:"Top Differences: Full Stack Developer vs Software Engineer 2023",
      description:"A Full Stack Developer is a tech all-rounder. They work on both the front and"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      title:"Horizontal vs Vertical Scaling for Efficient System Design",
      description:"In the world of system design, envision a digigtal skysraper - a multifaceted structure built"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      title:"Best Book to Learn Full-Stack Development",
      description:"Are you interested in becoming a full-stack developer but not sure where to start?In"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      title:"Top 10 Product-Based Companies for Full-Stack Developers[2023]",
      description:"In the dynamic landscape of technology, full-stack developers are the architects of the digital world,"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      title:"7 Best Full-Stack Development Online Courses[2023]",
      description:"Today's world is rapidly evolving into a technological landscape, Owing to these dynamics, the demand"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      title:"The Top 10 Tools Every Full-Stack Developer Should Master in 2023",
      description:"‍As a full-stack developer, having the right set of tools is crucial for your success."
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-1536x804.webp",
      title:"Best Ways to Learn Full Stack Development in 2023",
      description:"Full stack development is and will be a promising and in-demand career in the upcoming"
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