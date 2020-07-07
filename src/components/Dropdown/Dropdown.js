import React, {useState} from "react";


function Dropdown(props) {

    const [open, setOpen] = useState(false)

    function openState(event) {
        event.stopPropagation();
        event.preventDefault();
        console.log(event.target.innerHtml)
        console.log("clicked")
        setOpen(!open)
    }
 
        return(
            <div className="flex">
            <div className="mr-2 dropdown relative">
            <button type="button" className="text-gray-700 font-semibold py-2 px-4 rounded inline-block items-center" style={props.style} onClick={openState}>
              {props.title}
            </button>
            {open && props.children}
          </div>
          </div>      
        )
      }


export default Dropdown;








