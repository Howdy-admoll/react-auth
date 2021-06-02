import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component';
import Register from './components/register.component';
import axios from 'axios';

export default class App extends Component {

  state = {};

  componentDidMount = () => {
    axios.get('user').then(
        res => {
            this.setState({
                user: res.data
            });
        },
        err => {
            console.log(err)
        }
    )
};
  render() {
  return (

    <BrowserRouter>
      <div className="App">
        <Nav/>
          <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={() => <Home user={this.state.user} />} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
  }
}