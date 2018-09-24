import React from 'react';
import ReactDOM from 'react-dom';

import AddForm from './formToAdd';
import ListToShow from './listToShow';

class ContentRight extends React.Component {
	render () {
		return (
			<div>
				<AddForm/>
				<ListToShow/>
			</div>
		)	
	}
}	

export default ContentRight;