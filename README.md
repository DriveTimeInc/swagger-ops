# Swagger Ops
Convenience utility for defining Express route handers by [Swagger OperationId](http://swagger.io/specification/#operationId), rather than by an explicit path and verb.

For example, once you have created your `swagger.json`, you can do this:

``` js
app.op('GetUserBillingInfo', (req, res, next) => {
	// TODO
});
```

Instead of this:

``` js
app.get('/users/:id/billing', (req, res, next) => {
	// TODO
});
```

The difference is subtle, but it allows you to defined your paths and verbs in one place without having to maintain them separately in code.  In doing so, `swagger.json` can be the single source of truth for both documentation and functionality.

## Basic Usage

1. Install: `npm install --save swagger-ops`
1. Write your API spec in `swagger.json` ensuring that each operation (route/verb combo) has an `operationId` which is unique across all operations.

	``` json
	{
		"swagger": "2.0",
		"info": {
			"version": "0.0.1",
			"title": "Artifact API",
			"description": "Example"
		},
		"paths": {
			"/users/{id}/billing": {
				"get": {
					"operationId": "GetUserBillingInfo"
					...
				},
				"put": {
					"operationId": "UpdateUserBillingInfo"
					...
				}
			}
		}
	}
	```

1. Require and register:

	``` js
	var express = require('express');
	var register = require('swagger-ops');
	var swagger = require('swagger.json');

	var app = express();
	register(app, swagger);
	```

1. Add route handlers:

	``` js
	app.op('GetUserBillingInfo', (req, res, next) => {
		// TODO
	});

	app.op('UpdateUserBillingInfo', (req, res, next) => {
		// TODO
	});
	```

1. Refactor the junk out of your API without having to worry about keeping Swagger and Express in sync!

## Sub-app Usage

You can also use `app.op()` in sub applications, providing that the mounted path of the sub app matches the beginning of the operation's path.

Considering the `swagger.json` from above, this would be fine:

``` js
// Create main app
var app = express();

// Create sub app for user routes
var userApp = express();
register(userApp, swagger, true);

userApp.op('GetUserBillingInfo', (req, res, next) => {
	// TODO
});

// Mount sub app
app.use('/users', userApp);
```

In that example, the route (`GET /users/{id}/billing`) starts with the mounted path of the sub app (`/users`).  Attempting to mount that same sub app at `/user-info` would result in an error at startup.  You could also mount at `/` which would work for any path.

Keep in mind, though, that the order that routes are defined and the order than sub applications are mounted determines the order in which they are evaluated.  The mounted path of a sub app also affects which routes are evalutated in what order.  Express handles the request with the first matching route, so take care when setting up your apps.