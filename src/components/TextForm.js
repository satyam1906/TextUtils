import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE","success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!","success")
    }
    const handleSymbols = () => {
        // let newText = text.split();
        let newText = text.replace(/[(!@#$%^&*)]/g, "");
        setText(newText);
        props.showAlert("Symbols Removed!","success")
        
        
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")
    }
    const handleOnChange = (event) => {
        console.log(`On Change`)
        setText(event.target.value);
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success")
    }




    const [text, setText] = useState('');
    // Cannot update state like normal function,Use updation function
    // text = "New Text" --> Wrong way
    // setText("New Text") ;--> Correct Way
    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 >{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#17191a' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-1 my-1">   Convert to UPPERCASE</button>
                <button disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary mx-1 my-1">Convert to lowercase</button>
                <button disabled={text.length===0} onClick={handleClearClick} className="btn btn-primary mx-1 my-1">Clear Text</button>
                <button disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-1">Copy Text</button>
                <button disabled={text.length===0} onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
                <button disabled={text.length===0} onClick={handleSymbols} className="btn btn-primary mx-1 my-1">Remove Symbols</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{
                    return element.length!==0; 
                }).length} words and {text.length} characters</p>
                <p>Reading Time:{0.008 * text.split(" ").filter((element)=>{
                    return element.length!==0; 
                }).length} Minutes Approx. </p>
                <h2>Preview:</h2>
                <p>{text.length>0?text:'Nothing to preview'}</p>
            </div>
        </>
    )
}
