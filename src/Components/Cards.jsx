import React from "react";

export default function Cards({img,title,description}){
   
    //card component imported from bootstrap
    //img, title, description alone will the passed through the required pages
    return(
       
                        <div className="cards shadow-lg ">
            <div className="card" >
            <img src={img} className="card-img-top" alt="img"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#">Read More...</a>
            </div>
            </div>
        </div>
     
  
    )
}