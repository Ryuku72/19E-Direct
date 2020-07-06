import React from "react";
import "./style.css";


function Hero(props){
    return (
        <div className="bg-cover h-screen flex flex-col justify-center text-center my-2 transition duration-700 ease-out" style={{...props.style}}>
            <h1 className="text-5xl pMarker p-10"> Welcome to Foreign Toolkit Employment Directory</h1>
        </div>
    )
}

export default Hero;