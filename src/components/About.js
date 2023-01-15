import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle]= useState({
        color:'black',
        backgroundColor:'white'
        
    })
    const [btntext, setBtnText]= useState("Enable Dark Mode")

    const toggleStyle=()=>{
        if(myStyle.color ==='black'){
            setMyStyle({
                color: 'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }

    
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyse Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
     <strong> TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text.
       TextUtils reports the number of words and charecter. 
      Thus it is suitable for writing text with word / charecter limit.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
      <strong>TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. 
        TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.
                </strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
      <strong>
                    This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.
                </strong>
      </div>
    </div>
  </div>
</div>
< div classNameName="container my-3">
<button  onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
    </div>
    </div>
  )
}
