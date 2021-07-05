const path = require("path");
const nodemailer = require("nodemailer");
const multer = require("multer");

// Configuración del storage de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (req.body.category) {
      cb(null, `../client/public/images/img-artwork/${req.body.category}`);
    } else {
      cb(null, "../client/public/images/img-carousel");
    }
  },
  filename: function (req, file, cb) {
    cb(null, "img-" + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10000000000 }, // 1000000 Tamaño maximo de bytes tolerables
  fileFilter: function (req, file, cb) {
    // filtra las extensiones aceptadas
    var filetypes = /jpeg|png|pdf|jpg|gif/;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) return cb(null, true);
    cb(
      "Error: File upload only supports the following filetypes - " + filetypes
    );
  },
});

const createEmailOptions = (data) => {
  let mailOptions = {
    from: "noreplydolorespardo@gmail.com", //DATOS DEL MAIL QUE RECIVE
    to: `${data.email}, vialola@hotmail.com`, // DATOS DEL MAIL QUE RECIVE
    subject: `${data.subject}
       `,
    html: `
    <div>
    <img
    src="cid:vialola_png",
    alt="Vialola" width = 200px />
      <h4 style= "font-size:18px">
      ${data.lenguage == "en-es" ? "Hola " : "Hi "}${data.clientName} !
     ${
       data.lenguage == "en-es"
         ? "recibimos tu consulta: "
         : "we receive your request:"
     } 
      </h4>
      <p style= "font-size:18px, font-style: italic">
      ${data.message}
      </p>
          <h3> ${data.lenguage == "en-es" ? "Detalle: " : "Detail: "}</h3>
         <ul style= "list-style-type: none; margin-bottom:10px">
         <li>${data.artworkData}</li>
         <li> ${data.lenguage == "en-es" ? "Ubicación" : "Location"}: ${
      data.city
    }, ${data.country}</li>
         <li> email: ${data.email}</li>
          </ul>
          <h3>   ${
            data.lenguage == "en-es"
              ? "Lo contactaremos a la brevedad, gracias! :)"
              : "We will contact you soon, thank you! :)"
          } </h3>
          </div>
      `,
    attachments: [
      {
        filename: "FIRMA2.png",
        path:
          "/Users/agustinpardo/Desktop/Desktop/laburos/Tienda-Vialola/server/src/public/img/logo/FIRMA2.png",
        cid: "vialola_png",
      },
    ],
  };

  return mailOptions;
};

const transporter = nodemailer.createTransport({
  //OBJETO TRANSPORTER DISPARA ENVIO DE MAIL
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "noreplydolorespardo@gmail.com",
    pass: "vudbsxpppgwznsic"
  },
});

module.exports = {
  multerFn: upload,
  transporter,
  createEmailOptions,
};
