import React, { useState } from "react";
import WorkSpace from "../Components/WorkSpace";
import Cards from "../Components/Cards";

export default function AllPage(){
   
  //array data of objects for allPage
  const data=[
    {
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-What-Does-a-UIUX-Designer-Do-Career-Guide.webp",
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
       img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-What-Does-a-UIUX-Designer-Do-Career-Guide.webp",
       title:"6 Best AI Tools for Coding",
       description:"Are you into coding and want to make your life easier? Then you're in the"
      },
      {
       img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Blockchain.webp",
       title:"Software Testing vs. Quality Assurance (QA)",
       description:"When it comes to making computer programs and apps, two important things are making sure"
      },
      {
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
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Blockchain.webp",
        title:"The Top 10 Tools Every Full-Stack Developer Should Master in 2023",
        description:"‍As a full-stack developer, having the right set of tools is crucial for your success."
       },
       {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-1536x804.webp",
        title:"Best Ways to Learn Full Stack Development in 2023",
        description:"Full stack development is and will be a promising and in-demand career in the upcoming"
       },
       {
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
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
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
       },
       {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
        description:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills"
       },
       {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
        title:"What Is Hacking? Types of Hacking & More",
        description:"Have you ever wondered what hacking is all about? It’s a big deal in today’s"
       },
       {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
        title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
        description:"Cybersecurity & Ethical hacking and have been key in making sure that your data online"
       },
       {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
        title:"8 Different Types of Cybersecurity and Threats Involved",
        description:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from"
       },
       {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
        title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
        description:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,"
       },
       {
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
        title:"Top 7 Cyber Security Attacks in Real Life",
        description:"Cyber security attacks are the type of actions that are designed to destroy, steal, modify,"
       },
       {
        img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
        title:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
        description:"There is something fascinating about a lone hacker in black hoodies using a single system"
       },
       {
        img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
        title:"The Ultimate Cybersecurity Roadmap for Beginners",
        description:"Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,"
       },
       {
        img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
        title:"How Is Cyber Security Important To Our Lives?",
        description:"Cybersecurity is an exact solution that is sought either by a billionaire with a massive,"
       }
   ]

  
  //to shuffle the objects of array everytime the page is loaded
  //used to make this page more attractive

  const shuffle=arr=>[...arr].sort(()=>Math.random()-0.5);
  const shuffledData=shuffle(data);

 
  
  //bannerImg is passed for this page alone
  const bannerImg="https://cutshort.io/_next/image?url=https%3A%2F%2Fcdnv2.cutshort.io%2Fcompany-static%2F63a182555c4e8e00f1678aac%2Fuser_uploaded_data%2Fcover_pictures%2Fcompany_cover_pic_BTggIQmJ.jpg&w=750&q=80";

    return(
      <WorkSpace bannerImg={bannerImg}>
        <div className="cardSection">
            {
              shuffledData?.map((value,index)=>(
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