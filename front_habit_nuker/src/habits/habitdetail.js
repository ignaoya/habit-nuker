import React, { Component } from 'react';
import axios from 'axios';
import HabitUpdate from './habitupdate';

class HabitDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.updateHabitDetails = this.updateHabitDetails.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
    this.deleteHabit = this.deleteHabit.bind(this);
  }

  updateHabitDetails() {
    this.setState({ showComponent: true });
  }

  hideComponent() {
    this.setState({ showComponent: false });
  }

  deleteHabit(habit) {
    console.log(habit.delete);
    axios.delete("http://127.0.0.1:8000".concat(habit.delete))
      .then((response) => {
        console.log(response);
        if (response.status == 204) {
          this.props.afterDelete(habit.id);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    render(){
        const habit = this.props.habitDetail;
        return(
            <div class="update">
                <h4>Habit N. {habit.id}</h4>
                <h4>{habit.name}</h4>
                <h4>Habit Goal is {habit.measure_of_completion}</h4>
                <button
                  onClick={() => this.updateHabitDetails()}
                >
                  Update
                </button>
                <button
                  onClick={() => this.deleteHabit(habit)}
                >
                  Delete
                </button>
                {this.state.showComponent ? <HabitUpdate habitUpdate={habit} afterSubmit={this.hideComponent} /> : null}
            </div>
        );
     }
}

export default HabitDetail;
