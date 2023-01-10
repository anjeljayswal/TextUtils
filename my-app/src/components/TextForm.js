import React ,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpClicked")
        setText(newText);
    }
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        // setText("You have clicked on handleUpClicked")
        setText(newText);
    }

    const handleonChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleFirstClick=()=>{
        let newT = text[0].toUpperCase() + text.substring(1);
        setText(newT)
    }
    const handleCopyClick=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleClearClick=()=>{
        setText("");
    }


    const [text, setText] = useState('Enter text here2');
    // text = "new text"; //worng way to change the state
    // setText("new text"); // correct way to change the state 
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-1">ToUpperCase</button>
        <button onClick={handleLoClick} className="btn btn-primary mx-1">ToLowerCase</button>
        <button onClick={handleFirstClick} className="btn btn-primary mx-1">ToCaptialize</button>
        <button onClick={handleCopyClick} className="btn btn-primary mx-1">CopyText</button>
        <button onClick={handleExtraSpaces} className="btn btn-primary mx-1">RemoveExtraSpace</button>
        <button onClick={handleClearClick} className="btn btn-primary mx-1">Clear All</button>
    </div>
    <div className="container my-4">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

