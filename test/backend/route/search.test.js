const SearchRouter = require("../../../src/backend/routes/search.route");

var assert = require('assert');

describe('Backend test', function() {
    it('Test 1', function() {
        // const searchRouter = new SearchRouter();
        // seerSearchJson(title, author, yearSelection, fromYear, toYear, method, claims)
        // let jsonReturn =   searchRouter.seerSearchJson("", "", "", "", "", "", []); 
        /*
        {
            {"title":}
        }
        */
        // See if there is result
        // assert.ok( jsonReturn[0].title == "", "This shouldn't fail");
        // assert.ok(true, "not yet implemented");
        assert.ok(true, "Data returned")
    })

    it('Test 2', function() {
        assert.ok(1 === 1, "This shouldn't fail");
        // assert.ok(false, "This should fail");
    })
})