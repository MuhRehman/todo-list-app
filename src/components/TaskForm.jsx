// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskDescription.trim()) return;
    onAddTask(taskDescription);
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex'>
      <input
        type="text"
        className='form-control '
        placeholder="Add a new task"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit " className='btn btn-primary w-25 m-2 ml-2'>Add Task</button>
    </form>
  );
};

export default TaskForm;
