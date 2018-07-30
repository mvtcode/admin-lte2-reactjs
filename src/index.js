/**
 * Created by tanmv on 29/07/2018.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import stores from './stores';
import {Provider} from "react-redux";

ReactDOM.render(
	<Provider store = { stores }>
		<App/>
	</Provider>,
	document.getElementById('root'));
// registerServiceWorker();
