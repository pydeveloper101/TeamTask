import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from './firebase';
import AddGoal from './AddGoal';
import Goallist from './Goalist';
import './index.css';
import CompleteGoalList from './CompleteGoalList';
class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }



  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand  h1">TeamTasker</span>
        </nav>
        <h1>Tasks</h1>
        <AddGoal />
        <hr/>
        <Goallist/>
        <hr/>
        <h4>Completed Tasks</h4>
         <CompleteGoalList/>
         <hr/>
        <button type="button" className="btn btn-danger" onClick={() => this.signOut()}>Sign Out</button>
      </div>
    );
  }
}
function mapStateToProps(state){
  //console.log('State', state);
  return {}

}

export default connect(mapStateToProps, null)(App);
