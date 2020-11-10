const app = require('./app');

test('says hello', () => {
	expect(app.sayHello()).toBe('Hello');
});
