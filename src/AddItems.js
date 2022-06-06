import React, { useState } from "react";
// const AddItems = props => {
//     const [cart, setCart] = React.useState([]);
//     const [input, setInput] = React.useState([]);
  
//     SaveInput = e => {
//       setInput(e.target.value);
//     };
  
//     NewItem = () => {
//       setCart(prevState => [...prevState, input]);
//     };
  
//     return (
//       <div>
//         <input type="text" onChange={SaveInput} />
//         <button onClick={NewItem}> Add Item </button>
//         <ol>
//           {cart.map((Items, Index) => (
//             <li key={Index}> {Items}</li>
//           ))}
//         </ol>
//       </div>
//     );
//   };

function AddItems() {
  const [inputList, setinputList]= useState([{firstName:'', lastName:''}]);

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);

  }
 
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, { firstName:'', lastName:''}]);
  }
  return (
     <div className="row">
       <div className="col-sm-12">
           
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row mb-3">
                 <div class="form-group col-md-4">
                 <label >First Name</label>
                  <input type="text"  name="firstName" class="form-control"  placeholder="Enter First Name" onChange={ e=>handleinputchange(e,i)} />
               </div>
               <div class="form-group col-md-4">
               <label >Last Name</label>
                  <input type="text"  name="lastName" class="form-control"   placeholder="Enter Last Name" onChange={ e=>handleinputchange(e,i) }/>
               </div>
               <div class="form-group col-md-2 mt-4">
               {
                  inputList.length!==1 &&
                  <button  className="btn btn-danger mx-1" onClick={()=> handleremove(i)}>Remove</button>
               }
               { inputList.length-1===i &&
               <button  className="btn btn-success" onClick={ handleaddclick}>Add More</button>
               }
               </div>
            </div>
              );
             } )} 

               
       </div>
     </div>
  );
}
  
  export default AddItems;