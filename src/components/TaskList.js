import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;