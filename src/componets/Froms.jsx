import React, { useState } from 'react';

const Froms = () => {

    const handleClick =(name)=>{
        console.log('button clicked');
        
        alert(name + ' , you button clicked')
    }
   
    const [value , setValue ] = useState('')
    
    const handleChange =(event)=>{  
           
         setValue( event.target.value)  
    }
   
    const hanleinputClick =()=>{
         alert(value)
    }
    
  
  return (
    <div>


     {/* onChange event */}
      <input type="text"  onChange={(e)=>handleChange(e)}   />

      <button type='submit'onClick={hanleinputClick} >submit</button>




        {/* onClick event  */}
      {/* <button onClick={handleClick()} >click me </button> */}
      {/* <button onClick={handleClick} >click me </button>
      <button onClick={()=>handleClick()} >click me </button>
      <button onClick={()=>handleClick('jithin')} >click me </button> */}


   
    </div>
  );
}

export default Froms;
