// TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, onToggleCompletion, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    setEditedDescription(task.description);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    // Save edited task description
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}  row m-2`}>
       <div class="input-group">
      <div class="input-group-prepend">
      <div class="input-group-text p-3">
      <input
        type="checkbox"
      
        checked={task.completed}
        onChange={() => onToggleCompletion(task.id)}
      />
      </div>
      </div>
      {isEditing ? (
        <input
          type="text"
          className='form-control false p-3'
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          onBlur={handleSaveEdit}
          autoFocus
        />
      ) : (
        <input type="text" readonly="" value={task.description} onClick={handleToggleEdit} class="form-control false " aria-label="Text input with checkbox"  fdprocessedid="pocywi"/>
      )}
      <button className='btn btn-outline-secondary bg-danger text-white' onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
    </div>
  );
};

export default TaskItem;
