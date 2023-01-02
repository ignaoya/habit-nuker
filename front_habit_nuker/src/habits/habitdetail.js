import React, { Component } from 'react';

class HabitDetail extends Component {
    render(){
        const habit = this.props.habitDetail;
        return(
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4>Habit N. {habit.id}</h4>
                <h4>{habit.name}</h4>
                <h4>Habit Goal is {habit.measure_of_completion}</h4>
                <h4> ------------------------------------- </h4>
            </div>
        );
     }
}

export default HabitDetail;
