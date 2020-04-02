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
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
   // this.searchEmployee(value);
  };
    searchEmployee = () => {
    API.getUsers()
      .then(res => this.setState({
        employees: res.data.results,
         filteredEmployees: res.data.results
      }))
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { employees, search } = this.state;
    const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));

        this.setState({
            filteredEmployees
        });
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
        <Search 
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />
        <Employee 
        results={this.state.filteredEmployees} />
      </div >
    );
  }
}

export default App;
