# FullStackApplication
DATABASE SETUP
Obtain the MySQL database from the official website and install it on the local machine. Establish a root user with CRUD permissions.
Download and install MySQL Workbench for connecting to the MySQL database.
Open MySQL Workbench, set the host as localhost, port as 3306, and input the root user credentials.
Once connected, create a database and a "Surveys" table.
•
SQL commands:
•
Create a database:
CREATE DATABASE testDatabase;
•
Use the database:
USE testDatabase;
•
Create the Surveys table:
CREATE TABLE surveytable(id INT NOT NULL AUTO_INCREMENT, firstname VARCHAR(255), lastname VARCHAR(255), streetaddress VARCHAR(255), city VARCHAR(255), state VARCHAR(255), zipcode VARCHAR(10), telephone VARCHAR(15), email VARCHAR(255), dateofsurvey VARCHAR(25), likedmost
VARCHAR(255), interestedby VARCHAR(255), likelihood VARCHAR(255), comments VARCHAR(500), PRIMARY KEY(id));
•
Utilize this database and table in the backend application with the root user credentials.
FRONT-END APPLICATION
•
Develop the front-end application using Angular.
•
Install Angular CLI with the command: npm install -g @angular/cli.
•
Create a new Angular project: ng new swe642-assign3-fronend.
•
Generate necessary components:
•
Main Component: ng generate component main-page
•
Survey Component: ng generate component survey-page
•
Survey List Component: ng generate component list-of-surveys
•
Generate a service for making API calls: ng generate service survey.
•
Write HTML and CSS code in corresponding components, and define API call methods in the apiservice.service.ts file.
•
Run the application with the command: ng serve.
BACKEND APPLICATION
•
Develop the backend application using Spring Boot.
•
Add required dependencies and download the ZIP file from https://start.spring.io/.
•
Open the application in Eclipse IDE and write the APIs.
•
Create a repository and model class for database connection, defining the table schema for the survey form.
•
Create a controller and implement APIs for creating, updating, deleting, and listing records.
•
Run the application in Eclipse IDE. Store database credentials in the application.properties file, including the port number.
