import React, { useState } from 'react'

 
export default function TextBar(props) {
    const [text, setText] = useState('');
    //setText

    const handleChange = (event)=>{
        setText(event.target.value)
        //console.log('hello')
    }

    const handleLC = ()=>{
        let str=text.toLowerCase()
        setText(str)
    }   

    const handleClear = ()=>{
        //let str=text.toLowerCase()
        setText('')
    }

    // const handleAlternatingCaps = ()=>{
    //     //let str=text.toLowerCase()
    //     let i=0
    //     for(let c in {text}){
    //         if (i%2){
    //             if(c>'a' || c<'z'
    //         }
    //     }
    // }

    // const twords=()=>{
    //     return text.split().length;
    // }
  return (
    //   could have used onClick={ ()=>{setText(text.toLowerCase())} } in place of handleLC
    <>
        <div className='container'>
            <div className='my-3'>
                <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={handleChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleLC}>To lowercase</button>
            <button type="button" className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
            {/* <button type="button" className="btn btn-primary mx-3" onClick={handleAlternatingCaps}>Alternating Caps</button> */}
        </div>
        <div className='container-my-3'>
            <h2>Summary</h2>
            <p>Total Characters = {text.length} and Total Words = {text.split(' ').length}</p>
        </div>
    </>
  )
}