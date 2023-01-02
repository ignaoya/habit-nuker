import React, { Component } from 'react';
import HabitDetail from './habitdetail';
import axios from 'axios';

class HabitList extends Component {

    state = {
        habitsData:[],
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/")
        .then((response) => {
            this.setState({habitsData: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    render(){
        return(
            <div >
                {this.state.habitsData.map( item => {
                    return <HabitDetail key={item.id} habit = {item}/>
                    })
                }
            </div>
        )
    }
}

export default HabitList;
