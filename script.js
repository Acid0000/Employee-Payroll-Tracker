// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employees = [];
  let TrueFalse = true;

  while (TrueFalse) {
    const firstName = prompt("Enter the employee's first name:");
    const lastName = prompt("Enter the employee's last name:");
    const salary = parseFloat(prompt("Enter the employee's salary:"));
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
    employees.push(employee);
    TrueFalse = confirm("Would you like to add another employee?");
  }

  return employees;
}


// Display the average salary
const displayAverageSalary = function(employees) {
  if (employees.length === 0){ 

    return;
  } 
  else {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce | Wanted a better way to add these than what was taught in class, google is cool like that.
  const totalSalary = employees.reduce((accumulator, employee) => accumulator + employee.salary, 0);
  const averageSalary = parseFloat(totalSalary / employees.length);
  console.log(`The adverage employee salary between our ${employees.length} employee(s) is ${averageSalary.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  })}`);
}
}


// Select a random employee
const getRandomEmployee = function(employees) {
  if (employees.length === 0) return;

  const RandomEmployee = Math.floor(Math.random() * employees.length);
  const employee = employees[RandomEmployee];

  console.log(`Congratulations to ${employee.firstName} ${employee.lastName}, our random drawing winner!`);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
