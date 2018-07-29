/**
 * Created by tanmv on 29/07/2018.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import rootStores from "./reducers";
import {Provider} from "react-redux";

const stores = createStore(rootStores);

ReactDOM.render(
	<Provider store = { stores }>
		<App/>
	</Provider>,
	document.getElementById('root'));
// registerServiceWorker();
