import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store'
import { Provider } from 'react-redux'
import Properties from './database/properties'
import Players from './database/players'

const defaultState = {property: Properties, player: Players}
const store = configureStore(defaultState)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
