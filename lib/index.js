'use strict';

var _ = require('lodash');
var debug = require('debug')('rtb-validator');
var e = require('./errors');

function validationStatus (errors) {
  // there are no errors, object has no errors
  if (errors.length === 0) {
    return false;
  }

  return {
    hasErrors: true,
    errors: errors
  };
}

exports.bidRequestHasErrors = function (br) {
  debug('validate ', br);
  var errors = [];

  if (!_.isObject(br)) {
    errors.push(e.HAS_TO_BE_AN_OBJECT);
  }

  return validationStatus(errors);
};

exports.bidResponseHasErrors = function (br) {
  debug('validate ', br);

  var errors = [];

  return validationStatus(errors);
};
