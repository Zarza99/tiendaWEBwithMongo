import { Router } from "express"
import { createProductos, deleteProductos, renderEditProductos, renderProductos, statusProductos, updateProductos } from "../controllers/productoController";

const router =Router();

//Productos
router.get('/', renderProductos);

//Agregar productos
router.post("/productos/agregar",  createProductos);

//A buscar por id
router.get("/productos/:id/update", renderEditProductos);

//Actualizar
router.post("/productos/:id/update", updateProductos);

//Eliminar
router.get("/productos/:id/delete", deleteProductos);

//Función para status
router.get("/productos/:id/statusProductos", statusProductos);

export default router;
