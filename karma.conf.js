'use strict';

module.exports = function(karma) {
    karma.set({
        browserNoActivityTimeout: 20 * 1000,
        browserDisconnectTimeout: 20 * 1000,
    });
};
