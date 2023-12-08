import React, { useState } from "react";
import WorkSpace from "../Components/WorkSpace";
import Cards from "../Components/Cards";

export default function DataSciencePage(){
    const bannerImg="https://static.vecteezy.com/system/resources/previews/008/903/061/non_2x/data-science-banner-concept-has-7-steps-to-analyze-such-as-big-data-classification-analyze-statistics-solving-decision-and-knowledge-to-to-extract-knowledge-from-structured-and-unstructured-data-vector.jpg";
    
    const data=[{
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2023",
      description:"Are you someone who’s not interested in coding, but wants to get placed in tech"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-1536x768.webp",
      title:"Impact of Certification Programs on Hiring Data Scientists",
      description:"Data scientists are the creators behind transforming the raw data into edible data insights. These"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title:"Top Product-Based Companies for Data Science Freshers",
      description:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      title:"What is the Difference between Data Science and Data Engineering?",
      description:"India has been making some serious waves in the world of data. Just like the"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title:"Top 10 Data Science Tools in 2023",
      description:"Data Science is an in-demand profession and will continue growing in the coming years. From"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title:"Best Data Science Books to Learn 2023",
      description:"Today, we’re going to talk about something really cool: data science. It’s all about using"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      title:"Top Product-Based Companies for Data Scientists in 2023",
      description:"We all know about the kind of buzz surrounding data science right now, it is"
     },
     {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
      title:"Useful Python Libraries & Tools for Data Science Beginners",
      description:"In a world filled with information, knowing how to understand and use data is super"
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