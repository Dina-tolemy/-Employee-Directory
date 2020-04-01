import React from 'react';
import Header from "./Components/header";
import Search from './Components/search';
import Employee from "./Components/employee";
import API from "./Utils/API";


class App extends React.Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    order: ""

  };

  componentDidMount() {
    API.getUsers().then(res => this.setState({
        employees: res.data.results,
        filteredEmployees: res.data.results
    })).catch(err => console.log(err))
}

  render() {
    return (
      <div >
        <Header />
        <Search />
        <Employee results={this.state.filteredEmployees}/>
      </div >
    );
  }
}

export default App;
