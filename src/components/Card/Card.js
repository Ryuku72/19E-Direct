import React from "react";
import { useSpring, animated} from 'react-spring'
import "./style.css";


const items = ["#807feb", "#7fb5eb","#7febc7", ,  "#eb7fb0", "#ebc27f", "#eb7f7f", "#ae7feb", "#e81f63", "#7fb9eb"];



function Card(props) {

  function result(){
  if (props.department === "common"){
    return "bg-purple-300"
  } 
  else if (props.department === "marketing"){
    return "bg-gray-300"
  }
  else if (props.department === "legal"){
    return "bg-blue-300"
  } 
  else if (props.department === "research and development") {
    return "bg-pink-300"
  } 
  else if (props.department === "information technology") {
    return "bg-green-300"
  } 
  else if (props.department === "enquiries"){
    return "bg-yellow-300"
  }
  else {
    return "bg-teal-300"
  }
}

  console.log(props.length)
  return(
    <div className={`card relative flex flex-col items-center rounded-lg mt-4 shadow-lg text-xl font-mono p-5 text-gray-900 bg-gray-300 ${result()}`} style={{ ...props.style}}>
      <div className="content p-3 capitalize">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
          <li>
            <strong>Role:</strong> {props.role}
          </li>
          <li>
            <strong>Manager:</strong> {props.manager}
          </li>
          <li>
            <strong>Salary:</strong> ${props.salary}
          </li>
          <li>
            <strong>Email:</strong><span className="lowercase"> {props.email}</span>
          </li>
        
        </ul>
      </div>
      <div className="absolute top-0 right-0 m-3">
        <button onClick={() => props.onHandleRemove(props.name)} className="text-red-700 text-xl m-1 w-10 flex justify-center">
      <i className="fas fa-trash-alt"></i></button>
      </div>
    </div>
  );
}

export default Card;