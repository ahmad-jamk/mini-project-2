'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.doctor_appointmentAppointmentIdDELETE = function doctor_appointmentAppointmentIdDELETE (req, res, next, appointmentId) {
  Default.doctor_appointmentAppointmentIdDELETE(appointmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.doctor_appointmentAppointmentIdGET = function doctor_appointmentAppointmentIdGET (req, res, next, appointmentId) {
  Default.doctor_appointmentAppointmentIdGET(appointmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.doctor_appointmentAppointmentIdPUT = function doctor_appointmentAppointmentIdPUT (req, res, next, body, appointmentId) {
  Default.doctor_appointmentAppointmentIdPUT(body, appointmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.doctor_appointmentDELETE = function doctor_appointmentDELETE (req, res, next) {
  Default.doctor_appointmentDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.doctor_appointmentGET = function doctor_appointmentGET (req, res, next) {
  Default.doctor_appointmentGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.doctor_appointmentPOST = function doctor_appointmentPOST (req, res, next, body) {
  Default.doctor_appointmentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.doctor_appointmentPUT = function doctor_appointmentPUT (req, res, next, body) {
  Default.doctor_appointmentPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.doctor_appointmentSearchGET = function doctor_appointmentSearchGET (req, res, next, id, doctor, patient, startDate, endDate) {
  Default.doctor_appointmentSearchGET(id, doctor, patient, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
