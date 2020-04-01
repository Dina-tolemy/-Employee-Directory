import React from 'react';

function Search() {

    return (
        <nav className="navbar navbar-light bg-light">
        <form className="form-inline " style={{Align:"center"}}>
          <input className="form-control mr-sm-2" type="search" placeholder="Serch By name" aria-label="Search" style={{marginBottom:30}}/>
        </form>
      </nav>
    );
}

export default Search;