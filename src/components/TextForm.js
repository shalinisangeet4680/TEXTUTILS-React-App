import React,{useState} from 'react';

export default function TextForm(props) {

    // const countWords = (text)=>{
    //     let arr= text.split(" ");
    //     let newArr = arr.filter((word)=>{
    //         return word!== String("");
    //     });
    //     return newArr.length;

    
   
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked"+text);
         let newText= text.toUpperCase();
         setText(newText)
         props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick= ()=>{
        // console.log("Uppercase was clicked"+text);
         let newText= text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to Lowercase!","success");
    }
    const handleCapitalize=()=>{
        let newText= text.split(" ").map(el=> el.charAt(0).toUpperCase()+el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Capitalized text","success");
    }
    const speak=()=>{
        let msg= new SpeechSynthesisUtterance();
        msg.text= text;
        window.speechSynthesis.speak(msg);
        props.showAlert("messaged spoke out","success");
    }
    const clearText=()=>{
       let clear="";
       setText(clear);
       props.showAlert("Text Cleared","success");
    }
    const handleCopy =()=>{
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }
    const handleOnChangeAlert = () => {
        alert("Cannot edit in preview");
    }
    const handleExtraSpaces =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }

   
    const handleOnChange= (event)=>{
        //console.log("On change");
        setText(event.target.value)
    }
    let  styledark = {
        color: '#fff',
        backgroundColor:'#3A3B3C',
        fontWeight: '400',
        fontSize:'20px'
      }
    
      let stylelight = {
        color: '#000',
        backgroundColor:'#fff',
        fontWeight: '400',
        fontSize:'18px'
      }
    
      let style2dark = {
        color: '#fff'
      }
    
      let style2light = {
        color:'#000'
      }
    
    
    const[text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
     <h1>{props.heading}</h1>
   <div className="mb-3">
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control"  value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',
  color:props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
   </div>
   <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
   <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
   <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
   <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize</button>
   <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
   <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
   <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
   
    </div>
   {/* <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
  </div>*/}
    <div className="container my-4 " style={props.mode==='dark'?style2dark:style2light}>
        <h1>{props.summaryHead}</h1>
        <p>Nummber of words : {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
        <p>Number of charecters : {text.length}</p>
        <p>Reading Time: {0.008 * (text.split(' ').filter((element)=>{return element.length!==0}).length)}</p>
        <h3 className="text-center">Preview Document</h3>
        <div className="content">
        <textarea
          className="form-control"
          id="text"
          rows="3"
          value={text}
          style={props.mode==='dark'?styledark:stylelight}
          onChange={handleOnChangeAlert}
        ></textarea>
        </div>
    </div>
    
    </>
  )
}
