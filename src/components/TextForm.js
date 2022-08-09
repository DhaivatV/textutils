import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handlelowClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const handle = ()=>{
        let new_text = ""
        setText(new_text)
        
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <><div className='container'> 
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handlelowClick}>Lowercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handle}>Clear</button>
    </div>
    <div className='container my-2'>
        <h1> Your Text Analysis</h1>
            <ul className='my-10'>
                <li> <b>No. Of Words :{text.split(" ").length}</b> </li>
                <li><b>No. Of Character : {text.length}</b></li>
                <li><b>Time To Read : {text.split(" ").length*0.008} Minutes</b></li>
                <li><b>Preview :  </b></li>
                <p><b>{text}</b></p>
            </ul>
        </div>
    </>
        
        
    )
}