//Import the React Library
import React from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
const Button = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.Change();
  };
  
  //The component must return some JSX
  return (
    <div>
      <button type="button" onClick={handleSubmit}>Make API Call Again</button>
      </div>
  )
};

// We must export the component to use it in other files
export default Button;

// Button does nothing
// State?