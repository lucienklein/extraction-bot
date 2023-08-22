const mongoose = require("mongoose");

const MODELNAME = "request";

const Prescription = new mongoose.Schema({
  s3Key: String,
  doctorFirstname: { type: { value: String, boundingRegions: [{ type: { value: String, boundingRegions: [Object], confidence: Number } }], confidence: Number } },
  doctorLastname: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  doctorAddress: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  RPPS: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  exams: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  examsExtracted: { type: [{ text: String, category: String, offset: Number, length: Number, confidenceScore: Number, code: String }] },
  actsPredicted: [String],
  doctorPhone: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  date: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  patientMaidenname: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  patientWeight: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  patientAge: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  patientHeight: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  patientBirthday: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  resultsTransmission: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  patientSecu: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  patientLastname: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  patientFirstname: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  patientPhone: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  patientAddress: { type: { value: String, boundingRegions: [Object], confidence: Number } },
  doctorEmail: { type: { value: String, boundingRegions: [Object], confidence: Number } },
});

const Schema = new mongoose.Schema({
  requestId: String,
  referenceId: String,
  patientId: String,
  patientSecu: String,
  prescriptions: [Prescription],
  acts: [String],
});



const OBJ = mongoose.model(MODELNAME, Schema);
module.exports = OBJ;
