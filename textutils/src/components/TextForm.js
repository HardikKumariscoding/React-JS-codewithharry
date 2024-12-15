import React, {useState} from 'react'

export default function TextForm(props) { 

    const handleUpClick = () =>{
        let newText = text.toUpperCase();


         setText(newText);
         props.showAlert("Text has been converted to UpperCase","success")
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();


         setText(newText);
         props.showAlert("Text has been converted to LowerCase","success")

    }

    const handleOnChange = (event) =>{
        setText(event.target.value)

        
    }

    const RemoveText = () =>{
        setText("");
        props.showAlert("Text has been REMOVED","info")

    }

    const handleCopy = () =>{
        console.log("I am copy");
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard",'success')


    }


    const [text,setText] = useState('');
    return (
        <>
        <div style={{ color: props.mode === 'dark' ? 'white':'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange}  value={text}  style={{ backgroundColor: props.mode === 'dark' ? 'grey':'white', color: props.mode === 'dark' ? 'white' : 'black' }}    ></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick} >Convert to Lowecase</button>
            <button className='btn btn-primary mx-2' onClick={RemoveText} >Remove all</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy} >Copy to Clipboard</button>
        </div>

        <div className='container my-8' style={{ color: props.mode === 'dark' ? 'white':'black' }}>
            <h1>Your text summary</h1>
            <p>  {text.split(" ").length} words and {text.length} characters</p>
            <p> Its a {0.008 * text.split(" ").length } Minutes read </p>

            <h2>Preview</h2>
            <p>{text.length >0? text: "Enter something to preview it here"  }</p>

        </div>


        </>
    )
}
