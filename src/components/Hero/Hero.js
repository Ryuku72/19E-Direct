import React from "react";
import "./style.css";

function Hero(props){
    return (
        <div className="bg-cover h-screen flex justify-center items-center text-center mt-5 transition duration-700 ease-in-out z-10" style={{...props.style}}>
            <h1 className="text-5xl pMarker flex flex-col justify-center text-center" style={{...props.pStyle}}> Welcome to Foreign Toolkit Employment Directory</h1>
        </div>
    )
}

export default Hero;