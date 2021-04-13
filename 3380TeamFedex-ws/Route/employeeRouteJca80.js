const { Router } = require('express')
const express = require('express')
const { v4: uuidv4 } = require('uuid')

var router = express.Router();

    let employee = 
    [
      {
        id: uuidv4(),
        empId: 100,
        name: "Petunia Nisuis",
        gender: "Female",
        age: 60,
        position: "Sales",
        yearsOfService: 3
      },
      {
        id: uuidv4(),
        empId: 200,
        name: "Nikolas O'Fallon",
        gender: "Male",
        age: 41,
        position: "Customer Service",
        yearsOfService: 27
      },
      {
        id: uuidv4(),
        empId: 300,
        name: "Shelbi Etchells",
        gender: "Male",
        age: 41,
        position: "Courier",
        yearsOfService: 15
      },
      {
        id: uuidv4(),
        empId: 400,
        name: "Susette Hasell",
        gender: "Male",
        age: 65,
        position: "Customer Service",
        yearsOfService: 16
      },
      {
        id: uuidv4(),
        empId: 500,
        name: "Lyn Waterdrinker",
        gender: "Female",
        age: 30,
        position: "Customer Service",
        yearsOfService: 12
      },
      {
        id: uuidv4(),
        empId: 600,
        name: "Cameron Galbreth",
        gender: "Female",
        age: 59,
        position: "Customer Service",
        yearsOfService: 23
      },
      {
        id: uuidv4(),
        empId: 700,
        name: "Allan Jzak",
        gender: "Male",
        age: 30,
        position: "Operations Manager",
        yearsOfService: 18
      },
      {
        id: uuidv4(),
        empId: 800,
        name: "Eran Pitcher",
        gender: "Male",
        age: 49,
        position: "Cargo",
        yearsOfService: 20
      },
      {
        id: uuidv4(),
        empId: 900,
        name: "Jacqui Saby",
        gender: "Female",
        age: 47,
        position: "Courier",
        yearsOfService: 27
      },
      {
        id: uuidv4(),
        empId: 1000,
        name: "Bevan Downing",
        gender: "Male",
        age: 58,
        position: "Customer Service",
        yearsOfService: 24
      }
    ]
router.get('/employees', (req, res) => {
  console.log("Received GET Request for Employees: ");
  console.log(JSON.stringify(employee, null, "\t"));
    
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(employee));
})

router.post('/employees', (req, res) => {

  var newEmployee = { 
    id: uuidv4(),
    empId: req.body.empId,
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
    position: req.body.position,
    yearsOfService: req.body.yearsOfService,
  };

  employee.push(newEmployee);
  
  res.header("Content-type: application/json");
  res.send(employee)
})
  
router.delete('/employees', (req, res) => {
  let idToDelete = req.body.id
  employee = employee.filter((employ) => employ.id != idToDelete);
  console.log("Received DELETE Request for: " + idToDelete)
  res.header("Content-type: application/json");
  res.send(JSON.stringify(employee))
})

router.put('/employees', (req, res) => {

  let idToEdit = req.body.id
  console.log("Received EDIT Request for: " + idToEdit)
  res.header("Content-type: application/json");

  employee = employee.map((employ) => {
    if (employ.id === idToEdit) {

      var newEmp = Object.assign({}, employ);
      newEmp.id = req.body.id;
      newEmp.empId = req.body.empId;
      newEmp.name = req.body.name;
      newEmp.gender = req.body.gender;
      newEmp.age = req.body.age;
      newEmp.position = req.body.position;
      newEmp.yearsOfService = req.body.yearsOfService;
      return newEmp;

    } else {
      return employ;
    }
  })
  res.send(JSON.stringify(employee))
})

module.exports = router;