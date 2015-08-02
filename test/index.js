'use strict';

/* global it, before, describe */

var rtbValidator = require('../lib');
var fs = require('fs');
var debug = require('debug')('test');
require('should');

describe('rtb-validator', function () {

  var bidRequest;
  var bidResponse;

  before(function () {
    bidRequest = JSON.parse(fs.readFileSync(__dirname + '/data/bid_request.json'));
    bidResponse = JSON.parse(fs.readFileSync(__dirname + '/data/bid_response.json'));
  });
  
  it('should validate BidRequest', function (done) {

    console.log(bidRequest);
    bidRequest.should.not.be.equal(null);
    done();

  });

  it('should validate BidResponse', function (done) {

    console.log(bidResponse);
    bidRequest.should.not.be.equal(null);
    done();

  });
});
