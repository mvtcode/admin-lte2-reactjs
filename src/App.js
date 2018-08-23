import React, {Component} from 'react';
import {BrowserRouter}  from 'react-router-dom';

import Routers from './Routers';
import './utils/prototype';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routers/>
			</BrowserRouter>
		);
	}
}

export default App;