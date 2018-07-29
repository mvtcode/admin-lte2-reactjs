import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter}  from 'react-router-dom';

import Routers from './Routers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';

ReactDOM.render(
<BrowserRouter>
	<Routers/>
</BrowserRouter>, document.getElementById('root'));