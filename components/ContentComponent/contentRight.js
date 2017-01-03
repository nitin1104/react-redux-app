import React from 'react';
import ReactDOM from 'react-dom';

import AddForm from './formToAdd';
import ListToShow from './listToShow';

class ContentRight extends React.Component {
	render () {
		let isAddClicked = true;
		let elem = <ListToShow/>
		if(isAddClicked) {
			elem = <AddForm/>
		}
		return (
			<div>
				<h2 className="sub-header">List of Employees</h2>
				<div className="table-responsive">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Skills</th>
								<th>Company</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>112466</td>
								<td>Nitin</td>
								<td>Bhatnagar</td>
								<td>Interactive developer</td>
								<td>Sapient</td>
								<td>
									<a href="#">
										<span class="glyphicon glyphicon-pencil">Edit</span>
									</a>
									<span> | </span>
									<a href="#">
										<span class="glyphicon glyphicon-pencil">Delete</span>
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)	
	}
}

export default ContentRight;