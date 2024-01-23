import React, { useState } from 'react';

export default function TextForm(props) {
  
  const handleUpClick = () => {
    console.log("Upper Case Was Clicked" + text);
    let newText= text.toUpperCase()
    setText(newText);
  }
  const handleLoClick = () => {
    console.log("Lower Case Was Clicked" + text);
    let newText= text.toLowerCase()
    setText(newText);
  };
  const handleClearClick = () => {
    console.log("clear Case Was Clicked" + text);
    setText('');
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState('Enter your Text Here')
  return (
  <>
    <div className="container">
      
        <h1> {props.heading}</h1>

        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="my box" rows="8"/>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to  uppercase  </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear text </button>
           </div>
           <div className="className">
            <h3>your Text Summary</h3>
            <p> {text.split(" ").length} words and {text.length}  characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

           </div>
           </>
  );
}
