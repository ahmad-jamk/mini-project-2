'use strict';


/**
 * Delete a doctor appointment by ID
 *
 * appointmentId Integer 
 * no response value expected for this operation
 **/
exports.doctor_appointmentAppointmentIdDELETE = function(appointmentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a doctor appointment by ID
 *
 * appointmentId Integer 
 * returns DoctorAppointment
 **/
exports.doctor_appointmentAppointmentIdGET = function(appointmentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "doctor" : {
    "specialty" : "Cardiologist",
    "name" : "Dr. Smith",
    "id" : 1
  },
  "date" : "2023-11-20T00:00:00.000+00:00",
  "patient" : {
    "dob" : "1990-05-15T00:00:00.000+00:00",
    "name" : "John Doe",
    "id" : 1
  },
  "id" : 101,
  "time" : "10:00 AM",
  "status" : "Scheduled"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a doctor appointment by ID
 *
 * body DoctorAppointmentInput 
 * appointmentId Integer 
 * no response value expected for this operation
 **/
exports.doctor_appointmentAppointmentIdPUT = function(body,appointmentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete all doctor appointments
 *
 * no response value expected for this operation
 **/
exports.doctor_appointmentDELETE = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all doctor appointment
 *
 * returns List
 **/
exports.doctor_appointmentGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ {
  "id" : 101,
  "doctor" : {
    "id" : 1,
    "name" : "Dr. Smith",
    "specialty" : "Cardiologist"
  },
  "patient" : {
    "id" : 1,
    "name" : "John Doe",
    "dob" : "1990-05-15"
  },
  "date" : "2023-11-20",
  "time" : "10:00 AM",
  "status" : "Scheduled"
}, {
  "id" : 102,
  "doctor" : {
    "id" : 2,
    "name" : "Dr. Johnson",
    "specialty" : "Dermatologist"
  },
  "patient" : {
    "id" : 2,
    "name" : "Jane Smith",
    "dob" : "1985-08-22"
  },
  "date" : "2023-11-21",
  "time" : "02:30 PM",
  "status" : "Completed"
}, {
  "id" : 103,
  "doctor" : {
    "id" : 3,
    "name" : "Dr. Brown",
    "specialty" : "Pediatrician"
  },
  "patient" : {
    "id" : 3,
    "name" : "Samuel White",
    "dob" : "2010-03-10"
  },
  "date" : "2023-11-22",
  "time" : "11:45 AM",
  "status" : "Canceled"
}, {
  "id" : 104,
  "doctor" : {
    "id" : 4,
    "name" : "Dr. Miller",
    "specialty" : "Orthopedic"
  },
  "patient" : {
    "id" : 4,
    "name" : "Emily Davis",
    "dob" : "1975-12-03"
  },
  "date" : "2023-11-23",
  "time" : "03:15 PM",
  "status" : "Scheduled"
}, {
  "id" : 105,
  "doctor" : {
    "id" : 5,
    "name" : "Dr. Anderson",
    "specialty" : "Ophthalmologist"
  },
  "patient" : {
    "id" : 5,
    "name" : "Michael Johnson",
    "dob" : "1968-09-18"
  },
  "date" : "2023-11-24",
  "time" : "09:30 AM",
  "status" : "Pending"
}, {
  "id" : 106,
  "doctor" : {
    "id" : 6,
    "name" : "Dr. White",
    "specialty" : "Gynecologist"
  },
  "patient" : {
    "id" : 6,
    "name" : "Olivia Moore",
    "dob" : "1988-07-07"
  },
  "date" : "2023-11-25",
  "time" : "01:00 PM",
  "status" : "Scheduled"
}, {
  "id" : 107,
  "doctor" : {
    "id" : 7,
    "name" : "Dr. Taylor",
    "specialty" : "Neurologist"
  },
  "patient" : {
    "id" : 7,
    "name" : "William Johnson",
    "dob" : "1955-02-12"
  },
  "date" : "2023-11-26",
  "time" : "11:00 AM",
  "status" : "Completed"
}, {
  "id" : 108,
  "doctor" : {
    "id" : 8,
    "name" : "Dr. Harris",
    "specialty" : "Dentist"
  },
  "patient" : {
    "id" : 8,
    "name" : "Ava Martinez",
    "dob" : "1995-10-30"
  },
  "date" : "2023-11-27",
  "time" : "03:45 PM",
  "status" : "Scheduled"
}, {
  "id" : 109,
  "doctor" : {
    "id" : 9,
    "name" : "Dr. Wilson",
    "specialty" : "Urologist"
  },
  "patient" : {
    "id" : 9,
    "name" : "Ethan Taylor",
    "dob" : "1982-06-25"
  },
  "date" : "2023-11-28",
  "time" : "10:30 AM",
  "status" : "Pending"
}, {
  "id" : 110,
  "doctor" : {
    "id" : 10,
    "name" : "Dr. Adams",
    "specialty" : "Pulmonologist"
  },
  "patient" : {
    "id" : 10,
    "name" : "Sophia Turner",
    "dob" : "2000-04-17"
  },
  "date" : "2023-11-29",
  "time" : "02:15 PM",
  "status" : "Scheduled"
} ], [ {
  "id" : 101,
  "doctor" : {
    "id" : 1,
    "name" : "Dr. Smith",
    "specialty" : "Cardiologist"
  },
  "patient" : {
    "id" : 1,
    "name" : "John Doe",
    "dob" : "1990-05-15"
  },
  "date" : "2023-11-20",
  "time" : "10:00 AM",
  "status" : "Scheduled"
}, {
  "id" : 102,
  "doctor" : {
    "id" : 2,
    "name" : "Dr. Johnson",
    "specialty" : "Dermatologist"
  },
  "patient" : {
    "id" : 2,
    "name" : "Jane Smith",
    "dob" : "1985-08-22"
  },
  "date" : "2023-11-21",
  "time" : "02:30 PM",
  "status" : "Completed"
}, {
  "id" : 103,
  "doctor" : {
    "id" : 3,
    "name" : "Dr. Brown",
    "specialty" : "Pediatrician"
  },
  "patient" : {
    "id" : 3,
    "name" : "Samuel White",
    "dob" : "2010-03-10"
  },
  "date" : "2023-11-22",
  "time" : "11:45 AM",
  "status" : "Canceled"
}, {
  "id" : 104,
  "doctor" : {
    "id" : 4,
    "name" : "Dr. Miller",
    "specialty" : "Orthopedic"
  },
  "patient" : {
    "id" : 4,
    "name" : "Emily Davis",
    "dob" : "1975-12-03"
  },
  "date" : "2023-11-23",
  "time" : "03:15 PM",
  "status" : "Scheduled"
}, {
  "id" : 105,
  "doctor" : {
    "id" : 5,
    "name" : "Dr. Anderson",
    "specialty" : "Ophthalmologist"
  },
  "patient" : {
    "id" : 5,
    "name" : "Michael Johnson",
    "dob" : "1968-09-18"
  },
  "date" : "2023-11-24",
  "time" : "09:30 AM",
  "status" : "Pending"
}, {
  "id" : 106,
  "doctor" : {
    "id" : 6,
    "name" : "Dr. White",
    "specialty" : "Gynecologist"
  },
  "patient" : {
    "id" : 6,
    "name" : "Olivia Moore",
    "dob" : "1988-07-07"
  },
  "date" : "2023-11-25",
  "time" : "01:00 PM",
  "status" : "Scheduled"
}, {
  "id" : 107,
  "doctor" : {
    "id" : 7,
    "name" : "Dr. Taylor",
    "specialty" : "Neurologist"
  },
  "patient" : {
    "id" : 7,
    "name" : "William Johnson",
    "dob" : "1955-02-12"
  },
  "date" : "2023-11-26",
  "time" : "11:00 AM",
  "status" : "Completed"
}, {
  "id" : 108,
  "doctor" : {
    "id" : 8,
    "name" : "Dr. Harris",
    "specialty" : "Dentist"
  },
  "patient" : {
    "id" : 8,
    "name" : "Ava Martinez",
    "dob" : "1995-10-30"
  },
  "date" : "2023-11-27",
  "time" : "03:45 PM",
  "status" : "Scheduled"
}, {
  "id" : 109,
  "doctor" : {
    "id" : 9,
    "name" : "Dr. Wilson",
    "specialty" : "Urologist"
  },
  "patient" : {
    "id" : 9,
    "name" : "Ethan Taylor",
    "dob" : "1982-06-25"
  },
  "date" : "2023-11-28",
  "time" : "10:30 AM",
  "status" : "Pending"
}, {
  "id" : 110,
  "doctor" : {
    "id" : 10,
    "name" : "Dr. Adams",
    "specialty" : "Pulmonologist"
  },
  "patient" : {
    "id" : 10,
    "name" : "Sophia Turner",
    "dob" : "2000-04-17"
  },
  "date" : "2023-11-29",
  "time" : "02:15 PM",
  "status" : "Scheduled"
} ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new doctor appointment
 *
 * body DoctorAppointmentInput 
 * no response value expected for this operation
 **/
exports.doctor_appointmentPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update all doctor appointments
 *
 * body List 
 * no response value expected for this operation
 **/
exports.doctor_appointmentPUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Search doctor appointment
 *
 * id String doctor appointment provided by the id (optional)
 * doctor String Doctor name (optional)
 * patient String Patient name (optional)
 * startDate date Start date of the time period (optional)
 * endDate date End date of the time period (optional)
 * returns List
 **/
exports.doctor_appointmentSearchGET = function(id,doctor,patient,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "doctor" : {
    "specialty" : "Cardiologist",
    "name" : "Dr. Smith",
    "id" : 1
  },
  "date" : "2023-11-20T00:00:00.000+00:00",
  "patient" : {
    "dob" : "1990-05-15T00:00:00.000+00:00",
    "name" : "John Doe",
    "id" : 1
  },
  "id" : 101,
  "time" : "10:00 AM",
  "status" : "Scheduled"
}, {
  "doctor" : {
    "specialty" : "Cardiologist",
    "name" : "Dr. Smith",
    "id" : 1
  },
  "date" : "2023-11-20T00:00:00.000+00:00",
  "patient" : {
    "dob" : "1990-05-15T00:00:00.000+00:00",
    "name" : "John Doe",
    "id" : 1
  },
  "id" : 101,
  "time" : "10:00 AM",
  "status" : "Scheduled"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

