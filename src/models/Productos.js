import { Schema, model } from "mongoose"

const productoEsquema = new Schema(
    {
        clave: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },

        marca: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },

        precio: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        
        fechaLanzamiento: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },

        ram: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },

        almacenamiento: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },

        cantidadCamaras: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },

        opcion: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model("Productos", productoEsquema);
