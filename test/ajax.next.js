import { Ajax } from '../src/ajax.next.js';

describe('Unit: Ajax', function() {
    this.timeout(20 * 1000);

    function createRequest(test) {
        Ajax.request()
    }

    let check = [];
    let root = 'http://jsonplaceholder.typicode.com';

    let promises = [];
    promises.push(Ajax.request(root + '/posts').then(function(res) {
        check[0] = res[0].id;
    }));
    promises.push(Ajax.get(root + '/posts').then(function(res) {
        check[1] = res[0].id;
    }));
    promises.push(Ajax.post(root + '/posts', {}, {
        title: 'foo',
        body: 'bar',
        userId: 1
    }).then(function(res) {
        check[2] = res.id;
    }));
    promises.push(Ajax.delete(root + '/posts/1').then(function(res) {
        check[3] = true;
    }));

    beforeEach(function() {
        return Promise.all(promises);
    });

    it('should exec a simple request', function() {
        assert.equal(check[0], 1);
    });

    it('should exec a simple GET request', function() {
        assert.equal(check[1], 1);
    });

    it('should exec a simple POST request', function() {
        assert.equal(check[2], 101);
    });

    it('should exec a simple DELETE request', function() {
        assert.equal(check[3], true);
    });

});
