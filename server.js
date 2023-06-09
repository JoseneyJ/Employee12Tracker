const mysql = require('mysql2');
const inquirer = require('inquirer');

// Database Connection
const connection = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'tracker_db'
    },
);

connection.connect((err) => {
    if (err) throw err;
    console.log('Connection Successful!')

    runProgram();
});

// Main prompt startup
function runProgram() {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add Department', 'Add Role', 'Add Employee', 'Exit']
    }).then(answers => {
        switch (answers.action) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Exit':
                connection.end();
                break;
        }
    });
}

// View all Departments
function viewDepartments() {
    connection.query('SELECT * FROM department', (err, data) => {
        if (err) throw err;
        console.log('Showing all departments:');
        console.table(data);
        runProgram();
    });
}

// View all roles
function viewRoles() {
    connection.query('SELECT * FROM role', (err, data) => {
        if (err) throw err;
        console.log('Showing all roles:');
        console.table(data);
        runProgram();
    });
}

// View all employees
function viewEmployees() {
    connection.query('SELECT * FROM employee', (err, data) => {
        if (err) throw err;
        console.log('Showing all employees:');
        console.table(data);
        runProgram();
    });
}

// Add department 
function addDepartment() {
    inquirer.prompt([
        {
            name: 'department',
            type: 'input',
            message: 'New Department Name?',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    console.log('Please enter department name.');
                }
            }
        },
    ]).then(answers => {
        connection.query(
            'INSERT INTO department SET ?',
            {
                name: answers.department
            },
            (err) => {
                if (err) throw err;
                // adding deparment into data 
                console.log(`New department ${answers.department} has been added!`);
                runProgram();
            }
        );
    });
}


function addRole() {
    const sql = 'SELECT * FROM department';
    connection.query(sql, (err, results) => {
        if (err) throw err;

        inquirer.prompt([
            {
                // Add role title 
                name: 'title',
                type: 'input',
                message: 'Role Title?',
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log('Please enter role title.');
                    }
                }
            },
            {
                // Add salary 
                name: 'salary',
                type: 'input',
                message: "Role's Salary?",
                validate: (value) => {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    console.log('Please enter salary');
                }
            },
            {
                // select department 
                name: 'department',
                type: 'rawlist',
                choices: () => {
                    let choiceArray = [];
                    for (let i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].name);
                    }
                    return choiceArray;
                },
                message: 'What department is this new role under?',
            }
        ]).then(answer => {
            let chosenDepartment;
            for (let i = 0; i < results.length; i++) {
                if (results[i].name === answer.department) {
                    chosenDepartment = results[i];
                }
            }
            connection.query('INSERT INTO role SET ?',
            {
                title: answer.title,
                salary: answer.salary,
                department_id: chosenDepartment.id
            },
            (err) => {
                if (err) throw err;
                console.log(`New role ${answer.title} has been added!`);
                runProgram();
            })
        });
    });
}

// Add employee first and last name 
function addEmployee() {
    const sql = 'SELECT * FROM employee, role';
    connection.query(sql, (err, results) => {
        if (err) throw err;

        inquirer.prompt([
            {
                name: 'firstName',
                type: 'input',
                message: 'What is the first name?',
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log('Please enter first name.');
                    }
                }
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'What is the last name?',
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log('Please enter the last name.');
                    }
                }
            },
            {
                // select employee role
                name: 'role',
                type: 'rawlist',
                choices: () => {
                    let choiceArray = [];
                    for (let i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].title);
                    }
                    let cleanChoiceArray = [...new Set(choiceArray)];
                    return cleanChoiceArray;
                },
                message: 'What is the role?'
            }
        ]).then(answer => {
            let chosenRole;

            for (let i = 0; i < results.length; i++) {
                if (results[i].title === answer.role) {
                    chosenRole = results[i];
                }
            }
            connection.query('INSERT INTO employee SET ?',
            {
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: chosenRole.id,
            },
            (err) => {
                if (err) throw err;
                console.log(`New employee ${answer.firstName} ${answer.lastName} has been added!`);
                runProgram();
            }
          )
        });
    });
}