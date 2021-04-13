export async function getEmployee() {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}employees`)
    .then (response => response.json())
}

export async function addEmployee(newEmployee) {
    const empData = JSON.stringify(newEmployee)
    return fetch(`${process.env.REACT_APP_API_BASE_URL}employees`,
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: empData
    })
    .then (response => response.json())
}

export async function deleteEmployee(id) {
    const deleteData = JSON.stringify({"id" : id});
    return fetch(`${process.env.REACT_APP_API_BASE_URL}employees`,
    {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: deleteData
    })
    .then (response => response.json())
}

export async function editEmployee(newEmployee) {
    const empData = JSON.stringify(newEmployee)
    return fetch(`${process.env.REACT_APP_API_BASE_URL}employees`,
    {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: empData
    })
    .then (response => response.json())
}
