import axios from "axios";
import React, { Component } from "react";
export default class Home extends Component{

    state = {};
    componentDidMount(){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };

        axios.get('user', config).then(
            res => {
                this.setState({
                    user: res.data
                });
            },
            err => {
                console.log(err)
            }
        )
    }

    render(){
        if(this.state.user){
            return(
                <h2>Hi {this.state.user.first_name} {this.state.user.last_name}</h2>
            )
        }
        return(
            
            <h2>You are not logged in</h2>
        )
    }
    
}