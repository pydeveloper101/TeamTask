import React, { Component } from 'react';
import { completeGoalRef } from './firebase';
import { setCompleted } from './actions';
import { connect } from 'react-redux';
class CompleteGoalList extends Component {
  componentDidMount(){
    completeGoalRef.on('value', snap =>{
      let completeGoals = []
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({email, title})
      })
      console.log('completeGoals' , completeGoals);
      this.props.setCompleted(completeGoals);
    })

  }

clearCompleted(){
  completeGoalRef.set([])
}



  render(){
    console.log('this.props.completeGoals' , this.props.completeGoals)
    return (
      <div>
      {
        this.props.completeGoals.map((completeGoal,index)=>{
          const { title, email } =completeGoal;
          return(
            <div className='CompleteGoalList' key={index}>
            <strong>{title}</strong> completed by <em>{email}</em>

            </div>
          )

        })
      }
        <button type="button" className="btn btn-danger"    onClick={() => this.clearCompleted()}>Clear All</button>
      </div>
    )
  }

}

function mapStateToProps(state){
  const { completeGoals } = state;
  return {
    completeGoals
  }
}
export default connect(mapStateToProps , { setCompleted }) (CompleteGoalList);
