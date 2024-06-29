import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask({ name: task }));
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;