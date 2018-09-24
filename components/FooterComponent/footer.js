import React from 'react';
import ReactDOM from 'react-dom';

class FooterComponent extends React.Component{

	constructor (props) {
		super (props);
		this.state = {
			titleText: "Employee Database"
		}
	}

	render () {
		return (
			<div className="footer">
				<div className="inner">
					<p>Template for <a href="http://getbootstrap.com">{this.state.titleText}</a>, by <a href="mailto:nitin.web@gmail.com">Nitin Bhatnagar</a>.</p>
				</div>
			</div>
		)
	}
}

export default FooterComponent;