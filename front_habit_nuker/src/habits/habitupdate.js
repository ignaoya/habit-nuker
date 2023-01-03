import React, { Component } from "react";
import axios from "axios";

class HabitUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habit_to_update: this.props.habitUpdate,
      value: this.props.habitUpdate.goal_description,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .patch("http://127.0.0.1:8000".concat(this.state.habit_to_update.update), {
        goal_description: this.state.value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { value } = this.state;
    return (
      <div style={{ color: "red", border: "1px solid red" }}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h6>Updating</h6>
            <input type="text" value={value} onChange={this.handleChange} />
          </div>
          <input
            style={{ backgroundColor: "white" }}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default HabitUpdate;
