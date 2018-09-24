import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {addEmployee} from '../../actions/actions'
import {bindActionCreators} from 'redux'
class AddForm extends React.Component {
    
    constructor(props){
        super(props);
        this.save=this.save.bind(this);
        this.index=0;
     
    }
    save(){
  let employee={
      id: this.id.value,
      firstName: this.firstName.value + this.index,
      lastName: this.lastName.value,
      skills: this.skills.value,
      company: this.company.value
    }
    this.props.addEmployee(employee);
    }
    render () {
        return (
            <div>
                <div className="form-group col-md-4">
                    <label htmlFor="id">ID</label>
                    <input type="text" className="form-control" id="ID" placeholder="ID" ref={(input) => { this.id = input; }}></input>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="First Name" ref={(input) => { this.firstName = input; }}></input>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" ref={(input) => { this.lastName = input; }}></input>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="skills">Skills</label>
                    <input type="text" className="form-control" id="skills" placeholder="Skills" ref={(input) => { this.skills = input; }}></input>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="company">Company</label>
                    <input type="text" className="form-control" id="company" placeholder="Company" ref={(input) => { this.company = input; }}></input>
                </div>
               
                <button type="submit" className="btn btn-default pull-right" onClick={this.save}>Save</button>
       </div>
        )
    }
}
function mapStatetoProp(state){
    return {}
}

function mapActionToProp(dispatch){
    return bindActionCreators({addEmployee:addEmployee},dispatch)
}
export default connect(mapStatetoProp,mapActionToProp)(AddForm);