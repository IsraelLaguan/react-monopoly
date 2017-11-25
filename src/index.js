import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store'
import { Provider } from 'react-redux'
import Properties from './database/properties'
import Players from './database/players'
import Chance from './database/chance'

const defaultState = {property: Properties, player: Players, chance: Chance}
const store = configureStore(defaultState)
const root = document.getElementById('root')

ReactDOM.render(<Provider store={store}><App/></Provider>, root);
registerServiceWorker();
