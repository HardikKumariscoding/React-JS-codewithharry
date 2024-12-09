import React, {useState} from 'react'

export default function TextForm(props) { 

    const handleUpClick = () =>{
        let newText = text.toUpperCase();


         setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
        // setText("You just triggered handleUpClick")
    }


    const [text,setText] = useState('Enter text here bruh');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange}  value={text}></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick} >Convert to Uppercase</button>
        </div>
    )
}
