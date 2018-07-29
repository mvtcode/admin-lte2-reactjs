import React, {Component} from 'react';
// import {render} from 'react-dom';
import {BrowserRouter}  from 'react-router-dom';

import Routers from './Routers';

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