
import React, { useState } from "react";

const RemoveList = () => {
  const defaultList = [
    {
        id: (Math.floor(Math.random() * 10) + 1),
        name:"Clark",
        age:30,
        skill: "React"
    },
    {
        id: (Math.floor(Math.random() * 10) + 1),
        name:"Bruce",
        age:25,
        skill: "Java"
    },
    {
        id: (Math.floor(Math.random() * 10) + 1),
        name:"Ram",
        age:28,
        skill: "Vue"
    },
    {
        id: (Math.floor(Math.random() * 10) + 1),
        name:"Bruce",
        age:25,
        skill: "Java"
    },
    {
        id: (Math.floor(Math.random() * 10) + 1),
        name:"Ram",
        age:28,
        skill: "Vue"
    },

]

  const [list, updateList] = useState(defaultList);
  const [inputText, setInputText] = useState("");

  const addJoinPeople = (e) =>{
    let name = e.target.value;
    updateList([...list, {name : name}]);
    };

  const handleRemoveItem = (e) => {
   const name = e.target.getAttribute("name")
    updateList(list.filter(item => item.name !== name));
  };
  // const handleRemoveItem = (e) =>{
  //   let name = e.target.value;
  //   console.log(name)
  //   updateList(list.filter((e)=>(e !== name)))
  //   };
    const changeText = (e) => {
      updateList([...list, {name:e}]);
    }
  return (
    <div className="top">
          <table>
          <div class="form-group">
                  <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}   name="firstName" class="form-control"  placeholder="Enter Name" />
                  <button onClick={() => changeText(inputText)} className="button">Add</button>
               </div>
        <tr>
          <th className="border">Id</th>
          <th className="border">Name</th>
          <th className="border">Age</th>
          <th className="border">Skill</th>
      </tr> 
      {list.map(item => {
        return (
          <>
             <tr>
          <td className="border">{item.id}</td>
          <td className="border">{item.name}</td>
          <td className="border">{item.age}</td>
          <td className="border">{item.skill}</td><button className="button-gap" name={item.name} onClick={addJoinPeople}>
              +
            </button> 
             <button className="button" name={item.nam} onClick={handleRemoveItem}>
              -
            </button>
      </tr>
          </>
        );
      })}
    </table>
    </div>
  );
};
export default RemoveList
