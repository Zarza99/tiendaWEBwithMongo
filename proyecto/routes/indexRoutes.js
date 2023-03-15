"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productoController = require("../controllers/productoController");
var router = (0, _express.Router)();

//Productos
router.get('/', _productoController.renderProductos);

//Agregar productos
router.post("/productos/agregar", _productoController.createProductos);

//A buscar por id
router.get("/productos/:id/update", _productoController.renderEditProductos);

//Actualizar
router.post("/productos/:id/update", _productoController.updateProductos);

//Eliminar
router.get("/productos/:id/delete", _productoController.deleteProductos);

//Función para status
router.get("/productos/:id/statusProductos", _productoController.statusProductos);
var _default = router;
exports["default"] = _default;