import React ,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpClicked")
        setText(newText);
        props.showAlert("Coverted to uppercase", "success");
    }
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        // setText("You have clicked on handleUpClicked")
        setText(newText);
        props.showAlert("Coverted to lowercase", "success");
    }

    const handleonChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
        props.showAlert("Coverted to lowercase", "success");

    }
    const handleFirstClick=()=>{
        let newT = text[0].toUpperCase() + text.substring(1);
        setText(newT);
        props.showAlert("Coverted to first Lette capital ", "success");
    }
    const handleCopyClick=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy", "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success");
    }
    const handleClearClick=()=>{
        setText("");
        props.showAlert("Clear", "success");
    }


    const [text, setText] = useState('');
    // text = "new text"; //worng way to change the state
    // setText("new text"); // correct way to change the state 
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-1" >ToUpperCase</button>
        <button onClick={handleLoClick} className="btn btn-primary mx-1">ToLowerCase</button>
        <button onClick={handleFirstClick} className="btn btn-primary mx-1">ToCaptialize</button>
        <button onClick={handleCopyClick} className="btn btn-primary mx-1">CopyText</button>
        <button onClick={handleExtraSpaces} className="btn btn-primary mx-1">RemoveExtraSpace</button>
        <button onClick={handleClearClick} className="btn btn-primary mx-1">Clear All</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to priview it here"}</p>
    </div>
    </>
  )
}

