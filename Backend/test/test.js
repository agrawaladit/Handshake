var app = require('../App');
var chai = require('chai');
chai.use(require('chai-http'));
var expect = require('chai').expect;

var agent = require('chai').request.agent(app);

describe('Backend', function(){

    it('GET /experience - Verifying Experience',function(done){
        agent.get('/users')
            .then(function(res){
                expect(res.body.count).to.equal(1);
                done();
            })
            .catch((e) => {
                done(e);
            });
    });
    it('GET /education - Verifying Education',function(done){
        agent.get('/education')
            .then(function(res){
                expect(res.body.count).to.equal(1);
                done();
            })
            .catch((e) => {
                done(e);
            });
    });
})