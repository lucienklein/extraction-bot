const mongoose = require("mongoose");

const MODELNAME = "request";

const Prescription = new mongoose.Schema({
  s3Key: String,
  content: String,
  words: { type: [{ content: String, offset: Number, length: Number, confidence: Number }] },
  styles: { type: [{ isHandwritten: Boolean, offset: Number, length: Number, confidence: Number }] },
  ner: {
    type: [
      {
        content: String,
        category: String,
        offset: Number,
        length: Number,
        confidence: Number,
        isHandwritten: Boolean,
        deleted: Boolean,
      },
    ],
  },
  acts: {
    type: [
      { content: String, offset: Number, length: Number, confidence: Number, code: String, isHandwritten: Boolean },
    ],
  },
  warnings: {
    type: [
      {
        content: String,
        offset: Number,
        length: Number,
        confidence: Number,
        code: String,
        isHandwritten: Boolean,
        controlled: { type: Boolean, default: false },
      },
    ],
  },
  isHandwritten: Boolean,
});

const Schema = new mongoose.Schema({
  requestId: String,
  referenceId: String,
  patientId: String,
  prescriptions: [Prescription],
});

const OBJ = mongoose.model(MODELNAME, Schema);
module.exports = OBJ;
