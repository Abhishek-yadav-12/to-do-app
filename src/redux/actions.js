export const addTask = (task) => {
    return { type: 'ADD_TASK', task };
  };
  
  export const deleteTask = (id) => {
    return { type: 'DELETE_TASK', id };
  };
  
  export const editTask = (id, task) => {
    return { type: 'EDIT_TASK', id, task };
  };