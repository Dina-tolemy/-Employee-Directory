import React from 'react';

function Search(props) {

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline " style={{marginBottom:20}}>
        <input
          className="form-control mr-sm-2"
          type="search"
          value={props.value}
          name="search"
          placeholder="Serch By name"
          aria-label="Search"
          onChange={props.handleInputChange}
       />
        <button
         type="button"
          className="btn btn-outline-primary"
          onClick={props.handleFormSubmit} 
          >Search</button>
      </form>
    </nav>
  );
}

export default Search;