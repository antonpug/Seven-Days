import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from './reducers/todos';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todos);

ReactDOM.render(<Provider><App store={store}/></Provider>, document.getElementById('root'));
registerServiceWorker();
