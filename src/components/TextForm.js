import React, { useState } from 'react'



export default function TextForm(props) {

    //UpperCase
    const handleUpperCase = () => {
        // console.log("Uppercase Clicked: " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!" , "success")
    }
    //LowerCase
    const handleLowerCase = () => {
        // console.log("Uppercase Clicked: " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!" , "success")
    }
    //SentenceCase
    const handleSentenceCase = () => {
        // console.log("Sentence Clicked: " + text)
        let newText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        setText(newText)
        props.showAlert("Converted to SentenceCase!" , "success")
    }
    //TitleCase
    const handleTitleCase = () => {
        let newText = "";
        text.split(" ").forEach(function (item, index) {
            newText = newText + " "
            if (index === 0)
                newText = ""
            newText = newText + item.charAt(0).toUpperCase() + item.substring(1, item.length).toLowerCase();
            console.log(newText, index);
        });
        setText(newText)
        props.showAlert("Converted to TitleCase!" , "success")
    }
    //CopyText
    function handleCopyText() {
        var copyText = document.getElementById("textbox");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to Clipboard!" , "success")
    }
    //Remove Space
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed!" , "success")
    }

    //Clear Text
    const handleClearText = () => {
        // console.log("Clear Clicked: " + text)
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!" , "success")
    }
    //OnChange
    const handleonchange = (event) => {
        // console.log("on Change");
        setText(event.target.value)
    }
    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState('');


    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#14171a'}}>
                <h2>{props.heading}</h2>
                <div className="my-3">
                <textarea className="form-control" value={text} onChange={handleonchange} id="textbox"  style={{backgroundColor: props.mode === 'dark' ? '#e5e5e5' : 'white'}} rows="8"></textarea>
                </div>

                <button className="btn btn-primary " onClick={handleUpperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleSentenceCase}>Sentence Case</button>
                <button className="btn btn-primary mx-2" onClick={handleTitleCase}>Title Case</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Your Text</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-outline-danger mx-2" onClick={handleClearText}>Clear Text</button>

            </div>

            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#14171a'}}>
                <h4>Your Text Summary</h4>
                <p>Character Count: {text.length} | Word Count: {(text.length === 0) ? (text.split(" ").length - 1) : (text.split(" ").length) }</p>
                {/* <p>Character Count: {text.length} | Word Count: {text.split(" ").length} | Line Count: {text.split("\n").length} </p> */}
                <p>Minutes to Read {0.008 * text.split("").length}</p>
                <div className="container"></div>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter something in text above to preview it here"}</p>

            </div>
        </>
    )
}

