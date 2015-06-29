describe('Unit: Ajax', function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

    function createRequest(test) {
        Ajax.request()
    }

    var check = [];
    var root = 'http://jsonplaceholder.typicode.com';

    
    var promises = [];
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
    // promises.push(Ajax.request('http://am.a.com').catch(function(res) {
    //     check[1] = res.status;
    // }));
    
    beforeEach(function(done) {
        Promise.all(promises).then(done, done);
    });

    it('should exec a simple request', function() {
        expect(check[0]).toBe(1);
    });

    it('should exec a simple GET request', function() {
        expect(check[1]).toBe(1);
    });

    it('should exec a simple POST request', function() {
        expect(check[2]).toBe(101);
    });

    it('should exec a simple DELETE request', function() {
        expect(check[3]).toBe(true);
    });

    // it('404 simple request', function() {
    //     expect(check[1]).toBe(404);
    // });

});