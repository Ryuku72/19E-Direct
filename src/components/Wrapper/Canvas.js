import React from 'react'
import {useSpring, animated} from 'react-spring'


const Canvas = (props) => {

  const fade = useSpring({
      from: {
          opacity: 0
      },
      to: {
          opacity: 1
      }
  }) 

return (
    <canvas className="w-screen h-screen block" ref={ref}></canvas>
)
}
  export default Canvas