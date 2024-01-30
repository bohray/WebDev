import React, { useState } from 'react'

export default function TextForm(props) {
    const handleClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }

    const handleClicklow = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }

    const handleClickcle = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","success")
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied Successfully","success")
    }

    const handleSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Excess Space Removed","success")
    }

    const [text,setText] = useState('')

  return (
    <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'  }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" value={text} id="myBox" rows="8" placeholder='Enter text here'  onChange={(event)=>{setText(event.target.value)}} style={{backgroundColor: props.mode === 'light' ? 'white' : '#6c757d', color: props.mode === 'dark' ?'white' :'black'  }}></textarea>
            </div>
            <button disabled={text.length===0} onClick={handleClick} className="btn btn-primary mx-1 my-1">Conver to UpperCase</button>
            <button disabled={text.length===0} onClick={handleClicklow} className="btn btn-primary mx-1 my-1">Convert to LowerCase</button>
            <button disabled={text.length===0} onClick={handleClickcle} className="btn btn-primary mx-1 my-1">Clear Text</button>
            <button disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
            <button disabled={text.length===0} onClick={handleSpace} className="btn btn-primary mx-1 my-1">Correct Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'  }}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h2 className='my-3'>Preview</h2>
            <p>{text.length > 0 ? text : 'Nothing to Preview!'}</p>
        </div>
        {/* https://youtu.be/Ghp1Mi43dxQ?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&t=13 */}
    </>
  )
}
