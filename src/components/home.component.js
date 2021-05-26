import axios from "axios";
import React, { Component } from "react";

export default class Home extends Component{

    componentDidMount(){
        axios.get('user'). then(
            res => {
                console.log(res);
            },
            err => {
                console.log(err)
            }
        )
    }

    render(){
        return(
            <h2>You are not logged in</h2>
        )
    }
}