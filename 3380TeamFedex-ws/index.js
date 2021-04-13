const express = require('express');
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const app = express();
const port = 8000;

var employeeRoute = require('./Route/employeeRouteJca80')

const corsOptions = {
    origin: '*'
}

app.use(cors());
app.use(bodyParser.json());

app.use('/', employeeRoute);

app.use('/', (req, res) => {
  res.send({
    token: '123'
  });
});



app.listen(port, () => {
    console.log(`Web Service Listening on port ${port}`)
})