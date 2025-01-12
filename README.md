# Expense Tracker

This is an Expense Tracker application built with React.js, Node.js, and MongoDB. The application allows users to manage their expenses efficiently. Users can create, view, edit, delete, and analyze their expenses using Pie and Bar charts for better insights.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Entity Relationship Diagram](#entity-relationship-diagram)
- [Flow of the Application ](#flow-of-the-application)
- [View Postman Collection](#api-documentation)

## Getting Started

Follow these instructions to set up and run the Expense Tracker application on your local machine for development and testing purposes.

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running on your machine or access to a MongoDB Atlas cluster.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/atulv2861/expense-tracker.git
   cd expense-tracker
   ```
    ## Backend
    1. Path
        ```base
        cd serve
        ```
    2. Install dependencies:
       ```base 
       npm install
        ```
    3. Create a .env file in the root directory and add your MongoDB connection string:
       ```base 
       MONGO_URI=mongodb://localhost:27017/expense-tracker
       PORT:5000
        ```
    4. Start Server
        ```base
        npm run start
        ```
    ## Frontend
    1. Path
        ```base
        cd client
        ```
    2. Install dependencies:
       ```base 
       npm install
        ```
    3. Start Server
        ```base
        npm start
        ```
    4. Open Application
        ```base
        Open in your browser : http://localhost:3000/
        ```
## Entity Relationship Diagram

![ER Diagram](https://i.imgur.com/axaNY4N.jpeg)

```
    TABLE Users {
    _id ObjectId
    name String
    email String
    password String
    created_at timestamp
    updated_at timestamp
}

TABLE Expenses {
    _id Object
    amount Integer
    category String
    description String
    user_id ObjectId
    date date
    created_at timestamp
    updated_at timestamp
    
}

Ref: Expenses.user_id > Users._id 
```
## Flow of the Application

i. Register 
- Users can register by entering their name, email, and password.  
- Clicking on the "Register" button will save the user's information in the application database.  

ii. Login
- After successful registration, users can navigate to the login page.  
- By entering their registered email and password, users can log in to the application.  
- Upon login, the user will be redirected to the application dashboard.  

iii. Add Expenses 
- Once logged in, users can add their expenses by filling out the form with details like amount, category, description, and date.  
- Clicking on the "Add Expense" button will save the expense and associate it with the logged-in user.  

iv. Expenses List  
- After adding expenses, all added expenses will be displayed below the expense form on the same page.  
- Each expense in the list will show the category, description, amount, and date.  

v. Edit/Delete Expenses  
- Each expense in the list has associated Edit and Delete buttons:  
  - Edit: 
    - Clicking on the "Edit" button opens the expense details in the Add/Edit Expense Form.  
    - Users can update the expense information and save the changes.  
  - Delete:  
    - Clicking on the "Delete" button will remove the expense permanently from the database.  

vi. Dashboard  
- The Navbar includes a "Dashboard" button that navigates to the dashboard page.  
- The Dashboard provides visual insights into expenses:  
  - A pie chart to show the distribution of expenses by category.  
  - A bar chart to display monthly expenses.  


# API Documentation

You can view and import the Postman collection from the following link:

[View Postman Collection](https://documenter.getpostman.com/view/40953175/2sAYQWKYor)
