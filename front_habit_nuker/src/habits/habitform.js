import React, { Component } from "react";
import axios from "axios";

class HabitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habit_name: " ",
      description: " ",
      user: " ",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.habit_name);
    axios
      .post("http://127.0.0.1:8000/create/", {
        name: this.state.habit_name,
        goal_description: this.state.description,
        user: this.state.user
      })
      .then((response) =>{
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const { habit_name, description, user } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Habit Name
          <input
            type="text"
            name="habit_name"
            value={habit_name}
            onChange={this.handleChange}
          />
        </div>

        <div>
          Description
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <div>
          User
          <input
            type="number"
            name="user"
            value={user}
            onChange={this.handleChange}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }

}
export default HabitForm;
