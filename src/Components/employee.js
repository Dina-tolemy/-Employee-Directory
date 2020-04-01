import React from 'react';
import Moment from 'react-moment';

function Employee(props) {

    return (
        <div>
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                {props.results.map(result => (
                    <tr className="table" key={result.login.uuid}>
                     

                        <td> <img className="
                        "src={result.picture.medium} alt="" /></td>
                        <td>{result.name.first + " " + result.name.last}  </td>
                        <td className="email"><a href={result.email}>{result.email}</a></td>
                        <td>{result.cell}</td>
                        <td><Moment format="MM-DD-YYYY">{result.dob.date}</Moment></td>

                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}

export default Employee;