import React from "react"

function EditEmployee(props) {
    return (
        <div>
        <h2>Update Employee</h2>
        <h2>ID: {props.currentEmployee.empId} </h2>
        <input type = "text" id = "name" value={props.currentEmployee.name} onChange={props.update}/><br/>
        <input type = "text" id = "gender" value={props.currentEmployee.gender} onChange={props.update}/><br/>
        <input type = "text" id = "age" value={props.currentEmployee.age} onChange={props.update}/><br/>
        <input type = "text" id = "position" value={props.currentEmployee.position} onChange={props.update}/><br/>
        <input type = "text" id = "yearsOfService" value={props.currentEmployee.yearsOfService} onChange={props.update}/><br/><br/>
        <button onClick={props.action}>Update Employee</button><br/><br/>
    </div>
    )
}

export default EditEmployee;