# Full-Featured RESTful API 🚀🚀

## Description
This project is a RESTful API built using Node.js, Express.js, and MongoDB. It allows you to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. The API is designed to be efficient and secure, providing a solid foundation for any book management application.

## Features
- **Fetch all books**: Retrieve a list of all books in the database.
- **Fetch a single book**: Get details of a specific book by its ID.
- **Create a new book**: Add a new book to the database.
- **Update a book**: Modify details of an existing book.
- **Delete a book**: Remove a book from the database.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- morgan
- helmet
- cors

## DEPLOYMENT LINK :  [here](https://full-featured-restful-1n7ls5vne-saqibi4213s-projects.vercel.app)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Saqibi4213/full-featured_restful_api.git
   cd full-featured_restful_api  


## Copy code
-npm start
The server will run at http://localhost:5000.

#API Endpoints
- GET /api/books: Retrieve all books.
- GET /api/books/
- Retrieve a book by ID.
- POST /api/books: Create a new book.
- PUT /api/books/
- Update an existing book by ID.
- DELETE /api/books/
- Delete a book by ID.


# Testing with Postman
You can use Postman to test the API endpoints. Ensure the server is running before making requests.

1: GET All Books: Make a GET request to http://localhost:5000/api/books.
<br>
2: GET a Book: Make a GET request to http://localhost:5000/api/books/{id} (replace {id} with the book ID).
<br>
3: Create a New Book: Make a POST request to http://localhost:5000/api/books with a JSON body:
<br>

```
{
  "title": "Book Title",
  "author": "Author Name",
  "publishedYear": 2023,
  "genre": "Fiction"
}
```
4: Update a Book: Make a PUT request to http://localhost:5000/api/books/{id} with a JSON body to update the book.
<br>
5: Delete a Book: Make a DELETE request to http://localhost:5000/api/books/{id}.


## Author

- **Name**: Mehria Saqibi
- **Email**: [email](mosawermh@gmail.com)
- **GitHub**: [Saqibi4213]


Feel free to modify this `README.md` file to better fit your project's needs or specific details.