import { useEffect, useState } from "react";
import Input from "./input";
import Card from "./Cards";

const Tasks = () => {
    const [tasks,setTasks] = useState([]);

    const handleGetTasks = async () => {
      try{
          const response = await fetch("http://localhost:8010");
          const data = await response.json();
          if (data){
            setTasks(data);
          }
      } catch (err) {
          alert("Something went wrong:",err.message);
      }
      
    };
     const addTasksHandler = async (newTask) => {
           const body = {
			task_id:Math,random(),
			task_name:newTask
		   } 
		   try{
			await fetch("http://localhost:8010/add",{
			method:"POST",
			headers: {"content-Type": "application/json"},
			body:JSON.stringify(body)

		   }) 
		   await handleGetTasks();
    } catch (err) {
		alert("something wen wrong",err.message);
	}

    const deleteTaskHandler = (id) => {
        setTasks((prev) => {
            return prev.filter((task) => task.id !== id)
        })
    }

    useEffect(() => {
      handleGetTasks();
    },[]);

    return(
        <>
        <div className="tasks">
        <Input onAddTask={addTasksHandler}/>
         {
           tasks.map((task) => (
             <Card  
			 text={task.task_name} 
             id= {task.task_id}
             onTaskComplete={deleteTaskHandler}/>
           ))
         }
         </div>
        </>
    )
}

export default Tasks