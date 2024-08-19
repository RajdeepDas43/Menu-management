# Menu Management System

This is a Node.js backend server for managing a menu system, including categories, sub-categories, and items. The server is built using Express.js and MongoDB, with Mongoose for data modeling. This project also includes input validation, error handling, and is designed to be easily extendable and scalable.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [Category Endpoints](#category-endpoints)
    - [Sub-Category Endpoints](#sub-category-endpoints)
    - [Item Endpoints](#item-endpoints)
    - [Search Endpoints](#search-endpoints)
  - [Request Validation](#request-validation)
  - [Error Handling](#error-handling)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- **CRUD Operations**: Create, Read, Update, and Delete categories, sub-categories, and items.
- **Search Functionality**: Search items by name.
- **Validation**: Input validation using `express-validator`.
- **Error Handling**: Comprehensive error handling with custom messages.
- **Scalability**: Built with a structure that is easily extendable.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RajdeepDas43/menu-management.git
   cd menu-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the MongoDB server:
   ```bash
   mongod
   ```

4. Start the application:
   ```bash
   npm start
   ```

The server should now be running on `http://localhost:3000`.

## Usage

### API Endpoints

#### Category Endpoints

- **Create a Category**  
  `POST /categories`  
  Request Body:
  ```json
  {
    "name": "Beverages",
    "image": "http://example.com/image.jpg",
    "description": "Drinks and refreshments",
    "taxApplicability": true,
    "tax": 10,
    "taxType": "Percentage"
  }
  ```

- **Get All Categories**  
  `GET /categories`

- **Get Category by ID**  
  `GET /categories/:id`

- **Update a Category**  
  `PUT /categories/:id`  
  Request Body:
  ```json
  {
    "name": "Updated Category Name"
  }
  ```

- **Delete a Category**  
  `DELETE /categories/:id`

#### Sub-Category Endpoints

- **Create a Sub-Category**  
  `POST /subcategories`  
  Request Body:
  ```json
  {
    "categoryId": "60d9f18b2b8e4e4a5f4b3a48",
    "name": "Hot Beverages",
    "image": "http://example.com/image.jpg",
    "description": "Coffee, tea, etc.",
    "taxApplicability": true,
    "tax": 5
  }
  ```

- **Get All Sub-Categories**  
  `GET /subcategories`

- **Get Sub-Categories by Category ID**  
  `GET /subcategories/category/:categoryId`

- **Get Sub-Category by ID**  
  `GET /subcategories/:id`

- **Update a Sub-Category**  
  `PUT /subcategories/:id`  
  Request Body:
  ```json
  {
    "name": "Updated Sub-Category Name"
  }
  ```

- **Delete a Sub-Category**  
  `DELETE /subcategories/:id`

#### Item Endpoints

- **Create an Item**  
  `POST /items`  
  Request Body:
  ```json
  {
    "categoryId": "60d9f18b2b8e4e4a5f4b3a48",
    "subCategoryId": "60d9f1d92b8e4e4a5f4b3a49",
    "name": "Espresso",
    "image": "http://example.com/image.jpg",
    "description": "Strong coffee",
    "taxApplicability": true,
    "tax": 2,
    "baseAmount": 50,
    "discount": 5,
    "totalAmount": 45
  }
  ```

- **Get All Items**  
  `GET /items`

- **Get Items by Category ID**  
  `GET /items/category/:categoryId`

- **Get Items by Sub-Category ID**  
  `GET /items/subcategory/:subCategoryId`

- **Get Item by ID**  
  `GET /items/:id`

- **Update an Item**  
  `PUT /items/:id`  
  Request Body:
  ```json
  {
    "name": "Updated Item Name"
  }
  ```

- **Delete an Item**  
  `DELETE /items/:id`

#### Search Endpoints

- **Search Items by Name**  
  `GET /items/search/:itemName`

### Request Validation

This project uses `express-validator` to validate incoming requests. Each endpoint that requires input data has validation rules applied to ensure data integrity. If validation fails, a 422 status code is returned with a list of validation errors.

### Error Handling

The project uses `http-errors` to create and handle errors in a structured way. The global error handler catches all errors and returns a JSON response with an appropriate status code and error message.

### Project Structure

```plaintext
menu-management/
├── models/
│   ├── Category.js
│   ├── SubCategory.js
│   ├── Item.js
├── routes/
│   ├── categories.js
│   ├── subCategories.js
│   ├── items.js
├── controllers/
│   ├── categoryController.js
│   ├── subCategoryController.js
│   ├── itemController.js
├── validators/
│   ├── categoryValidator.js
│   ├── subCategoryValidator.js
│   ├── itemValidator.js
├── middleware/
│   ├── errorHandler.js
├── app.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
```

### Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **mongoose**: Elegant MongoDB object modeling for Node.js.
- **express-validator**: Middleware for validating and sanitizing user input.
- **http-errors**: Create HTTP errors for Express.
- **body-parser**: Node.js body parsing middleware.
- **nodemon**: Tool that helps develop Node.js applications by automatically restarting the node application when file changes in the directory are detected.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Which database have you chosen and why?**
I chose MongoDB because it is a flexible, schema-less NoSQL database that works well with hierarchical data structures like categories, sub-categories, and items. It integrates smoothly with Node.js and allows for easy scaling and querying.

**Three things that you learned from this assignment:**
1. **Advanced API Design:** Crafting a RESTful API with complex nested relationships like categories and sub-categories.
2. **Error Handling in Node.js:** Implementing structured error handling and validation using `express-validator` and `http-errors` to improve API robustness.
3. **Performance Considerations:** Understanding the importance of database indexing and query optimization when dealing with nested data structures.

**What was the most difficult part of the assignment?**
The most challenging part was ensuring that the database interactions were efficient and that the API could handle nested data structures (categories, sub-categories, items) effectively, especially when implementing deep query functionalities and maintaining data integrity.

**What you would have done differently given more time?**
With more time, I would have implemented additional features like user authentication and authorization to secure the API. Also, I would explore integrating more complex search functionalities using MongoDB's full-text search capabilities and perhaps even setting up a more sophisticated caching mechanism to enhance performance for frequent read operations.
