import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
class ListToShow extends React.Component {
    render () {
        console.log(this.props)
let listItem=this.props.list.map((obj)=>{
return (
    <tr key = {obj.id}>
        <td>{obj.id}</td>
        <td>{obj.firstName}</td>
        <td>{obj.lastName}</td>
        <td>{obj.skills}</td>
        <td>{obj.company}</td>
        <td>
            <a href="#">
                <span className="glyphicon glyphicon-pencil"></span>
            </a>
            <span> | </span>
            <a href="#">
                <span className="glyphicon glyphicon-remove"></span>
            </a>
        </td>
    </tr>
    )
})


        return (
            <div className="col-md-12">
               <h2 className="sub-header">List of Employees</h2>
				<div className="table-responsive">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>ID</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Skills</th>
								<th>Company</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{listItem}
						</tbody>
					</table>
				</div>
            </div>
        )
    }
}
function mapStatetoProp(state){
    console.log(state);
    return {list:state.employeeList}
}

export default connect(mapStatetoProp) (ListToShow);