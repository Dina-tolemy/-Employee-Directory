import React from 'react';

function Header() {

    return (

        <div className="card bg-dark"
            style={{ textAlign: "center", height: 250, borderBlockEndColor: "red", borderBlockEndWidth: 5, marginBottom: 20 }}>
            <div className="card-body">
                <h1 className="card-title"
                    style={{ color: "white", marginTop: 70, fontFamily: "timesnewroman", fontSize: 60 }}
                >Employee Directory</h1>
                <p
                    style={{ color: "white", fontFamily: "timesnewroman", fontSize: 18 }}
                >click on Name or BOB to order the employees by name or age or search for an employee by first name or last name</p>
            </div>
        </div>
    );
}

export default Header;