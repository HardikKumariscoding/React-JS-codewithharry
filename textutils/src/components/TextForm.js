import React, {useState} from 'react'

export default function TextForm(props) { 

    const handleUpClick = () =>{
        let newText = text.toUpperCase();


         setText(newText);
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();


         setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
        // setText("You just triggered handleUpClick")
    }

    const RemoveText = () =>{
        setText("");

    }


    const [text,setText] = useState('');
    return (
        <>
        <div style={{ color: props.mode === 'dark' ? 'white':'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange}  value={text}  style={{ backgroundColor: props.mode === 'dark' ? 'grey':'white' }}    ></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick} >Convert to Lowecase</button>
            <button className='btn btn-primary mx-2' onClick={RemoveText} >Remove all</button>
        </div>

        <div className='container my-8' style={{ color: props.mode === 'dark' ? 'white':'black' }}>
            <h1>Your text summary</h1>
            <p>  {text.split(" ").length} words and {text.length} characters</p>
            <p> Its a {0.008 * text.split(" ").length } Minutes read </p>

            <h2>Preview</h2>
            <p>{text}</p>

        </div>


        </>
    )
}
