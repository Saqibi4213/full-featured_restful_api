# restful-api-database-integration 📟

## Overview 🎬
This project is a Node.js API built using Express and MongoDB. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on a user collection stored in a MongoDB database. The API interacts with a Mongoose model to manage user data, including fields such as name, age, phone number, and image.

## Features 🎯
- **Create User**: Add a new user to the database.
- **Read Users**: Fetch a list of all users or retrieve a specific user by ID.
- **Update User**: Modify user information.
- **Delete User**: Remove a user from the database.

## Technologies 📢
- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express**: A fast and minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database used to store the user data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## DEMO 📺
Deployment Link

## Installation and Setup 🔌
### Clone the repository:
```bash
git clone https://github.com/Saqibi4213/restful-api-with-db-integration.git
```

Copy code
npm start
The server will run at http://localhost:3000.

API Endpoints
1. Get all users
Endpoint: /users
Method: GET
Description: Fetches all users from the database.
curl http://localhost:3000/users
2. Get a user by ID 👧
Endpoint: /users/:id
Method: GET
Description: Fetches a user by their ID.
curl http://localhost:3000/users/{id}
3. Create a new user 👨‍🦰
Endpoint: /users
Method: POST
Description: Creates a new user with the provided data.
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"John Doe", "age":25, "phoneNo":123456789}'
4. Update a user by ID 🤦‍♂️
Endpoint: /users/:id
Method: PUT
Description: Updates an existing user's data.
curl -X PUT http://localhost:3000/users/{id} -H "Content-Type: application/json" -d '{"name":"Jane Doe", "age":30}'
5. Delete a user by ID 🧨
Endpoint: /users/:id
Method: DELETE
Description: Deletes a user from the database by their ID.
curl -X DELETE http://localhost:3000/users/{id}


## Author

- **Name**: Mehria Saqibi
- **Email**: [email](mosawermh@gmail.com)
- **GitHub**: [Saqibi4213]


Feel free to modify this `README.md` file to better fit your project's needs or specific details.