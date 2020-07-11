import React from "react";

function List(props) {
  return (
      <div>
          <ul className="content p-1 capitalize text-lg">
         <li className="border-b-2 mt-1 mb-2">
          {props.children}
        </li>
        </ul>
      </div>
  )
}

export default List