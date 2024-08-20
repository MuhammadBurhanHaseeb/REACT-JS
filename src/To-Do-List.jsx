import React,{useState} from "react";
// import cdn from "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css";


function toDoList() {

const [task, setTask] = useState(["Eat BreakFats ", "Go to Gym" ]);
const [newTask, setNewTask] = useState('');


function handleInputChange(e) {
    setNewTask(e.target.value);
}

function handleAddTask() {
    if(newTask === '') return;
    setTask(t =>    ([...task, newTask]));
    setNewTask('');

}

function handleRemoveTask(index) {
    const newTask = task.filter((task, i) => index !== i);
    setTask(newTask);
    
}

function moveTaskUp(index)
{
    if (index > 0 )
    {
        const newTask = [...task];
        const temp = newTask[index];
        newTask[index] = newTask[index-1];
        newTask[index-1] = temp;
        setTask(newTask);
    }


}
function moveTaskDown(index)
{
    if (index < task.length-1)
    {
        const newTask = [...task];
        const temp = newTask[index];
        newTask[index] = newTask[index+1];
        newTask[index+1] = temp;
        setTask(newTask);
    }

}






  return (
    <div className="toDoList" >
        <h1>To-Do-List</h1>
        <div>
            <input onChange={handleInputChange} type="text" name="" id="todolist" placeholder="Enter New Task..." value={newTask}/>
            <button   onClick={handleAddTask} >Add</button>  
        </div>
        <div className="taskList">
            <ul>
                {task.map((task, index) => (
                    <li key={index}>

                        <span className="text-message">{task}</span>
                        <div className="buttonDiv">
                            <button className="Delete-button" onClick={() => handleRemoveTask(index)}><i style={{color : "red" }} className="fa-solid fa-trash" /></button>
                            <button className="move" onClick={() => moveTaskUp(index)}><i style={{color : "yellow" }} className="fa-regular fa-hand-point-up" /> </button>
                            <button className="move" onClick={() => moveTaskDown(index)}><i style={{color : "yellow" }} className="fa-solid fa-hand-point-down" /></button>
                        </div>
                       
                    </li>
                ))}
            </ul>
        </div> 
      
    </div>
  );
}
export default toDoList;