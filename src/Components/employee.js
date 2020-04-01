import React from 'react';

function Employee() {

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
          <tr>
            <td className="userImg">1</td>
            <td className="userName">Dina Eltelimi</td>
            <td className="userEmail">g@gmail.com</td>
            <td className="userPhone">08987655</td>
            <td className="userDOB">17/3/1986</td>
          </tr>
          
        </tbody>
      </table>
      </div>
    );
}

export default Employee;