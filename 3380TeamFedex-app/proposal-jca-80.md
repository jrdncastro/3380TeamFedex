# CSIS 3380 Project Proposal - TeamFedEx

## Project Description:

This project will be used as an employee database for FedEx. After authentication, access to the program will be given and employees will be allowed to see all employees employed by FedEx. When a new employee is hired, their information is created and added to an external database. This database will hold all employee information, where it will be available for viewing for other currently employed employees. 

## Additional Technology

|Technology|Description|Link|
|--|--|--|
|BootStrap|BootStrap FrameWork|[Link](https://getbootstrap.com/docs/5.0/getting-started/introduction/)|
|REST API|Navigatable Endpoints|[Link](https://restfulapi.net/)|
|Database|Save and Access Database Information|[Link](https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp)|

## Project People and User Stories

|Member Name|Student Number|Github Username|User Story|Description|Weighting|
|--|--|--|--|--|--|
|Jordan Castro|300226180|jrdncastro|Create Read Update Delete|Admin|4 points|
|Jordan Castro|300226180|jrdncastro|Search|Manager|3 points|
|Jordan Castro|300226180|jrdncastro|Authentication|Employee|3 points|

**Total: 10**

## User Story Descriptions

    Title: Create, Read, Update, Delete
    Story
    -----
    As an Admin, 
    I want to perform CRUD operations, 
    so that I can create an employee database.
    Acceptance Criteria
    ------
    Scenario A: 
    New Employees should be added to the database
    Given that their information is submitted, 
    when their information is added into an employee form, 
    then the database will be updated with their information.
    ----------------------

    Title: Search
    Story
    -----
    As a Manager, 
    I want to search for employees, 
    so that I can view their information.
    Acceptance Criteria
    ------
    Scenario B: 
    Employees in the database can be searched using a search bar
    Given that their name is entered correctly, 
    when the employee exists in the database, 
    then their employee information will be displayed.
    -----------------------

    Title: Authentication 
    Story
    -----
    As an Employee, 
    I want to authenticate my log in, 
    so that I can protect the personal information of other employees.
    Acceptance Criteria
    ------
    Scenario C:
    Enter login credentials 
    Given that those credentials are valid, 
    when valid credentials are entered, 
    then permission to enter and use the website is granted.
    ----------------------
