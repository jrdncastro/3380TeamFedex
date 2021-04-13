import React, { useState, useEffect } from 'react'
import { getEmployee, deleteEmployee, editEmployee, addEmployee } from "../../Services/EmployeeService"
import AddEmployee from '../AddEmployeeJca80/AddEmployeeJca80';
import EditEmployee from '../EditEmployeeJca80/EditEmployeeJca80';

function Employee() {

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

    async function addEmp(e) {
        console.log("Adding ")
        await addEmployee(newEmployee)
        showInfo();
    }

    async function deleteEmp(e) {
        console.log("Deleting " + e.target.value);
        await deleteEmployee(e.target.value);
        showInfo();
    }

    async function editEmp(e) {
        let updatedEmp = newEmployee;
        await editEmployee(updatedEmp);
        setAction("add");
        showInfo();
    }

    function renderEditEmp(e) {
        e.preventDefault();
        console.log("Editing " + e.target.value)
        let empToUpdate = {};
        employee.forEach((employ) => {
            if (employ.id === e.target.value)   {
                console.log("Found match: " + employ.id);
                empToUpdate = employ;
        }})
        setNewEmployee(empToUpdate)
        setAction("edit")
    }

    function updateEmp(e) {
        setNewEmployee({
            ...newEmployee,
            [e.target.id]:e.target.value
        })
    }

    if (loading) return (<div className="alert alert-info">Loading</div>)
    if (error) return (<div className="alert alert-danger">Error</div>)

    return (
        <div>
            <div id = "forms">
            { (action === "add") ?
            <AddEmployee action={addEmp} update={updateEmp} /> : 
            <EditEmployee action={editEmp} update={updateEmp} currentEmployee={newEmployee} /> 
            }
            </div>
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Position</th>
                        <th>Years</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {employee.map((employ, key) => (
                            <tr key={key}>
                                <td>{employ.empId}</td>
                                <td>{employ.name}</td>
                                <td>{employ.gender}</td>
                                <td>{employ.age}</td>
                                <td>{employ.position}</td>
                                <td>{employ.yearsOfService}</td>
                                <td><button onClick={renderEditEmp} value={employ.id}>Edit</button></td>
                                <td><button onClick={deleteEmp} value={employ.id}>Delete</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Employee;