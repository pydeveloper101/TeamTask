import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from './firebase';



class AddGoal extends Component {
constructor(props){
  super(props);
  this.state = {
    title:''
  }
}

addGoal(){
  console.log('this ', this);
  const { title } = this.state;
  const { email } = this.props.user;
  goalRef.push( { email,title } );
}

  render() {
    return(
      <div className="form-inline">
      <div className="form-group">
      <input type="text" placeholder="Add a Task" className="form-control" style={{margin:'5%'}} onChange={event=>this.setState({title:event.target.value})} />
      </div>
      <button className="btn btn-sucess" type="button" onClick={()=> this.addGoal()} style={{margin:'5%'}} >Submit</button>

      </div>
    )
  }
}
function mapStateToProps(state){
  const { user } = state;
  //console.log('state in AddGoal' , state);
  return {
    user
  }

}
export default connect(mapStateToProps,null) (AddGoal);
