import axios from "axios";
import React, { Component } from "react";

export default class Home extends Component{

    handleSubmit = e =>{
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword
        };
        
        
        axios.post('http://localhost:8080/register', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err =>{
                console.log(err);
            }
        )
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group" >
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="Enter Firstname"
                        onChange={e => this.firstName = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter Last name"
                        onChange={e => this.lastName = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email"
                        onChange={e => this.email = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                        onChange={e => this.password = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password"
                        onChange={e => this.confirmPassword = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>.</label>
                <button className="form-control btn btn-primary btn-block">Sign Up</button>
                </div>

                
            </form>
        )
    }
}