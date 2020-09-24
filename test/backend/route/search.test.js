const searchRoute = require("../../../src/backend/routes/search.route");

var assert = require('assert');

describe('Test Suite 1', function() {
    it('Test 1', function() {
        // let jsonReturn =   searchRoute.seerSearchJson("title", "author", "method") ;
        /*
        {
            {"title":}
        }
        */
        // See if there is result
        // assert.ok( jsonReturn[0].title == "", "This shouldn't fail");
        assert.ok(true, "not yet implemented");
    })

    it('Test 2', function() {
        assert.ok(1 === 1, "This shouldn't fail");
        // assert.ok(false, "This should fail");
    })
})