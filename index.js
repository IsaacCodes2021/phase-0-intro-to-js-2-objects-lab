// Write your solution in this file!
const employee = {}
    employee.name = 'Isaac', 
    employee.streetAddress = '21 Narrowway'

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = {...employee}
    newEmployee[name] = streetAddress;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway'
    return employee;
}

function deleteFromEmployeeByKey(employee, name, streetAddress) {
    const newEmployee = {...employee}
    newEmployee[name] = streetAddress;
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}

  
    
