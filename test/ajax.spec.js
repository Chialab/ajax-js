import { Ajax } from '../src/ajax.js';

/* globals describe, before, after, beforeEach, it, assert, sinon */
describe('Unit: Ajax', function() {
    this.timeout(20 * 1000);

    let root = 'http://jsonplaceholder.typicode.com';

    describe('Simple requests', () => {
        let callback = sinon.spy();
        let server;
        before(() =>
            new Promise((resolve) => {
                server = sinon.fakeServer.create();
                Ajax.request(`${root}/posts`).then((res) => {
                    if (res && res.length) {
                        callback(null, res);
                    }
                    resolve();
                }, resolve);
                server.requests[0].respond(
                    200,
                    { 'Content-Type': 'application/json' },
                    JSON.stringify([
                        {
                            id: 1,
                            title: 'Article 1',
                        },
                    ])
                );
                server.restore();
            })
        );
        it('should exec a simple request', () => {
            assert(callback.calledOnce);
        });
    });

    describe('GET requests', () => {
        let callback = sinon.spy();
        let server;
        before(() =>
            new Promise((resolve) => {
                server = sinon.fakeServer.create();
                Ajax.get(`${root}/posts`).then((res) => {
                    if (res && res.length) {
                        callback(null, res);
                    }
                    resolve();
                }, resolve);
                server.requests[0].respond(
                    200,
                    { 'Content-Type': 'application/json' },
                    JSON.stringify([
                        {
                            id: 1,
                            title: 'Article 1',
                        },
                    ])
                );
                server.restore();
            })
        );
        it('should exec a GET request', () => {
            assert(callback.calledOnce);
        });
    });

    describe('POST requests', () => {
        let callback = sinon.spy();
        let server;
        before(() =>
            new Promise((resolve) => {
                server = sinon.fakeServer.create();
                Ajax.post(`${root}/posts`, undefined, {
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }).then((res) => {
                    if (res && res.length) {
                        callback(null, res);
                    }
                    resolve();
                }, resolve);
                server.requests[0].respond(
                    201,
                    { 'Content-Type': 'application/json' },
                    JSON.stringify([
                        {
                            id: 1,
                            title: 'Article 1',
                        },
                    ])
                );
                server.restore();
            })
        );
        it('should exec a simple POST request', () => {
            assert.equal(server.requests[0].requestBody.title, 'foo');
            assert(callback.calledOnce);
        });
    });

    describe('DELETE requests', () => {
        let callback = sinon.spy();
        let server;
        before(() =>
            new Promise((resolve) => {
                server = sinon.fakeServer.create();
                Ajax.delete(`${root}/posts/1`).then((res) => {
                    callback(null, res);
                    resolve();
                }, resolve);
                server.requests[0].respond(200);
                server.restore();
            })
        );
        it('should exec a simple DELETE request', () => {
            assert(callback.calledOnce);
        });
    });
});
