import React, {useState}     from "react";

export default function TextForm(props) {
    
    
    const handleUpClick = () =>{
        // console.log("Uplick was clicked" + Text)
        let newText = text.toUpperCase();
    setText(newText); 
  
}
const handleLoClick = () =>{
    let newText = text.toLowerCase();
setText(newText); 

}
const handleClearClick = () =>{
    let newText = "";
setText(newText); 

}
    const handleOnChange = (event) =>{
        console.log("OnChange");
        setText(event.target.value)
    }


    
    const[text, setText] = useState("Enter Your Text Here");

    return (
        <>
    <div className="container my-4">
        <h1>{props.heading}</h1>
      <form>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </form>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>Words {text.split(" ").length} Character {text.length}</p>
        <p>{0.008 * text.split(" ").length} Minutes required to read</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
    </>
  );
}
