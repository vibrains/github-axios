import React, { Component } from 'react';
import './App.css';
import UserForm from "./components/UserForm";
import axios from "axios";

class App extends Component {

  state = {
    data:null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const name = res.data.name;
        const location = res.data.location;
        this.setState({ name, location });
        console.log(location, name);
      })
    } return
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h3>GitHub Fetch</h3>
      <UserForm getUser={this.getUser} />

      <table className="pure-table">
      <thead>
      <tr>
      <th>Name</th>
      <th>Location</th>
      <th>Repos</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
      {this.state.name}
      </td>
      <td>
      {this.state.location}
      </td>
      </tr>
      </tbody>
      </table>
      </header>
      </div>
      );
  }
}

export default App;
