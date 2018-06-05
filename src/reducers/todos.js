const defaultState = [{
    'id': 1,
    'description': 'Clean basement',
    'done': false
  }, {
    'id': 2,
    'description': 'Pick up groceries',
    'done': false
  }, {
    'id': 3,
    'description': 'Book plane tickets to Hawaii',
    'done': false
  }];

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, done: !todo.done}
          : todo
      )
    default:
      return state
  }
}

export default todos;