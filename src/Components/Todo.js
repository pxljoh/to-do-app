import React, { useState } from 'react'
import "./Todo.css"
function Todo() {
  const [tasks, setTasks] = useState([])

  function addTask() {
    const newTask = document.getElementById("newTask")
    setTasks([...tasks, newTask.value])
    newTask.value = "";

  }

  return (
    <div className="mt0">
      <div className="input-task  bg-white ma0 pa3 w-100 tc">
        <h1 className="task-title bg-white black mr6 f2">Task^</h1>
        <input id="newTask" className="input ba pv2  ma0 ba" maxLength="20" type="text" placeholder="Insert task..." />
        <button id="add" className="add ph4 pv3 br3 ml3 ma0 f4  pointer " onClick={addTask}>✎</button>
      </div>
      <div className="bg-black mt0 h1 bb "></div>
      <div>

        {tasks.map((item, index) => (
          <div key={item} className=" pv2 w-90 bb b--black center pa3 mt5 flex justify-between">
            <h2 className="output f3 w-100">{index+1}- {item}</h2>
            <button className="remove ph4 mb3 mt4 br3" onClick={() => {
              if (tasks.length > 0) {
                setTasks(tasks.filter((item, _index) => _index !== index));
              }
            }
            }>X</button>
          </div>
        ))}
      </div>
      <p className="footer tc pa3 f7 dark-pink pa2 ma0 absolute bottom-0 right-1 b "> 0.0.1 2022-J</p>
    </div>
  )
}
export default Todo


/*

export default function UserInputs() {
    const [animals, setAnimals] = useState([
     
    ]);
 
    return (
      <div className="App">
        <input type="text" id='input' />
       
        {animals.map((animal,key) => (
          <h1 key={key}>{animal.type}</h1>
        ))}
        <button onClick={() =>{
            
            let color=document.getElementById('input').value
            setAnimals([...animals, {color}]);
        }}>Update the State</button>
      </div>
    );
  }

*/