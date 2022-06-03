import React, { useState } from 'react';
import RightClick from './RightClick'
import InputBox from './InputBox';
  
function LeftClick() {
  
    const [state, setstate] = useState({data:""})
  
    const changeState = () => {  
        setstate({data:"null"}); 
       }; 
  
    return (  
        <div>  
            <RightClick data={state.data} />   
            <InputBox data ={state.data} />
            <div>
            <input type="text" />
                <button  onClick={changeState} type="button">
                  Send state 
                </button>    
            </div>
        </div>                 
    );
 }
  
 export default LeftClick;
