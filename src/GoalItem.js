import React , { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef , goalRef } from './firebase';
class GoalItem extends Component{
  completeGoal(){
    const { email } = this.props.user;
    const { title ,serverKey } = this.props.goal;
    //console.log('email=',email, 'title=',title)
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email,title});
  }



  render(){

      //console.log('this.props.goal', this.props.goal);
      const { email,title } = this.props.goal;
      return (
         <div style={{margin: '5%' , color:'#F5B7B1'}}><strong>{title}</strong>
         <span style={{marginRight:'10px'}}> Submitted By <em>{email}</em></span>
         <button className="btn btn-sm btn-primary" onClick = {() => this.completeGoal()}> Complete </button>
         </div>
      )

  }
}

function mapStateToProps(state){
  const { user } = state;
  return {
    user
  }

}
export default connect(mapStateToProps, null)(GoalItem);
