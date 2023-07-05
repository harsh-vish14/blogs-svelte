---
title: Full Stack Todo web App - Part 2 (backend)
description: Full stack - Frontend and backend of todo application. This is Backend implementation.
slug: todo-web-app-backend
bannerImage: 'https://firebasestorage.googleapis.com/v0/b/images-to-link-converter.appspot.com/o/banner-2.webp?alt=media&token=c344b7d3-0862-4e9a-a7ec-c595100766b6'
date: '2023-07-04'
categories:
  - NODE JS
  - EXPRESS
  - MONGO DB
  - REST API
published: true
githubLink: 'https://github.com/harsh-vish14/blogs-svelte/blob/master/src/posts/todo-web-app-backend.md'
---

In this `two-part tutorial`, we will be developing a todo application. In [Part 1](https://blog-harshvish.vercel.app/todo-web-app), we will focus on implementing the frontend using `HTML`, `CSS`, and `JavaScript`. Part 2 will cover the backend implementation using [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/).

Here [Github Repo](https://github.com/harsh-vish14/todo-backend)

## Install Node js

Visit node js [download page](https://nodejs.org/en) and download node js, after downloading is done just install the node js on your machine just setting all default options and finish.

To check node js running properly on your machine run the below command on your terminal it will output node version.

```sh
# command prompt
node -v

```

## Make Directory

Now once your node js is installed and running properly

Lets make directory throw commands

```sh
# command prompt
mkdir todo-server
```

`mkdir` this command is used to make directory followed by directory name and our project directory name is `todo-server`

```sh
# command prompt
cd todo-server
```

`cd` this command is used to move to the directory `todo-server` there we can install all required [node-modules](https://www.codemag.com/article/1709061/Introduction-to-Node-Modules)

## Creating package.json

First we have to make `package.json` file for this we have run below command

> Make sure your terminal is opened in correct folder

```sh
npm init
```

command `npm init` will make `package.json` file after running command.

```sh
package name: (todo-server) your-project-name
version: (1.0.0)
description: little bit of description about your node project
entry point: (index.js)
test command:
git repository:
keywords:
author: Harshkumar Vishwakarma
license: (ISC)
```

> you can leave every thing to default by running `npm init -y`

- `package name`: name of the project make it url friendly
- `version`: version of the project, if you want to change to other
- `description`: just a short description about your project
- `entry point`: make sure this should be app.js or index.js
- `test command`: for this project we had none i leave it blank
- `git repository`: git repository is not made till now, so i left it empty
- `keywords`: keywords for your project
- `author`: author of the project
- `license`: License of your project

now you will able to see `package.json` in your project folder.

## Installing Express

Now we have `package.json` file, we can install Express by running the command:

```sh
npm install express
```

After installing all `dependencies/Packages` now your package.json will look like this

```json
{
	"name": "your-project-name",
	"version": "1.0.0",
	"description": "little bit of description about your node project",
	"main": "index.js",
	"keywords": [],
	"author": "Harshkumar Vishwakarma",
	"license": "ISC",
	"dependencies": {
		"express": "^4.17.2"
	}
}
```

## basic requirements to run server

Create `index.js` at root of folder and paste the below code in index.js

```js
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = 5000;
app.listen(PORT, async () => {
	console.log(`Server running in http://localhost: mode on port ${PORT}`);
});
```

To start the server, go to your terminal and type:

```sh
node index.js
```

This will start the `server`. This bare-minimum application will listen on port `5000`. We make a request through our browser on `http://localhost:5000` and our server will respond with Hello World to which the browser is the client and the message will be shown there.

The first line of our code is using the require function to include the `express` module. This is how we include and use a package installed from npm in any JavaScript file in our project. Before we start using `Express`, we need to define an instance of it which handles the request and response from the server to the client. In our case, it is the variable app.

`app.get()` is a function that tells the server what to do when a get request at the given route is called. It has a callback function `(req, res)` that listen to the incoming request req object and respond accordingly using res response object. Both req and res are made available to us by the Express framework.

The req object represents the HTTP request and has properties for the request query string, parameters, body, and HTTP headers. The res object represents the HTTP response that an Express app sends when it gets an `HTTP` request. In our case, we are sending a text Hello World whenever a request is made to the route `/`.

Lastly, `app.listen()` is the function that starts a port and host, in our case the localhost for the connections to listen to incoming requests from a client. We can define the `port` number such as `5000`.

You can install `chalk` to make your terminal colorful run the below command:

```sh
npm install chalk
```

## connect with mongodb

For this we will be using local mongodb database, Install [mongodb compass](https://www.mongodb.com/products/compass) is a free interactive tool for querying, optimizing, and analyzing your MongoDB data.

To use mongodb on the node js server we need to use `mongoose`. Download it by running below command:

```sh
npm run mongoose
```

make a file `config/index.js` and paste the blow code:

```js
// config/index.js

const mongoose = require('mongoose');
const chalk = require('chalk');

module.exports = async () => {
	try {
		const conn = await mongoose.connect('mongodb://0.0.0.0:27017/', {
			useNewUrlParser: true
		});

		console.log(
			chalk.blueBright.underline(
				`Database Connected (${conn.connection.name}): ${conn.connection.host}`
			)
		);
		return conn.connection.db;
	} catch (err) {
		console.log(chalk.bold.redBright(`Error: ${err.message}`));
		throw new Error('Database not Connected');
	}
};
```

in first line we are importing `mongoose` module. second line is importing `chalk` module to add style in our terminal console.log

next we export a [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). We will working with [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) so we use async and wait in the function

In the function we are doing `mongoose.connect()` in the we are passing `mongodb connect url` and `rules` for mongodb

We have used `try-catch` block so if we got any `exception/error` that we can show in `console.log` and know the error.

to mak this function run, we have to call this function in main file `index.js`, update the below code the file:

```js
const connectDB = require('./config/index');

//...

const server = app.listen(PORT, async () => {
	await connectDB(); // add the function here
	console.log(
		chalk.yellowBright.bold(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
	);
});
```

## make project more robust

To make make our project more robust we need some helper functions.

First function will be to `catch exceptions and error` messages our server will throw `without crashing` server.

Make the below file and paste the code:

```js
// handler/errorHandler.js

const chalk = require('chalk');
const ErrorResponse = require('./ErrorResponse');
/**
 * @description it helps for showing errors and warnings without crashing the server
 * @return {error} show error in console
 */
module.exports = (err, req, res, next) => {
	let error = { ...err };
	error.message = err.message;
	error.errors = err.errors;

	// log to console for development
	console.log(chalk.bold.redBright(err));
	console.log(err);

	// Mongoose Bad Object ID (Cast Error)
	if (err.name === 'CastError' && err.kind === 'ObjectId') {
		// console.log(err);
		const message = `No resource found for the requested id: ${err.value}`;
		error = new ErrorResponse(message, 404);
	} // Mongoose Bad Value (Cast Error)
	else if (err.name === 'CastError') {
		const message = `We look at everywhere. But not found any matching resources`;
		error = new ErrorResponse(message, 400);
	}

	// Mongoose Duplication Error (Review Duplication)
	if (err.name === 'MongoError' && err.keyPattern.bootcamp && err.keyPattern.user) {
		const message = `You already added a review to this bootcamp`;
		error = new ErrorResponse(message, 403);
	}

	// Duplication in Document field
	else if (err.name === 'MongoError' && err.code === 11000) {
		console.log(err);
		const duplicationKey = Object.keys(err.keyPattern)[0];
		const duplicationValue = err.keyValue[duplicationKey];
		const message = `This "${duplicationValue}" ${duplicationKey} already exists. Please choose another ${duplicationKey} for this resource.`;
		error = new ErrorResponse(message, 400);
	} // Other Mongo Error Codes
	else if (err.name === 'MongoError') {
		const message = `Your request has some bad parameters. ${error.message}`;
		error = new ErrorResponse(message, 400);
	}

	// Mongoose Validation Error
	if (err.name === 'ValidationError') {
		const message = Object.values(err.errors).map((it) => {
			return ` ${it.message}`;
		});
		error = new ErrorResponse(message, 400);
	}

	// Type Error response
	if (err.name === 'TypeError') {
		const message = `An unknown error occurred while processing your request. Please try again later.`;
		error = new ErrorResponse(message, 500);
	}

	return res.status(error.statusCode || 500).json({
		success: false,
		message: error.message.trim() || 'Server Error',
		errors: error.errors
	});
};
```

For showing errors we are using `ErrorResponse` so make this function we need one more file in helper folder `ErrorResponse.js`

```js
/**
 * @description it helps for showing errors and warnings without crashing the server
 * @return {error} show error in console or send with response to client with success false
 */
class ErrorResponse extends Error {
	constructor(...args) {
		super(args[0]);
		this.statusCode = args[1];
		this.errors = args[2];
	}
}
module.exports = ErrorResponse;
```

Now after making basic `setup is done`, We have connect to mongodb Database.

## Mongodb Schema

Once `mongodb` is connected and running we need a [Schema](https://www.mongodb.com/docs/atlas/app-services/schemas/).

```js
// models/Todo.js

const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			require: [true, 'Pleas provide a todo name'],
			trim: true
		},
		detail: {
			type: String,
			trim: true,
			default: ''
		},
		done: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Todo', todoSchema);
```

Here's a breakdown of the code:

- The code begins by requiring the 'mongoose' module, which is the ODM library for MongoDB.
- It defines a new schema called `todoSchema` using the `mongoose.Schema` constructor. A schema defines the structure and validation rules for the documents in a MongoDB collection.
- Inside the `todoSchema`, there are three fields defined:
  - a. `title`: This field represents the title of the todo item. It is of type String and is required (`require: [true, 'Please provide a todo name']`). The `trim: true` option removes any leading or trailing whitespace from the string value.
  - b. `detail`: This field represents additional details for the todo item. It is of type String and has a `trim: true` option to remove leading or trailing whitespace. It also has a `default: ''` option, which means if no value is provided for this field, it will default to an empty string.
  - c. `done`: This field represents the completion status of the todo item. It is of type Boolean and has a `default: false` option, which means if no value is provided for this field, it will default to `false`.
- The second argument passed to the `mongoose.Schema` constructor is an options object. In this case, `{ timestamps: true }` is specified, which tells Mongoose to automatically add two fields (`createdAt` and `updatedAt`) to the documents based on the current timestamp when they are created or updated.
- Finally, the code exports the model by calling `mongoose.model('Todo', todoSchema)`. This creates a Mongoose model named 'Todo' based on the `todoSchema` and makes it available for use in other parts of the application.

## Todo operations Function

Now we can start working on routes, for this we can two approaches.

- Adding all routes in `index.js` our main file on project.
- Making a separate file `controllers/todoList.js` to make sure our code is not all in one place.

We will be using second option.

add the following code in the file:

### Get Todo Lists

```js
// controllers/todoList.js

const ErrorResponse = require('../helper/ErrorResponse');
const todo = require('../models/Todo');

exports.getAllTodo = async (req, res) => {
	const todos = await todo.find({}).sort({ createdAt: -1 });
	return res.status(200).json(todos);
};
```

function called `getAllTodo` that handles the retrieval of all todo items. Here's how it works:

- The function is exported using the `exports` keyword, making it accessible to other parts of the application that import this module.
- The function takes two parameters, `req` and `res`, which represent the request and response objects of an HTTP request.
- Within the function, it uses `await` to make an asynchronous call to the `find` method of the `todo` model. The `find` method is used to retrieve documents from a MongoDB collection based on specified conditions. In this case, an empty object `{}` is passed as the condition, which means it will fetch all documents from the collection.
- The retrieved todo items are sorted in descending order based on the `createdAt` field, indicated by `{ createdAt: -1 }` passed as an argument to the `sort` method. This means the most recently created todos will appear first.
- The `await` keyword ensures that the execution of the function waits for the `find` operation to complete before proceeding to the next line.
- The retrieved `todos` are then sent as a JSON response back to the client using the `res.status(200).json(todos)` method. The `status(200)` sets the HTTP status code to 200, indicating a successful request, and `json(todos)` converts the `todos` array to JSON format and sends it as the response body.

> In summary, this function retrieves all todo items from the database, sorts them based on their creation timestamps, and sends the sorted todos as a JSON response to the client.

### Create a Todo item

```js
// controllers/todoList.js


// ...

exports.createTodo = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    throw new ErrorResponse("Todo name cannot be empty", 400);
  }
  let todoData = await todo.create({ title });
  return res
    .status(200)
    .json({ data: todoData, message: "Added successfully" });
```

This code snippet defines an asynchronous function called `createTodo` that handles the creation of a new todo item. Let's break it down:

- The function is exported using the `exports` keyword, making it accessible to other parts of the application that import this module.
- The function takes two parameters, `req` and `res`, which represent the request and response objects of an HTTP request.
- Within the function, it extracts the `title` field from the request body using destructuring assignment: `const { title } = req.body;`. This assumes that the request body contains a `title` field.
- It then checks if the `title` field is empty or falsy (`!title`). If it is empty, it throws a custom error using the `ErrorResponse` class or module. The `throw` keyword is used to throw an exception, and `ErrorResponse` is likely a custom class or module that creates consistent error responses. The error message is set to "Todo name cannot be empty", and the HTTP status code is set to 400 (Bad Request).
- If the `title` field is not empty, the code proceeds to the next line, where it creates a new todo item in the database using the `create` method of the `todo` model. The `create` method is a convenience method provided by Mongoose for creating and saving documents in the corresponding MongoDB collection. It takes an object as an argument, and in this case, `{ title }` is passed to create a new todo with the provided title.
- The `await` keyword is used to wait for the creation operation to complete before moving on to the next line.
- The created `todoData` is then sent as a JSON response back to the client. The response includes a success message as well. The `res.status(200)` sets the HTTP status code to 200 (OK), and `json({ data: todoData, message: "Added successfully" })` sends the `todoData` object and a success message in JSON format as the response body.

> In summary, this function handles the creation of a new todo item. It checks if the `title` field is empty and throws an error if it is, otherwise, it creates a new todo item in the database and sends a JSON response with the created todo item and a success message back to the client.

### Update todo Task

```js
// controllers/todoList.js

// ..

exports.updateTodo = async (req, res) => {
	const { title, content } = req.body;
	const { todoId } = req.params;
	if (!title) {
		throw new ErrorResponse('Todo name cannot be empty', 400);
	}
	const exitingTodo = await todo.findOne({ _id: todoId });
	if (!exitingTodo) {
		throw new ErrorResponse('Todo not found', 404);
	}

	await todo.findOneAndUpdate({ _id: todoId }, { title: title, detail: content });
	const updatedTodo = await todo.findOne({ _id: todoId });
	return res.status(200).json({ data: updatedTodo, message: 'Updated successfully' });
};
```

This code snippet defines an asynchronous function called `updateTodo` that handles the updating of a todo item. Let's go through the code step by step:

- The function is exported using the `exports` keyword, making it accessible to other parts of the application that import this module.
- The function takes two parameters, `req` and `res`, which represent the request and response objects of an HTTP request.
- Within the function, it extracts the `title` and `content` fields from the request body using destructuring assignment: `const { title, content } = req.body;`. This assumes that the request body contains both `title` and `content` fields.
- It also extracts the `todoId` from the request parameters using destructuring assignment: `const { todoId } = req.params;`. This assumes that the request URL includes a parameter named `todoId` that represents the ID of the todo item to be updated.
- The code then checks if the `title` field is empty or falsy (`!title`). If it is empty, it throws a custom error using the `ErrorResponse` class or module, with an error message of "Todo name cannot be empty" and an HTTP status code of 400 (Bad Request).
- If the `title` field is not empty, the code proceeds to the next line, where it retrieves the existing todo item from the database using the `findOne` method of the `todo` model. The `findOne` method is used to find a single document in the MongoDB collection based on the specified condition. In this case, it searches for a document with the `_id` field matching the `todoId` extracted from the request parameters.
- If no existing todo item is found (`!exitingTodo`), the code throws a custom error with a message of "Todo not found" and an HTTP status code of 404 (Not Found).
- If an existing todo item is found, the code proceeds to the next line, where it uses the `findOneAndUpdate` method of the `todo` model to update the todo item. The `findOneAndUpdate` method finds a single document based on the specified condition and updates it with the provided data. In this case, it searches for a document with the `_id` field matching the `todoId` and updates its `title` and `detail` fields with the new values extracted from the request body (`{ title: title, detail: content }`).
- The `await` keyword is used to wait for the update operation to complete before moving on to the next line.
- After updating the todo item, the code retrieves the updated todo item from the database using the `findOne` method again.
- The updated todo item is then sent as a JSON response back to the client. The response includes the updated todo item (`updatedTodo`) and a success message. The `res.status(200)` sets the HTTP status code to 200 (OK), and `json({ data: updatedTodo, message: "Updated successfully" })` sends the `updatedTodo` object and the success message in JSON format as the response body.

> In summary, this function handles the updating of a todo item. It checks if the `title` field is empty and throws an error if it is. It then searches for the existing todo item based on the provided `todoId` and throws an error if it is not found. If the existing todo item is found, it updates the `title` and `detail` fields with the new values and sends a JSON response with the updated todo item and a success message back to the client.

### Delete todo Task

```js
// controllers/todoList.js

//...
exports.deleteTodo = async (req, res) => {
	const { todoId } = req.params;
	const exitingTodo = await todo.findOne({ _id: todoId });
	if (!exitingTodo) {
		throw new ErrorResponse('Todo not found', 404);
	}
	await todo.findOneAndDelete({ _id: todoId });
	return res.status(200).json({ message: 'Todo deleted successfully' });
};
```

This code snippet defines an asynchronous function called `deleteTodo` that handles the deletion of a todo item. Let's go through the code step by step:

- The function is exported using the `exports` keyword, making it accessible to other parts of the application that import this module.
- The function takes two parameters, `req` and `res`, which represent the request and response objects of an HTTP request.
- Within the function, it extracts the `todoId` from the request parameters using destructuring assignment: `const { todoId } = req.params;`. This assumes that the request URL includes a parameter named `todoId` that represents the ID of the todo item to be deleted.
- The code then retrieves the existing todo item from the database using the `findOne` method of the `todo` model. The `findOne` method is used to find a single document in the MongoDB collection based on the specified condition. In this case, it searches for a document with the `_id` field matching the `todoId` extracted from the request parameters.
- If no existing todo item is found (`!exitingTodo`), the code throws a custom error using the `ErrorResponse` class or module. The error message is set to "Todo not found", and the HTTP status code is set to 404 (Not Found).
- If an existing todo item is found, the code proceeds to the next line, where it uses the `findOneAndDelete` method of the `todo` model to delete the todo item. The `findOneAndDelete` method finds a single document based on the specified condition and deletes it from the collection. In this case, it searches for a document with the `_id` field matching the `todoId`.
- The `await` keyword is used to wait for the deletion operation to complete before moving on to the next line.
- After deleting the todo item, the code sends a JSON response back to the client with a success message. The response includes the message "Todo deleted successfully". The `res.status(200)` sets the HTTP status code to 200 (OK), and `json({ message: "Todo deleted successfully" })` sends the success message in JSON format as the response body.

> In summary, this function handles the deletion of a todo item. It searches for the existing todo item based on the provided `todoId` and throws an error if it is not found. If the existing todo item is found, it deletes it from the database and sends a JSON response with a success message back to the client.

```js
// controllers/todoList.js

// ...
exports.markAsDone = async (req, res) => {
	const { isDone, todoId } = req.params;
	const exitingTodo = await todo.findOne({ _id: todoId });
	if (!exitingTodo) {
		throw new ErrorResponse('Todo not found', 404);
	}
	await todo.findOneAndUpdate({ _id: todoId }, { done: isDone === 'done' });
	return res.status(200).json({
		message: `status changed successfully to ${isDone === 'done' ? 'done' : 'not done'}`
	});
};
```

This code snippet defines an asynchronous function called `markAsDone` that handles marking a todo item as done or not done. Let's go through the code step by step:

- The function is exported using the `exports` keyword, making it accessible to other parts of the application that import this module.
- The function takes two parameters, `req` and `res`, which represent the request and response objects of an HTTP request.
- Within the function, it extracts the `isDone` and `todoId` fields from the request parameters using destructuring assignment: `const { isDone, todoId } = req.params;`. This assumes that the request URL includes parameters named `isDone` and `todoId`, where `isDone` represents the new status ("done" or "not done") and `todoId` represents the ID of the todo item to be marked.
- The code then retrieves the existing todo item from the database using the `findOne` method of the `todo` model. The `findOne` method is used to find a single document in the MongoDB collection based on the specified condition. In this case, it searches for a document with the `_id` field matching the `todoId` extracted from the request parameters.
- If no existing todo item is found (`!exitingTodo`), the code throws a custom error using the `ErrorResponse` class or module. The error message is set to "Todo not found", and the HTTP status code is set to 404 (Not Found).
- If an existing todo item is found, the code proceeds to the next line, where it uses the `findOneAndUpdate` method of the `todo` model to update the `done` field of the todo item. The `findOneAndUpdate` method finds a single document based on the specified condition and updates it with the provided data. In this case, it searches for a document with the `_id` field matching the `todoId` and updates its `done` field based on the value of `isDone === "done"`. If `isDone` is equal to "done", the `done` field will be set to `true`; otherwise, it will be set to `false`.
- The `await` keyword is used to wait for the update operation to complete before moving on to the next line.
- After marking the todo item, the code sends a JSON response back to the client with a success message indicating the new status. The response message is dynamically generated based on the value of `isDone`. If `isDone` is equal to "done", the message will state that the status has changed successfully to "done"; otherwise, it will state that the status has changed successfully to "not done". The response is sent with an HTTP status code of 200 (OK).

> In summary, this function handles marking a todo item as done or not done. It searches for the existing todo item based on the provided `todoId` and throws an error if it is not found. If the existing todo item is found, it updates the `done` field based on the value of `isDone` and sends a JSON response with a success message indicating the new status back to the client.

# Routing

Now our functions are ready, just need to connect it with `route`

Now make mail route handler which will take care of main routers

```js
// routers/index.js

const express = require('express');
const router = express.Router();
const todoRouters = require('./operations/index');

router.use('/', todoRouters);
module.exports = router;
```

This code snippet sets up a router using Express and exports it for use in other parts of the application. Let's break down the code:

- The code starts by importing the `express` module, which is a web application framework for Node.js that simplifies the process of building web servers and APIs.
- The code then creates a new router instance using `express.Router()`. The router object allows us to define routes and their corresponding handlers.
- Next, it imports the `todoRouters` from the "./operations/index" file. The `todoRouters` is an Express router object that contains the route handlers for various operations related to todos (e.g., create, read, update, delete).
- The `router.use()` method is used to mount the `todoRouters` on the root path ("/") of the router. This means that any incoming requests that match the root path will be forwarded to the `todoRouters` for further handling.
- Finally, the router object is exported using `module.exports`, making it available for other parts of the application to use.

> In summary, this code sets up a router using Express, imports the route handlers for todo operations, and mounts those handlers on the root path ("/") of the router. This allows the application to handle requests related to todos using the defined route handlers.

Now router is done, we need to connect it with routes

```js
const express = require('express');
const {
	createTodo,
	getAllTodo,
	updateTodo,
	deleteTodo,
	markAsDone
} = require('../../controllers/todoList');
const router = express.Router();
router.route('/').get(getAllTodo);
router.route('/').post(createTodo);
router.route('/:todoId').put(updateTodo);
router.route('/:todoId').delete(deleteTodo);
router.route('/:isDone/:todoId').patch(markAsDone);

module.exports = router;
```

This code snippet sets up a router for handling different routes related to a todo list. It imports the necessary controller functions from the `../../controllers/todoList` file, maps them to specific HTTP methods and routes, and exports the router for use in other parts of the application. Let's go through the code step by step:

- The code starts by importing the `express` module, which is a web application framework for Node.js.
- The code then imports the necessary controller functions (`createTodo`, `getAllTodo`, `updateTodo`, `deleteTodo`, `markAsDone`) from the `../../controllers/todoList` file. These functions handle the corresponding operations related to the todo list, such as creating a new todo, retrieving all todos, updating a todo, deleting a todo, and marking a todo as done.
- Next, a new router instance is created using `express.Router()`. The router object allows us to define routes and their corresponding handlers.
- The router is then configured using the `router.route()` method to define the different routes and associate them with the respective controller functions.
  - The route `router.route("/").get(getAllTodo)` maps a GET request to the root path ("/") to the `getAllTodo` controller function. This route is used to retrieve all todos.
  - The route `router.route("/").post(createTodo)` maps a POST request to the root path ("/") to the `createTodo` controller function. This route is used to create a new todo.
  - The route `router.route("/:todoId").put(updateTodo)` maps a PUT request to the "/:todoId" path to the `updateTodo` controller function. This route is used to update a specific todo identified by its `todoId`.
  - The route `router.route("/:todoId").delete(deleteTodo)` maps a DELETE request to the "/:todoId" path to the `deleteTodo` controller function. This route is used to delete a specific todo identified by its `todoId`.
  - The route `router.route("/:isDone/:todoId").patch(markAsDone)` maps a PATCH request to the "/:isDone/:todoId" path to the `markAsDone` controller function. This route is used to mark a specific todo identified by its `todoId` as done or not done based on the value of `isDone`.
- Finally, the router object is exported using `module.exports`, making it available for other parts of the application to use.

> In summary, this code sets up a router using Express, imports the necessary controller functions for handling todo-related operations, maps these functions to specific routes and HTTP methods, and exports the router for use in other parts of the application.

## Adding all to main file

All functions,routes and database is done connecting, so now we can all all ingredient to our final dish

```js
// index.js

const cors = require('cors');
const express = require('express');
const connectDB = require('./config/index');
const routes = require('./routers');
const chalk = require('chalk');
const errorHandler = require('./helper/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', routes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, async () => {
	await connectDB();
	console.log(
		chalk.yellowBright.bold(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
	);
});

// Handle unhandled Promise rejections
process.on('unhandledRejection', (err) => {
	console.log(chalk.bold.redBright(`Error: ${err.message}`));

	console.log(err);

	server.close(() => {
		console.log(chalk.bold.redBright('Server closed due to unhandled promise rejection'));
		process.exit(1);
	});
});
```

We are adding `cors` so that, we need to use this api routes on client side.

To run the project just need to run the below command:

```sh
npm index.js
```
