Middleware functions in Express are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. Middleware functions can execute any code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function in the stack.

### Types of Middleware
1. **Application-Level Middleware**: Bound to an instance of the `express` object.
2. **Router-Level Middleware**: Bound to an instance of `express.Router()`.
3. **Error-Handling Middleware**: Defined with four arguments: `(err, req, res, next)`.
4. **Built-In Middleware**: Included with Express (e.g., `express.json()`, `express.urlencoded()`).
5. **Third-Party Middleware**: Added to your application by installing and requiring them (e.g., `morgan`, `body-parser`).

### Using Middleware

#### 1. Application-Level Middleware
Application-level middleware is bound to an instance of the `express` object using `app.use()` or `app.METHOD()`, where `METHOD` is the HTTP method (e.g., `get`, `post`, etc.).

```javascript
const express = require('express');
const app = express();

// Example of application-level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

#### 2. Router-Level Middleware
Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of `express.Router()`.

```javascript
const express = require('express');
const app = express();
const router = express.Router();

// Example of router-level middleware
router.use((req, res, next) => {
  console.log('Router Time:', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('Hello from Router!');
});

app.use('/router', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

#### 3. Error-Handling Middleware
Error-handling middleware functions are defined with four arguments: `(err, req, res, next)`. These functions are used to handle errors that occur in the application.

```javascript
const express = require('express');
const app = express();

// Example of error-handling middleware
app.use((req, res, next) => {
  const err = new Error('Something went wrong');
  err.status = 500;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      message: err.message
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

#### 4. Built-In Middleware
Express has some built-in middleware functions that you can use to handle common tasks.

```javascript
const express = require('express');
const app = express();

// Example of built-in middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

app.post('/data', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

#### 5. Third-Party Middleware
You can add third-party middleware to your application by installing the middleware package and requiring it in your code.

```javascript
const express = require('express');
const morgan = require('morgan');
const app = express();

// Example of third-party middleware
app.use(morgan('dev')); // Logs HTTP requests

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Order of Middleware
The order in which middleware functions are added is important. Middleware functions are executed sequentially, in the order they are defined.

```javascript
const express = require('express');
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this example, "Middleware 1" and "Middleware 2" will be logged to the console in order before the response is sent.

### Practical Example
Here's a more comprehensive example that combines different types of middleware in a real-world scenario:

```javascript
const express = require('express');
const morgan = require('morgan');
const app = express();

// Built-in middleware to parse JSON
app.use(express.json());

// Third-party middleware for logging
app.use(morgan('dev'));

// Application-level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Route-level middleware
app.get('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
}, (req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
}, (req, res) => {
  res.send('User Info');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

