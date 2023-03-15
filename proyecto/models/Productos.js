"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var productoEsquema = new _mongoose.Schema({
  clave: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  marca: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  precio: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  fechaLanzamiento: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  ram: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  almacenamiento: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  cantidadCamaras: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  opcion: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)("Productos", productoEsquema);
exports["default"] = _default;