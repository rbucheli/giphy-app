// We Must Import the React Library
import React from "react";
import GifHolder from "./GifHolder";

function GifDisplay(props) {
  const { gif } = props;
  return (
    <div>
        {gif ?
        <img src={gif.data.image_url} alt="" />
        :
        <GifHolder />
        }
    </div>
  )
};


export default GifDisplay;


// How do we render GIFs? If we're using an AJAX call to get the information, I would need to know what the object looks like. 