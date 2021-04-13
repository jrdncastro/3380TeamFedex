import React from "react";

function AddEmployee(props) {
    return (
        <div>
            <h2>Add Employee</h2>
            <input type = "text" id = "empId" placeholder = "Enter Employee ID" onChange={props.update}/><br/>
            <input type = "text" id = "name" placeholder = "Enter Name" onChange={props.update}/><br/>
            <input type = "text" id = "gender" placeholder = "Enter Gender" onChange={props.update}/><br/>
            <input type = "text" id = "age" placeholder = "Enter Age" onChange={props.update}/><br/>
            <input type = "text" id = "position" placeholder = "Enter Position" onChange={props.update}/><br/>
            <input type = "text" id = "yearsOfService" placeholder = "Enter Years" onChange={props.update}/><br/><br/>
            <button onClick={props.action}>Add Employee</button><br/><br/>
        </div>
    )
}

export default AddEmployee;