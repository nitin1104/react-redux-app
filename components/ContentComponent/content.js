import React from 'react';
import ReactDOM from 'react-dom';

import ContentLeft from './contentLeft.js';
import ContentRight from './contentRight.js';

class ContentComponent extends React.Component {
	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<div className='col-sm-3 col-md-2 sidebar'><ContentLeft/></div>
					<div className='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'><ContentRight/></div>
				</div>
			</div>
		)
	}
}

export default ContentComponent;