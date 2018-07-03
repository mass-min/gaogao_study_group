const chai = require('chai');
const expect = chai.expect;
const sample1 = require('../scripts/sample1');

chai.should()

describe('sample1', function() {
    describe('#add', function() {
        it('should return 3 when args are 1 and 2', function() {
            sample1.add(1,2).should.be.equal(3);
        });
        it('should return 0.4 when args are 0.1 and 0.3', function() {
            sample1.add(0.1, 0.3).should.be.equal(0.4);
        });
        it('should throw error when args include null', function() {
            (function(){ sample1.add(null, 1) }).should.throw(Error);
        });
    });
});
