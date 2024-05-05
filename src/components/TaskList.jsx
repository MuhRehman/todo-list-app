import React , { useState, useEffect } from 'react'
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';


export default function TaskList() {

  
    const [tasks, setTasks] = useState([]);

  
    
   

    useEffect(() => {
      // Load tasks from local storage on component mount
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(savedTasks);
    }, []);
  
    const handleAddTask = (taskDescription) => {
      const newTask = { id: Date.now(), description: taskDescription, completed: false };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };
  
    const handleToggleCompletion = (taskId) => {
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };
  
    const handleDeleteTask = (taskId) => {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (

    <>

<div class="container">
  <div class="row justify-content-center align-items-center main-row">
    <div class="col-6 mt-5 shadow main-col bg-white">
      <div class="row bg-primary text-white">
        <div class="col  p-2">
          <h4>Todo App</h4>
        </div>
      </div>
      <div class="row justify-content-between text-white p-2">
        {/* <div class="form-group flex-fill mb-2">
          <input id="todo-input" type="text" class="form-control" value="" />
        </div> */}
         <div className="task-list">
      <TaskForm onAddTask={handleAddTask} />
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleCompletion={handleToggleCompletion}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
        
      </div>
      <div class="row" id="todo-container">
       
      </div>
    </div>
  </div>
</div>

    </>
  )
}
