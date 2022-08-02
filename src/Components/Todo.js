import React, { useState } from 'react'
import "./Todo.css"
function Todo() {
  const [tasks, setTasks] = useState([])
  let [check, setCheck] = useState(false);

  function addTask() {
    const input = document.getElementById("input")
    if (input.value !== "") {
      setTasks([...tasks, input.value])
      input.value = "";
      setCheck(!setCheck)
    }
  }

  return (
    <div className="output-main mt0">
      <div id="logo-main">
      <img src="https://i.ibb.co/89Wn1XV/taskapp.png" id="logo" alt="" />
      </div>
      
      <div className="task-main ma0 pa3 w-100 tc">
        
        <input id="input" className="input f4  ma0  mt0 br3" maxLength="20" type="text" placeholder="type tasks in here.."
          onPaste={e => e.preventDefault()} />
        <button id="add" className="add ph3 pv2 br2 ml3 ma0 f5  mt4 pointer mb6 shadow-2 " onClick={addTask}>✎</button>
      </div>

      <div className="list pt2">
        {tasks.map((item, index) => (
          <div key={item} id={index} className="tracked  pv2 w-100 bb2 b--black center pa3 mt0 flex justify-between"
            onClick={(e) => {
              let children = e.target.children

              if (children[0].style.textDecoration !== "line-through") {
                children[0].style.textDecoration = "line-through";
                //e.target.style.textDecoration = "line-through";
              } else {
                //e.target.style.textDecoration = "none";
                children[0].style.textDecoration = "none";
              }
              setCheck(!check)

            }}>

            <h2 className="output pa3 w-90 shadow-5" id="output" onClick={
              (e) => {
                if (e.target.style.textDecoration !== "line-through") {
                  e.target.style.textDecoration = "line-through"
                  //children[0].style.textDecoration = "line-through";

                } else {
                  e.target.style.textDecoration = "none";
                  //children[0].style.textDecoration = "none";
                }
                setCheck(!check)
              }
            }>{index + 1}- {item}</h2>
            <button className="remove mr0 br2 mt3 pointer shadow-5 " onClick={() => {
              if (tasks.length > 0) {
                setTasks(tasks.filter((item, _index) => _index !== index));
              }
            }
            }>X</button>
          </div>
        ))}
      </div>

      <p className="footer tc pa3 f7 dark-pink tracked pa2 "> 0.0.1 2022-J</p>
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