import React from "react";
import WorkSpace from "../Components/WorkSpace";

export default function NoPage(){
  const bannerImg="https://i.fbcd.co/products/resized/resized-750-500/2543-7215fd453151d6e13e16fa9cc290de1cdee14d5989f28492111c3fecc3b60d20.webp";
    return(
      <WorkSpace bannerImg={bannerImg}>
        <div className="noPageContent">
           <b>No contents available in this Page</b> <br/>
          <b>Switch Tabs for appropriate content</b>
        </div>
       
      </WorkSpace>
    )
}