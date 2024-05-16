# Assistant-Backend

## Overview
The "assistant-backend" application is a Node.js backend system utilizing Express.js and MongoDB.
It offers CRUD APIs to manage assistant records, allowing creation, retrieval, updating, and deletion of assistant data. 
With a defined MongoDB schema for assistants, it efficiently handles HTTP requests and responses, providing a scalable solution for managing assistant information.

## Prerequisites
- Node.js
- MongoDB

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repository-name
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Setup Environment Variables
1. Create a `.env` file in the root directory.
2. Add your MongoDB URI:
    ```env
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
    ```

## Running the Application Locally
1. Start the application:
    ```sh
    npm start
    ```

## Using the Postman Collection
1. Open Postman.
2. Import the collection from the `postman` directory:
    - `postman/collection.json`
3. Follow the instructions within the Postman collection to interact with the API.


