import React, { useState } from "react";
import WorkSpace from "../Components/WorkSpace";
import Cards from "../Components/Cards";

export default function CyberSecurityPage(){
        const bannerImg="https://www.shutterstock.com/image-vector/cyber-security-network-protection-futuristic-600nw-1832676145.jpg" ;

        const data=[{
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
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
          title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
          description:"Cybersecurity & Ethical hacking and have been key in making sure that your data online"
         },
         {
          img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
          title:"8 Different Types of Cybersecurity and Threats Involved",
          description:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from"
         },
         {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
          title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
          description:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,"
         },
         {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
          title:"Top 7 Cyber Security Attacks in Real Life",
          description:"Cyber security attacks are the type of actions that are designed to destroy, steal, modify,"
         },
         {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
          title:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
          description:"There is something fascinating about a lone hacker in black hoodies using a single system"
         },
         {
          img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
          title:"The Ultimate Cybersecurity Roadmap for Beginners",
          description:"Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,"
         },
         {
          img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
          title:"How Is Cyber Security Important To Our Lives?",
          description:"Cybersecurity is an exact solution that is sought either by a billionaire with a massive,"
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