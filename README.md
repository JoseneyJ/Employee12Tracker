# Bootcamp Challenge 12 

# 12 SQL: Employee Tracker

## Your Task

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Because this Challenge will require the use of the `Inquirer` package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: `npm i inquirer@8.2.4`.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Video URL 
https://drive.google.com/file/d/1gSiIhydRYjMEqK1G9Xg97KA8L1ns6hbj/view

## Snippets 

<img width="991" alt="Screenshot 2023-05-13 at 10 22 02 PM" src="https://github.com/JoseneyJ/EmployeeTracker12/assets/119374215/dc96cfbb-cc30-4a34-b107-d8e9a7c5b19a">
<img width="991" alt="Screenshot 2023-05-13 at 10 22 15 PM" src="https://github.com/JoseneyJ/EmployeeTracker12/assets/119374215/5b58fe78-a1cd-4044-8288-e9edeaf63cff">
<img width="978" alt="Screenshot 2023-05-13 at 10 22 32 PM" src="https://github.com/JoseneyJ/EmployeeTracker12/assets/119374215/f3619be0-bdae-4b05-80f2-a267ae20b79f">
