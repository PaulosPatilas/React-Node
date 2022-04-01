import React from 'react'
function EmployeeTable() {
    return (
    <table>
        <thead>
        <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Date of birth</th>
            <th>Activity</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Charlie</td>
            <td>Janitor</td>
            <td>03/08/1997</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>Mac</td>
            <td>Bouncer</td>
            <td>16/9/1975</td>
            <td>No</td>
        </tr>
        <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
            <td>5/5/1980</td>
            <td>No</td>
        </tr>
        <tr>
            <td>Dennis</td>
            <td>Bartender</td>
            <td>20/02/1990</td>
            <td>No</td>
        </tr>
        </tbody>
    </table>
    )
}
  export default EmployeeTable