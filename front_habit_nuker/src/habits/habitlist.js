import React, { Component } from 'react';
import HabitDetail from './habitdetail';
import HabitForm from './habitform';
import axios from 'axios';

class HabitList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        habitsData: [],
        habit: " ",
        showComponent: false,
      };
      this.getHabitDetail = this.getHabitDetail.bind(this);
      this.showHabitDetails = this.showHabitDetails.bind(this);
      this.deleteHabitFromList = this.deleteHabitFromList.bind(this);
    }

    getHabitDetail(item) {
      axios
        .get("http://127.0.0.1:8000".concat(item.absolute_url))
        .then((response) => {
          this.setState({ habit: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    showHabitDetails(item){
      this.getHabitDetail(item);
      this.setState({ showComponent: true });
    }

    deleteHabitFromList(habit_id){
      const newList = this.state.habitsData.filter(
                        habit => habit.id !== habit_id);
      this.setState({ habitsData: newList });
      this.setState({ showComponent: false });
    }

    componentDidMount(){
        axios
        .get("http://127.0.0.1:8000/")
        .then((response) => {
            this.setState({habitsData: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render(){
        return(
            <div>
                <HabitForm/>
                {this.state.habitsData.map( item => {
                    return (
                      <h3
                        key={item.id} 
                        onClick={() => this.showHabitDetails(item)} 
                      >
                        {item.name}, {item.measure_of_completion} 
                      </h3>
                    );
                  })
                }

                {this.state.showComponent ? (
                  <HabitDetail 
                    habitDetail={this.state.habit} 
                    afterDelete={this.deleteHabitFromList} />
                ) : null}
            </div>
        );
    }
}

export default HabitList;
