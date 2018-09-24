import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store/store'
import {Provider} from 'react-redux'

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import cover from './cover.css';
import overrides from './overrides.css'

import Defaults from './defaultComponents';

class App extends React.Component{
	render () {
		return (
			<div className='site-wrapper-inner'>
				<div className='cover-container'>
					<Defaults/>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Provider store={store}><App></App></Provider> , document.getElementById('site-wrapper'));

export default App;