'use strict';

let operations = {};

function getExpressPath(swaggerPath, mountpath) {
	mountpath = mountpath || '';

	let expressPath = swaggerPath;
	while (expressPath.indexOf('{') > -1) {
		expressPath = expressPath.replace('{', ':').replace('}', '');
	}

	if (!expressPath.startsWith(mountpath)) {
		throw new Error('Operation path is not located within sub application\'s mounted path');
	}

	return expressPath.substring(mountpath.length);
}

export function register(app, swaggerDefinition, isSubApplication) {
	Object.keys(swaggerDefinition.paths).forEach(pathName => {
		const pathSpec = swaggerDefinition.paths[pathName];

		Object.keys(pathSpec).forEach(httpMethod => {
			const operation = pathSpec[httpMethod];

			if (operation.operationId) {
				operations[operation.operationId] = { pathName, httpMethod, operation };
			}
		});
	});

	let operationArguments = {};

	function attachOperation(operationId, args) {
		const appPath = app.path();
		const operation = operations[operationId];

		if (!operation) {
			throw new Error(`Operation ID '${operationId}' is not defined`);
		}

		const expressPath = getExpressPath(operation.pathName, app.path());
		args[0] = expressPath;

		switch (operation.httpMethod) {
			case 'get':
				app.get.apply(app, args);
				break;
			case 'put':
				app.put.apply(app, args);
				break;
			case 'post':
				app.post.apply(app, args);
				break;
			case 'delete':
				app.delete.apply(app, args);
				break;
			case 'options':
				app.options.apply(app, args);
				break;
			case 'head':
				app.head.apply(app, args);
				break;
			case 'patch':
				app.patch.apply(app, args);
				break;
		}
	}

	app.on('mount', parent => {
		const operationIds = Object.keys(operationArguments);

		operationIds.forEach(operationId => {
			const args = operationArguments[operationId];
			attachOperation(operationId, args);
		});
	});

	app.op = function (operationId) {
		if (isSubApplication) {
			operationArguments[operationId] = arguments;
		} else {
			attachOperation(operationId, arguments);
		}
	};
}
