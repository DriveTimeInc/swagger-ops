'use strict';

const assert = require('chai').assert;
const express = require('express');
const register = require('../lib/index').register;

describe('basic usage', function () {
	it('creates GET route', function () {
		// ARRANGE

		// define routes explicitly using express
		const controlApp = express();
		controlApp.get('/users/:id/billing', (req, res, next) => {
			res.sendStatus(501);
		});

		// Define routes using spec
		const spec = {
			swagger: '2.0',
			info: {
				version: '0.0.1',
				title: 'Example API',
				description: 'Example'
			},
			paths: {
				'/users/{id}/billing': {
					get: {
						'operationId': 'GetRoute'
					}
				}
			}
		};
		const testApp = express();
		register(testApp, spec);

		testApp.op('GetRoute', (req, res, next) => {
			res.sendStatus(501);
		});

		// ACT
		const controlResults = controlApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		const testResults = testApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		// ASSERT
		assert.sameDeepMembers(testResults, controlResults);
	});

	it('creates PUT route', function () {
		// ARRANGE

		// define routes explicitly using express
		const controlApp = express();
		controlApp.put('/users/:id/billing', (req, res, next) => {
			res.sendStatus(501);
		});

		// Define routes using spec
		const spec = {
			swagger: '2.0',
			info: {
				version: '0.0.1',
				title: 'Example API',
				description: 'Example'
			},
			paths: {
				'/users/{id}/billing': {
					put: {
						'operationId': 'PutRoute'
					}
				}
			}
		};
		const testApp = express();
		register(testApp, spec);

		testApp.op('PutRoute', (req, res, next) => {
			res.sendStatus(501);
		});

		// ACT
		const controlResults = controlApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		const testResults = testApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		// ASSERT
		assert.sameDeepMembers(testResults, controlResults);
	});

	it('creates POST route', function () {
		// ARRANGE

		// define routes explicitly using express
		const controlApp = express();
		controlApp.post('/users/:id/billing', (req, res, next) => {
			res.sendStatus(501);
		});

		// Define routes using spec
		const spec = {
			swagger: '2.0',
			info: {
				version: '0.0.1',
				title: 'Example API',
				description: 'Example'
			},
			paths: {
				'/users/{id}/billing': {
					post: {
						'operationId': 'PostRoute'
					}
				}
			}
		};
		const testApp = express();
		register(testApp, spec);

		testApp.op('PostRoute', (req, res, next) => {
			res.sendStatus(501);
		});

		// ACT
		const controlResults = controlApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		const testResults = testApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		// ASSERT
		assert.sameDeepMembers(testResults, controlResults);
	});

	it('creates DELETE route', function () {
		// ARRANGE

		// define routes explicitly using express
		const controlApp = express();
		controlApp.delete('/users/:id/billing', (req, res, next) => {
			res.sendStatus(501);
		});

		// Define routes using spec
		const spec = {
			swagger: '2.0',
			info: {
				version: '0.0.1',
				title: 'Example API',
				description: 'Example'
			},
			paths: {
				'/users/{id}/billing': {
					delete: {
						'operationId': 'DeleteRoute'
					}
				}
			}
		};
		const testApp = express();
		register(testApp, spec);

		testApp.op('DeleteRoute', (req, res, next) => {
			res.sendStatus(501);
		});

		// ACT
		const controlResults = controlApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		const testResults = testApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		// ASSERT
		assert.sameDeepMembers(testResults, controlResults);
	});

	it('creates OPTIONS route', function () {
		// ARRANGE

		// define routes explicitly using express
		const controlApp = express();
		controlApp.options('/users/:id/billing', (req, res, next) => {
			res.sendStatus(501);
		});

		// Define routes using spec
		const spec = {
			swagger: '2.0',
			info: {
				version: '0.0.1',
				title: 'Example API',
				description: 'Example'
			},
			paths: {
				'/users/{id}/billing': {
					options: {
						'operationId': 'OptionsRoute'
					}
				}
			}
		};
		const testApp = express();
		register(testApp, spec);

		testApp.op('OptionsRoute', (req, res, next) => {
			res.sendStatus(501);
		});

		// ACT
		const controlResults = controlApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		const testResults = testApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		// ASSERT
		assert.sameDeepMembers(testResults, controlResults);
	});

	it('creates HEAD route', function () {
		// ARRANGE

		// define routes explicitly using express
		const controlApp = express();
		controlApp.head('/users/:id/billing', (req, res, next) => {
			res.sendStatus(501);
		});

		// Define routes using spec
		const spec = {
			swagger: '2.0',
			info: {
				version: '0.0.1',
				title: 'Example API',
				description: 'Example'
			},
			paths: {
				'/users/{id}/billing': {
					head: {
						'operationId': 'HeadRoute'
					}
				}
			}
		};
		const testApp = express();
		register(testApp, spec);

		testApp.op('HeadRoute', (req, res, next) => {
			res.sendStatus(501);
		});

		// ACT
		const controlResults = controlApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		const testResults = testApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		// ASSERT
		assert.sameDeepMembers(testResults, controlResults);
	});

	it('creates PATCH route', function () {
		// ARRANGE

		// define routes explicitly using express
		const controlApp = express();
		controlApp.patch('/users/:id/billing', (req, res, next) => {
			res.sendStatus(501);
		});

		// Define routes using spec
		const spec = {
			swagger: '2.0',
			info: {
				version: '0.0.1',
				title: 'Example API',
				description: 'Example'
			},
			paths: {
				'/users/{id}/billing': {
					patch: {
						'operationId': 'PatchRoute'
					}
				}
			}
		};
		const testApp = express();
		register(testApp, spec);

		testApp.op('PatchRoute', (req, res, next) => {
			res.sendStatus(501);
		});

		// ACT
		const controlResults = controlApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		const testResults = testApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		// ASSERT
		assert.sameDeepMembers(testResults, controlResults);
	});

	it('throws on missing operationId', function () {
		// ARRANGE
		// Define routes using spec
		const spec = {
			swagger: '2.0',
			info: {
				version: '0.0.1',
				title: 'Example API',
				description: 'Example'
			},
			paths: {
				'/users/{id}/billing': {
					get: {
						'operationId': 'ExistingRoute'
					}
				}
			}
		};
		const testApp = express();
		register(testApp, spec);

		// ACT
		try {
			testApp.op('Not an operationId', (req, res, next) => {
				res.sendStatus(501);
			});
			// ASSERT
			assert.fail();
		} catch (ex) { }
	});

	it('allows spec operation without an operationId', function () {
		// ARRANGE

		// define routes explicitly using express
		const controlApp = express();
		controlApp.get('/users/:id/billing', (req, res, next) => {
			res.sendStatus(501);
		});

		// Define routes using spec
		const spec = {
			swagger: '2.0',
			info: {
				version: '0.0.1',
				title: 'Example API',
				description: 'Example'
			},
			paths: {
				'/users/{id}/billing': {
					get: {
						'operationId': 'RouteWithOperationId'
					},
					put: {
						// no operationId
					}
				}
			}
		};
		const testApp = express();
		register(testApp, spec);

		testApp.op('RouteWithOperationId', (req, res, next) => {
			res.sendStatus(501);
		});

		// ACT
		const controlResults = controlApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		const testResults = testApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		// ASSERT
		assert.sameDeepMembers(testResults, controlResults);
	});
});

describe('subapp usage', function () {
	it('creates route', function () {
		// ARRANGE

		// define routes explicitly using express
		const controlApp = express();
		const controlSubApp = express();
		controlSubApp.get('/:id/billing', (req, res, next) => {
			res.sendStatus(501);
		});
		controlApp.use('/users', controlSubApp);

		// Define routes using spec
		const spec = {
			swagger: '2.0',
			info: {
				version: '0.0.1',
				title: 'Example API',
				description: 'Example'
			},
			paths: {
				'/users/{id}/billing': {
					get: {
						'operationId': 'GetRoute'
					}
				}
			}
		};
		const testApp = express();
		const testSubApp = express();
		register(testSubApp, spec, true);

		testSubApp.op('GetRoute', (req, res, next) => {
			res.sendStatus(501);
		});
		testApp.use('/users', testSubApp);

		// ACT
		const controlResults = controlSubApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		const testResults = testSubApp._router.stack.filter(layer => layer.route).map(layer => {
			return { path: layer.route.path, methods: layer.route.methods };
		});

		// ASSERT
		assert.sameDeepMembers(testResults, controlResults);
	});

	it('does not create route when mounted at incorrect path', function () {
		// ARRANGE

		// define routes explicitly using express
		const controlApp = express();
		const controlSubApp = express();
		controlSubApp.get('/:id/billing', (req, res, next) => {
			res.sendStatus(501);
		});
		controlApp.use('/users', controlSubApp);

		// Define routes using spec
		const spec = {
			swagger: '2.0',
			info: {
				version: '0.0.1',
				title: 'Example API',
				description: 'Example'
			},
			paths: {
				'/users/{id}/billing': {
					get: {
						'operationId': 'GetRoute'
					}
				}
			}
		};
		const testApp = express();
		const testSubApp = express();
		register(testSubApp, spec, true);

		testSubApp.op('GetRoute', (req, res, next) => {
			res.sendStatus(501);
		});

		// ACT
		try {
			testApp.use('/paththatdoesnotmatchspec', testSubApp);
			// ASSERT
			assert.fail();
		} catch (ex) { }
	});
});
