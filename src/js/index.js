//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SecondsCounter from "./component/home.jsx";

//import your own components

function App() {

    const [counter, setCounter] = React.useState(0)
  
    useEffect(() => {
      const timer = setInterval(() => setCounter(counter + 1), 1000)
      return () => clearInterval(timer)
    }, [counter])
      
  
    return(
      <SecondsCounter nums={('00000'+counter).slice(-5).split('')} />
    )
  
  }

//render your react application
ReactDOM.render(<App/>, document.querySelector("#app"));
