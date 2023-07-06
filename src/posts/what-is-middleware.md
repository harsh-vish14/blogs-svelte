---
title: What is middleware ?
description: Introduction of Middleware, what is middleware and how to use it in express js server
slug: what-is-middleware
bannerImage: 'https://firebasestorage.googleapis.com/v0/b/images-to-link-converter.appspot.com/o/banner-3.webp?alt=media&token=2cb65358-a319-456c-bd63-2b211a76819e'
date: '2023-07-06'
categories:
  - NODE JS
  - EXPRESS
  - Middleware
published: true
githubLink: 'https://github.com/harsh-vish14/blogs-svelte/blob/master/src/posts/what-is-middleware.md'
---

## Overview

The `API Middleware` layer serves a vital role similar to middleware in other IT solutions. Positioned between the `client` level and the `server`, it acts as a bridge, facilitating `communication` and `interaction` between the two. It plays a crucial role in translating the requests and requirements of the client into actions and operations that can be executed within the core systems of record. By handling the integration and data transformation processes, the API Middleware layer ensures seamless connectivity and interoperability between different components of an IT ecosystem. It enhances the efficiency, scalability, and reliability of the overall system by abstracting complexities and enabling standardized interactions. Through its intermediary capabilities, the API Middleware layer enables smooth and effective communication, enabling the client to effectively interact with and leverage the functionalities of the underlying systems of record.

![Middleware Meme](https://firebasestorage.googleapis.com/v0/b/images-to-link-converter.appspot.com/o/middleware_meme.webp?alt=media&token=971c8800-c8ee-47ca-9c53-abc2a2d95054)

## roles of the API Middleware Layer

The API Middleware layer plays several important roles in an IT ecosystem. Let's delve into the typical roles and functions it performs:

- **Request Processing and Routing**:  
  --- The API Middleware layer acts as a central hub for processing incoming requests from clients. It receives API requests, validates them, and routes them to the appropriate backend systems or services based on predefined rules and configurations. This role ensures that client requests are correctly directed to the relevant systems for execution.
- **Data Transformation and Mediation**:  
  --- API Middleware often needs to handle data transformation and mediation tasks. It ensures that the data format, structure, and protocols used by the client are compatible with the backend systems of record. The middleware layer may perform tasks such as data mapping, normalization, or conversion between different formats (e.g., JSON to XML) to ensure seamless communication between the client and the backend systems.
- **Protocol Bridging**:  
  --- In an IT ecosystem, various protocols may be used for communication, such as REST, SOAP, or GraphQL. The API Middleware layer acts as a bridge, enabling clients and systems with different protocol requirements to interact seamlessly. It translates requests and responses between different protocols, allowing clients to communicate with backend systems regardless of their preferred communication standards.
- **Security and Authentication**:  
  --- API Middleware plays a crucial role in ensuring the security of API interactions. It often handles authentication and authorization processes, validating client credentials and ensuring that only authorized requests are processed. The middleware layer may also enforce security measures like encryption, rate limiting, or API key management to protect against unauthorized access or malicious activities.
- **Caching and Performance Optimization**:  
  --- To improve performance and reduce the load on backend systems, API Middleware can implement caching mechanisms. It can cache frequently requested data or responses, allowing subsequent requests to be served quickly without directly accessing the backend systems. By optimizing response times, the middleware layer enhances the overall system performance and reduces latency for client interactions.
- **Logging, Monitoring, and Analytics**:  
  --- API Middleware often incorporates logging, monitoring, and analytics capabilities to provide insights into the API traffic and system performance. It tracks metrics such as request/response times, error rates, and usage patterns. These insights help in identifying bottlenecks, detecting anomalies, and facilitating troubleshooting and performance optimization.
- **Versioning and Lifecycle Management**:  
  --- API Middleware supports versioning and lifecycle management of APIs. It enables the coexistence of multiple versions of an API to ensure backward compatibility while allowing for updates and improvements. The middleware layer helps manage API versioning, deprecation, and retirement, ensuring a smooth transition for clients and minimizing disruptions.
- **Error Handling and Fault Tolerance**:  
  --- In the event of errors or failures, API Middleware handles error responses, providing meaningful feedback to clients. It may transform error messages into standardized formats and return appropriate HTTP status codes or error responses. Additionally, the middleware layer can implement fault tolerance mechanisms, such as retry logic or failover strategies, to handle temporary failures or system outages gracefully.

## Use of Middleware in Node server

For this example we will be using a [express js](https://expressjs.com/) for the making [rest api](https://www.redhat.com/en/topics/api/what-is-a-rest-api)

First make a simple express server with get method:

```js
var express = require('express');
var app = express();

// GET method
app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(3000); // server is running on http://localhost:3000
```

Now if we run the above code, the server will listen on `http://localhost:3000` and when can see the `Hello World!` in browser.

Now we can add middleware function:

```js
const middlewareFunction = (req, res, next) => {
	console.log('Hello from middleware function');
	next();
};

app.use(middlewareFunction);
```

In the code snippet, we have a middleware function defined as `middlewareFunction`. This function takes three parameters: `req`, `res`, and `next`.

- `req` represents the request object containing information about the incoming HTTP request.
- `res` represents the response object that will be sent back to the client.
- `next` is a callback function that tells Express to move to the next middleware in the chain.

Inside the `middlewareFunction`, we have a simple console log statement: `console.log('Hello from middleware function')`. This log statement will be executed whenever this middleware function is called.

To apply this middleware function to an Express application, we use the `app.use()` method. In this case, `app.use(middlewareFunction)` is used to register the `middlewareFunction` to be executed for every incoming request to the application.

When a request is received by the application, Express will call this middleware function. The function will log the message "Hello from middleware function" to the console and then call the `next` function, which instructs Express to move to the next middleware or route handler in the chain.

> Middleware functions are useful for performing tasks such as `authentication`, `logging`, `error handling`, or `modifying the request/response` objects before passing them to the next middleware or route handler in the application. They provide a way to add functionality that runs before the final route handler is executed, allowing for modular and reusable code in an Express application.

The final code will look like:

```js
var express = require('express');
var app = express();

const middlewareFunction = (req, res, next) => {
	console.log('Hello from middleware function');
	next();
};

app.use(middlewareFunction);

// GET method
app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(3000); // server is running on http://localhost:3000
```
