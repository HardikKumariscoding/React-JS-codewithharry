import React, { useState } from "react";

export default function About(props) {
  

//   const [myStyle, setMyStyle] = useState({
// color: "white",
//       backgroundColor: "black"
//   })

  // const [btnStyle, setBtnStyle] = useState({
  //   color: "white",
  //         backgroundColor: "black"
  //     })

 let myStyle =  {
  color: props.mode === 'dark' ? 'white' : 'black',
  backgroundColor: props.mode === 'dark'? 'grey' : 'white'
 }

  
  


  return (

    
    <div className="container" style={myStyle}>

      <h2 className="my-4">About Us</h2>

      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and efficiently. Be 
              it word count, character count or minutes it would take you to 
              read it
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free to Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             Textutils is a free character counter tool that provides instant character count & word count
             statistics for a given text. TextUtils reports the number of words and characters. Thus it is 
             suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            
          >
            <div className="accordion-body" style={myStyle}>
             TextUtils is compatible with all the chromium based browsers, aka. chrome, safari, edge, Arc as well as mozilla
             based ones, Firefox, Zen browser
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
      {/* <button    type="button" className="btn btn-dark"></button> */}

      </div>
    </div>


  );
}
