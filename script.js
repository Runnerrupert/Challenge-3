// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let numEmployeesArray = [];
let numberOfEmployees = 0;

// Collect employee data
const collectEmployees = function () {

  // Boolean variable to toggle when the while loop should stop
  let addMoreEmployees;

  // While loop that creates prompts to store information about each employee and create objects for them individually
  while(addMoreEmployees !== false){
    firstName = prompt("Employee First Name");
    lastName = prompt("Employee Last Name");
    salary = Number(prompt("Employee Salary"));

    if (isNaN(salary)) {
      salary = 0;
    } else {
      salary = salary;
    }

    person = {
      "firstName": firstName,
      "lastName": lastName,
      "salary": salary
    }
  
  // Fills the array with each object
  numEmployeesArray.push(person);

  // Increments a variable to store how many employees are logged
  numberOfEmployees++

  addMoreEmployees = confirm("Add another employee?");
  }
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // Variables needed to hold information on the total salary when each employee salary is added together
  // and the average when they are divided by the number of employees
  let totalSalary = 0;
  let averageSalaryWithTwoDecimals = 0;
  
  // A loop to add each employees salary together
  for(i = 0; i < employeesArray.length; i++){
    totalSalary = totalSalary + employeesArray[i].salary;
  }

  // Getting the average
  averageSalaryWithTwoDecimals = (Math.floor(totalSalary / numberOfEmployees));

  // Console logging the average out using a template literal
  console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalaryWithTwoDecimals.toFixed(2)}`);

  return;
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // Create variables for ease of use
  let randomNum;
  let employeeFirstName;
  let employeeLastName;

  // Finds a number between 0 and numberOfEmployees
  randomNum = Math.floor(Math.random() * numberOfEmployees);

  // Sets first name and last name variablees for use in the console log
  employeeFirstName = employeesArray[randomNum].firstName;
  employeeLastName = employeesArray[randomNum].lastName;

  // Console logs the winner of the random drawing
  console.log(`Congratulations to ${employeeFirstName} ${employeeLastName}, our random drawing winner!`);
  return;
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);