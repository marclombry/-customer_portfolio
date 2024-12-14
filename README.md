# Customer Portfolio

This project allows you to manage your customer portfolio. You can register users, log in, add customers to your portfolio, send emails, and more. It includes a MySQL database to store user and customer data, secure authentication with JWT, and email functionality.

## Features

- **User Authentication**: Register and log in users with secure password hashing.
- **Customer Management**: Add, view, and manage customer information (e.g., name, email).
- **Email Sending**: Send emails to selected customers or all customers at once.
- **Data Import/Export**: Import and export customer data as needed.
- **JWT Authentication**: Secure user authentication using JSON Web Tokens (JWT).
- **MySQL Integration**: MySQL database for storing user and customer data.

## Tech Stack

- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Web framework for building the REST API.
- **TypeScript**: Type-safe JavaScript for better code quality.
- **MySQL**: Database for storing user and customer data.
- **Bcrypt**: Password hashing for secure user authentication.
- **JWT (jsonwebtoken)**: For generating secure login tokens.
- **Nodemailer**: For sending emails to customers.
- **mysql2**: For connecting to and querying the MySQL database.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (>= v16.0) - Download it from [nodejs.org](https://nodejs.org/)
- **MySQL** - Download and install MySQL from [mysql.com](https://www.mysql.com/) or use a service like [XAMPP](https://www.apachefriends.org/index.html).
- **npm** or **yarn** - Package managers to install dependencies.

## Getting Started

Follow these steps to get the project up and running on your local machine:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/marclombry/customer_portfolio.git
cd customer_portfolio
