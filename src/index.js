import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router}  from 'react-router-dom';

import ReactRouter from './Routers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';

ReactDOM.render(
<Router>
	<ReactRouter/>
</Router>, document.getElementById('root'));