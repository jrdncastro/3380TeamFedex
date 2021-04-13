import React, { useState, useEffect } from 'react'
import { getEmployee, deleteEmployee, editEmployee, addEmployee } from "../../Services/EmployeeService"



function Search() {

    const [employee, setEmployee] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [action, setAction] = useState("add");
    const [newEmployee, setNewEmployee] = useState();

    useEffect(() => {
        showInfo()}, [])

    function showInfo(){
        setLoading(true);
        getEmployee()
        .then(json => {
            setEmployee(json);
            setLoading(false);
        })
        .catch(err => {
        console.error(err)
        setError(err)
    });
    }

    function search(e) {
        e.preventDefault();
        console.log("Searching " + e.target.value)
        let empToSearch = {};
        employee.forEach((employ) => {
            if (employ.id === e.target.value)   {
                console.log("Found match: " + employ.id);
                empToSearch = employ;
        }})
        setNewEmployee(empToSearch)
        setAction("Search")
}
    return (
        <div>
        <h2>Search for Employee</h2>
        <hr />
        <section>
        <article className = "input">  
            <input type = "text" placeholder = " Enter Employee Name" id = "name"></input> <br/>
            <button className = "submit" onClick={search}>Search</button>   
        </article>
        <article className = "output">
        <table className = "table table-hover">
            <thead>
                <tr>
                    <th scope = "col">ID</th>
                    <th scope = "col">Name</th>
                    <th scope = "col">Gender</th>
                    <th scope = "col">Age</th>
                    <th scope = "col">Position</th>
                    <th scope = "col">Years of Service</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        </article>
        </section>
        <hr/><br/>
    </div>
    )
}

export default Search;