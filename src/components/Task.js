import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.name);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSubmitEdit = () => {
    dispatch(editTask(task.id, { name: newTask }));
    setEditing(false);
  };

  return (
    <li>
      {editing ? (
        <form onSubmit={handleSubmitEdit}>
          <input
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <span>{task.name}</span>
      )}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};

export default Task;