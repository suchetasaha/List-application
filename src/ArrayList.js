import React from 'react'
//List rendering//
function ArrayList() {
    const list =
        [
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

        ]
  return (
    <div>
        <table>
        <tr>
          <th className="border">Id</th>
          <th className="border">Name</th>
          <th className="border">Age</th>
          <th className="border">Skill</th>
      </tr>  
      {list.map((data) =>
      
      <tr>
          <td className="border">{data.id}</td>
          <td className="border">{data.name}</td>
          <td className="border">{data.age}</td>
          <td className="border">{data.skill}</td>
      </tr>
      )}
      </table>
    </div>
  )
  }

export default ArrayList