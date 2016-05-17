import { Ajax } from '../src/ajax.js';

/* globals describe, before, beforeEach, it, assert */
describe('Unit: Ajax', function() {
    this.timeout(20 * 1000);

    let check = [];
    let root = 'http://jsonplaceholder.typicode.com';

    let promises = [];
    promises.push(
        Ajax.request(`${root}/posts`).then((res) => {
            check[0] = res[0].id;
        })
    );
    promises.push(
        Ajax.get(`${root}/posts`).then((res) => {
            check[1] = res[0].id;
        })
    );
    promises.push(
        Ajax.post(`${root}/posts`, undefined, {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }).then((res) => {
            check[2] = res.id;
        })
    );
    promises.push(
        Ajax.delete(`${root}/posts/1`).then(() => {
            check[3] = true;
        })
    );

    beforeEach(() => Promise.all(promises));

    it('should exec a simple request', () => {
        assert.equal(check[0], 1);
    });

    it('should exec a simple GET request', () => {
        assert.equal(check[1], 1);
    });

    it('should exec a simple POST request', () => {
        assert.equal(check[2], 101);
    });

    it('should exec a simple DELETE request', () => {
        assert.equal(check[3], true);
    });
});
