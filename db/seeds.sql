USE tracker_db;

INSERT INTO department (name)
VALUES ('Engineering'),
       ('Finance'),
       ('Customer Service'),
       ('HR'),
       ('Sales'),
       ('IT');

INSERT INTO role (title, salary, department_id)
VALUES ('CEO Senior Engineer', 400000, 1),
       ('Software Engineer', 140000, 1),
       ('Contoller', 120000, 2),
       ('Customer Service Rep', 50000, 3),
       ('HR Manager', 55000, 4),
       ('CEO Sales', 150000, 5),
       ('Director of IT', 20000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Joseney', 'Jean Pierre', 1, NULL),
       ('James', 'Hunter', 2, 2),
       ('Cornelius', 'Pumpernickle', 3, 5),
       ('Christian','Juste', 4, 4),
       ('Janet', 'James', 5, NULL ),
       ('Jianni', 'June', 6, NULL),
       ('Nicole', 'William', 7, NULL);
