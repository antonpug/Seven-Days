let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const toggleToDo = id => ({
  type: 'TOGGLE_TODO',
  id
});