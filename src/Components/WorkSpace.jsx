import React from "react";
import { useNavigate } from "react-router-dom";

export default function WorkSpace({children,bannerImg}){
 
    const navigate=useNavigate();

    return(
        <div className="workSpace">
          
            {/* navBar imported from bootstrap */}
            <div className="navBar">
                        <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">
                <img src="https://play-lh.googleusercontent.com/lAFgx9P9v6g9CGiJ4yXEghRTGikQg88xuxOg30t_licriW4ODAyXVK4NHBJj-HGILw" alt="Bootstrap" width="30" height="24"/>
                </a>
            </div>
            </nav>
                <a className="navbar-brand" href="#">Blogs</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse navBarHalf" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">COURSES</a>
                    </li>
                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                LIVE CLASSES
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">FULL STACK DEVELOPMENT PROGRAM(FSD)</a></li>
                                <li><a className="dropdown-item" href="#">IIT - M ADVANCED PROGRAMMING & DATA SCIENCE PROGRAM</a></li>
                                <li><a className="dropdown-item" href="#">AUTOMATION & TESTING PROGRAM</a></li>
                            </ul>
                    </li>
                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRACTICE
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">CODEKATA</a></li>
                                <li><a className="dropdown-item" href="#">WEBKATA</a></li>
                                <li><a className="dropdown-item" href="#">IDE - ONLINE COMPILER</a></li>
                            </ul>
                    </li>
                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                RESOURCES
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">REWARDS</a></li>
                                <li><a className="dropdown-item" href="#">REFERRAL</a></li>
                                <li><a className="dropdown-item" href="#">FORUM SUPPORT</a></li>
                                <li><a className="dropdown-item" href="#">BLOGS</a></li>
                            </ul>
                    </li> <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               OUR PRODUCTS
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">HACKERKID</a></li>
                                <li><a className="dropdown-item" href="#">GUVI FOR CORPORATES</a></li>
                              
                            </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            </div>
            {/* BannerSection (img source will be passed by the pages)*/}
            <div className="bannerSection">
                <img className="banner" src={bannerImg}/>
            </div>

              {/* navigation imported from bootstrap */}
            <div className="navigationSection">
                <ul className="nav nav-tabs nav-justified navigation">
                <li className="nav-item">
                <button className="nav-link active buttonSection shadow" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"
                onClick={()=>navigate("/")}
                >ALL</button>
                </li>
                <li className="nav-item">
                <button className="nav-link active shadow buttonSection" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"
                onClick={()=>navigate("/fsd")}
                >FULL STACK DEVELOPMENT</button>
                </li>
                <li className="nav-item">
                <button className="nav-link active shadow buttonSection" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"
                onClick={()=>navigate("/dataScience")}
                >DATA SCIENCE</button>
                </li>
                <li className="nav-item">
                <button className="nav-link active shadow buttonSection" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"
                onClick={()=>navigate("/cyberSecurity")}
                >CYBER SECURITY</button>
                </li>
                <li className="nav-item">
                <button className="nav-link active shadow buttonSection" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"
                onClick={()=>navigate("/career")}
                >CAREER</button>
                </li>
                </ul>
            </div>
            
            {/*children property used for varied content for each and every page */}
            <div>
                {children}
            </div>
           
        </div>
    )
}