import React, { Component } from 'react';
import axios from 'axios';
import HabitUpdate from './habitupdate';

class HabitDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.showHabitUpdateForm = this.showHabitUpdateForm.bind(this);
    this.hideHabitUpdateForm = this.hideHabitUpdateForm.bind(this);
    this.afterHabitUpdate = this.afterHabitUpdate.bind(this);
    this.deleteHabit = this.deleteHabit.bind(this);
  }

  showHabitUpdateForm() {
    this.setState({ showComponent: true });
  }
  
  hideHabitUpdateForm() {
    this.setState({ showComponent: false });
  }

  afterHabitUpdate(habit) {
    this.hideHabitUpdateForm();
    this.props.afterUpdate(habit);
  }

  deleteHabit(habit) {
    console.log(habit.delete);
    axios.delete("http://127.0.0.1:8000".concat(habit.delete))
      .then((response) => {
        console.log(response);
        if (response.status === 204) {
          this.props.afterDelete(habit.id);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.habitDetail !== prevProps.habitDetail) {
      this.setState({ showComponent: false });
    }
  }

  render(){
      const habit = this.props.habitDetail;
      return(
          <div class="update">
              <h4>Habit N. {habit.id}</h4>
              <h4>{habit.name}</h4>
              <h4>Habit Goal is {habit.measure_of_completion}</h4>
              <button
                onClick={() => this.showHabitUpdateForm()}
              >
                Update
              </button>
              <button
                onClick={() => this.deleteHabit(habit)}
              >
                Delete
              </button>
              {this.state.showComponent ? <HabitUpdate habitUpdate={habit} afterSubmit={this.afterHabitUpdate} /> : null}
          </div>
      );
   }
}

export default HabitDetail;
