const path = require("path");

// Package almacenamiento de archivo
const multer = require("multer");

// Configuración del storage de Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `../client/public/images/img-artwork/${req.body.category}`)},
    filename: function (req, file, cb) {
        cb(null, "img-" + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 10000000000 }, // 1000000 Tamaño maximo de bytes tolerables
    fileFilter: function (req, file, cb) { // filtra las extensiones aceptadas
        var filetypes = /jpeg|png|pdf|jpg|gif/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) return cb(null, true);
        cb("Error: File upload only supports the following filetypes - " + filetypes);
      }
});

module.exports = upload