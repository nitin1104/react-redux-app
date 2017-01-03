import React from 'react';
import ReactDOM from 'react-dom'

class ContentLeft extends React.Component {
	render () {
		return (
			<div>
				<ul className="nav nav-sidebar">
					<li><a href="#">Add Employee </a></li>
					<li className="active"><a href="#">View List</a></li>
				</ul>
			</div>
		)
	}
}

export default ContentLeft;