const User = require("../server/db/models/index").User;
const Category = require("../server/db/models/index").Category;
const Artwork = require("../server/db/models/index").Artwork;
const Serie = require("../server/db/models/index").Serie;
const Product = require("../server/db/models/index").Product;
const Section = require("../server/db/models/index").Section;

User.create({
  name: "Dolores",
  surname: "Pardo",
  adress: "472 esq 19",
  cuit: 20315965854,
  email: "agus@hotmail.com",
  isAdmin: true,
  avatar: "",
  password: "1234",
  passwordConfirmed: false,
  //salt: 'lkjljasda'
});

Category.create({
  name: "paints",
  img: "milPiernas.jpg",
});
Category.create({
  name: "ink",
  img: "birome0.jpg",
});
Category.create({
  name: "digital",
  img: "vacaciones.jpg",
});
Category.create({
  name: "pencil",
  img: "lapiz2.jpg",
});
Category.create({
  name: "objets",
  img: "pajaroMaderaRuedas.jpg",
});

Serie.create({
  name: "Indomitos",
  img: "pintura-indomitos3.jpg",
  categoryId: "1",
});
Serie.create({
  name: "Naturaleza Salvaje",
  img: "pintura-naturaleza1.jpg",
  categoryId: "1",
});
Serie.create({
  name: "La Boca",
  img: "pinturas-boca-1.jpg",
  categoryId: "1",
});
Serie.create({
  name: "Elementos",
  img: "pintura-elementos3.jpg",
  categoryId: "1",
});
Serie.create({
  name: "De Fiesta",
  img: "pintura-festejo1.jpg",
  categoryId: "1",
});
Serie.create({
  name: "Cajas",
  img: "cajaPrincesa.jpg",
  categoryId: "5",
});
Serie.create({
  name: "Muñecos",
  img: "pecesCartapesta.jpg",
  categoryId: "5",
});
Serie.create({
  name: "Varios",
  img: "lapiz7.jpg",
  categoryId: "5",
});

//SECTION FOR PRODUCTS
Section.create({
  name: "prints",
});
Section.create({
  name: "small-art",
});
Section.create({
  name: "objects",
});
Section.create({
  name: "miscellaneous",
});

//PRODUCT - PRINT
Product.create({
  name: "La junta",
  description: `High quality print, printed in 120gsm. 
  Canson matte white paper and Gesso paper. Limited edition of 30, signed and numbered.`,
  price: 1000,
  size: "15x21cm",
  stock: 1,
  img1: "dibujo1.jpg",
  img2: "dibujo2.jpg",
  img3: "dibujo3.jpg",
  review: 0,
  sectionId: "1",
});

Product.create({
  name: "Mujer perro voladora",
  description: `High quality print, printed in 120gsm. 
  Canson matte white paper and Gesso paper. Limited edition of 30, signed and numbered.`,
  price: 15000,
  stock: 1,
  size: "15x21cm",
  img1: "dibujo7.jpg",
  img2: "dibujo8.jpg",
  img3: "dibujo9.jpg",
  review: 0,
  sectionId: "1",
});

Product.create({
  name: "Hay que juntarse mas",
  description: `High quality print, printed in 120gsm. 
  Canson matte white paper and Gesso paper. Limited edition of 30, signed and numbered.`,
  price: 5000,
  stock: 1,
  size: "15x21cm",
  img1: "dibujo4.jpg",
  img2: "dibujo5.jpg",
  img3: "dibujo6.jpg",
  review: 0,
  sectionId: "1",
});
Product.create({
  name: "Los desfachatados",
  description: `High quality print, printed in 120gsm. 
  Canson matte white paper and Gesso paper. Limited edition of 30, signed and numbered.`,
  price: 3000,
  stock: 1,
  size: "15x21cm",
  img1: "dibujoA1.jpg",
  img2: "dibujoA2.jpg",
  img3: "dibujoA3.jpg",
  review: 0,
  sectionId: "1",
});
Product.create({
  name: "Elefante Cabuzo",
  description: `High quality print, printed in 120gsm. 
  Canson matte white paper and Gesso paper. Limited edition of 30, signed and numbered.`,
  price: 3000,
  stock: 1,
  size: "15x21cm",
  img1: "cuadro1.jpg",
  img2: "cuadro2.jpg",
  img3: "cuadro3.jpg",
  review: 0,
  sectionId: "1",
});

//PRODUCT - SMALL ART
Product.create({
  name: "Sirena de los 7 mares",
  description: `High quality wood piece of art. 
  This textual Art on Wood has a personal modern look. Plaque features full-color printing and 
  a durable vinyl edge. Plaque is made of MDF wood and is easel backed and metal hook for hanging.
  Limited edition of 30, signed and numbered.`,
  price: 5200,
  stock: 1,
  size: "15x21cm",
  img1: "sirenaA1.jpg",
  img2: "sirenaA2.jpg",
  img3: "sirenaA3.jpg",
  review: 0,
  sectionId: "2",
});

Product.create({
  name: "Ballena Mágica",
  description: `High quality wood piece of art. 
  This textual Art on Wood has a personal modern look. Plaque features full-color printing and 
  a durable vinyl edge. Plaque is made of MDF wood and is easel backed and metal hook for hanging.
  Limited edition of 30, signed and numbered.`,
  price: 1200,
  stock: 1,
  size: "15x21cm",
  img1: "ballenaA1.jpg",
  img2: "ballenaA2.jpg",
  img3: "ballenaA3.jpg",
  review: 0,

  sectionId: "2",
});
Product.create({
  name: "Ballena Cantora",
  description: `High quality wood piece of art. 
  This textual Art on Wood has a personal modern look. Plaque features full-color printing and 
  a durable vinyl edge. Plaque is made of MDF wood and is easel backed and metal hook for hanging.
  Limited edition of 30, signed and numbered.`,
  price: 1200,
  stock: 5,
  size: "15x21cm",
  img1: "ballenaB1.jpg",
  img2: "ballenaB2.jpg",
  img3: "ballenaB3.jpg",
  review: 0,

  sectionId: "2",
});
Product.create({
  name: "Pez colorido",
  description: `High quality wood piece of art. 
  This textual Art on Wood has a personal modern look. Plaque features full-color printing and 
  a durable vinyl edge. Plaque is made of MDF wood and is easel backed and metal hook for hanging.
  Limited edition of 30, signed and numbered.`,
  price: 1200,
  stock: 1,
  size: "15x21cm",
  img1: "pezB1.jpg",
  img2: "pezB2.jpg",
  img3: "pezB3.jpg",
  review: 0,

  sectionId: "2",
});

Product.create({
  name: "Pez de mundo",
  description: `High quality wood piece of art. 
  This textual Art on Wood has a personal modern look. Plaque features full-color printing and 
  a durable vinyl edge. Plaque is made of MDF wood and is easel backed and metal hook for hanging.
  Limited edition of 30, signed and numbered.`,
  price: 1200,
  stock: 1,
  size: "15x21cm",
  img1: "pezA1.jpg",
  img2: "pezA2.jpg",
  img3: "pezA3.jpg",
  review: 0,

  sectionId: "2",
});

//PRODUCT- OBJETS
Product.create({
  name: "Bandeja de madera",
  description: `This Breakfast Tray is great for working on a sofa, lounge chair or relaxing in bed with a book or laptop. The tilt-top has 
  adjustable positioning and a handy lower crossbar that keeps your book or papers in place.`,
  price: 1500,
  stock: 1,
  size: "50x90cm",
  img1: "default.jpg",
  img2: "default.jpg",
  img3: "default.jpg",
  review: 0,
  sectionId: "3",
});

Product.create({
  name: "Caja La Linda",
  description: `Offering a handy space to store tea bags, this tea box is made of wood, featuring a panel of recycled paper that is printed with colorful motifs. 
  The box opens with a hinge to an interior with six compartments for storing tea. Size 50x50x65`,
  price: 1000,
  stock: 1,
  size: "50x50x65",
  img1: "default.jpg",
  img2: "default.jpg",
  img3: "default.jpg",
  review: 0,
  sectionId: "3",
});
Product.create({
  name: "Caja La Linda",
  description: `Offering a handy space to store tea bags, this tea box is made of wood, featuring a panel of recycled paper that is printed with colorful motifs. 
  The box opens with a hinge to an interior with six compartments for storing tea.`,
  price: 1000,
  stock: 1,
  size: "50x50x65cm",
  img1: "default.jpg",
  img2: "default.jpg",
  img3: "default.jpg",
  review: 0,
  sectionId: "3",
});
Product.create({
  description: `Offering a handy space to store tea bags, this tea box is made of wood, featuring a panel of recycled paper that is printed with colorful motifs. 
  The box opens with a hinge to an interior with six compartments for storing tea. Size 50x50x65`,
  price: 1000,
  stock: 1,
  size: "50x50x65cm",
  img1: "default.jpg",
  img2: "default.jpg",
  img3: "default.jpg",
  review: 0,
  name: "Bandeja pal'mate",
  sectionId: "3",
});
//PRODUCT- MISCELLANEOUS
Product.create({
  name: "Mujer en Lapiz",
  description: "Lapiz 80 x 70",
  price: 5200,
  stock: 1,
  size: "15x21cm",
  img1: "default.jpg",
  img2: "default.jpg",
  img3: "default.jpg",
  review: 0,
  sectionId: "4",
});
Product.create({
  name: "Reproduccion-Reproduccion- A todo color",
  description: "Lapiz color 80 x 70",
  price: 1000,
  stock: 1,
  size: "15x21cm",
  img1: "default.jpg",
  img2: "default.jpg",
  img3: "default.jpg",
  review: 0,
  sectionId: "4",
});
Product.create({
  name: "Reproduccion-Pajaro y noche",
  description: "Lapiz 80 x 70",
  price: 1000,
  stock: 1,
  size: "15x21cm",
  img1: "default.jpg",
  img2: "default.jpg",
  img3: "default.jpg",
  review: 0,
  sectionId: "4",
});
Product.create({
  name: "Reproduccion-Habla de frente",
  description: "Lapiz 80 x 70",
  price: 1000,
  stock: 1,
  size: "15x21cm",
  img1: "default.jpg",
  img2: "default.jpg",
  img3: "default.jpg",
  review: 0,
  sectionId: "4",
});

//PAINTS
Artwork.create({
  name: "Arbol de Peces",
  description: "Oleo 200 x 200",
  price: 5000,
  img: "pintura-elementos1.jpg",
  categoryId: "1",
  serieId: "4  ",
});

Artwork.create({
  name: "Manos que ven",
  description: "Oleo 200 x 200",
  price: 15000,
  img: "pintura-elementos2.jpg",
  categoryId: "1",
  serieId: "4",
});

Artwork.create({
  name: "Mujer alada",
  description: "Oleo sobre papel 200 x 200",
  price: 5000,
  img: "pintura-elementos3.jpg",
  categoryId: "1",
  serieId: "4",
});
Artwork.create({
  name: "4 tipos audaces",
  description: "Oleo sobre lienzo. 75x75",
  price: 3000,
  img: "pintura-festejo2.jpg",
  categoryId: "1",
  serieId: "5",
});
Artwork.create({
  name: "El grupete",
  description: "Oleo sobre lienzo. 75x75",
  price: 3000,
  img: "pintura-festejo1.jpg",
  categoryId: "1",
  serieId: "5",
});
Artwork.create({
  name: "Diablo y pajaro",
  description: "Oleo sobre lienzo. 90x90. ",
  price: 3000,
  img: "pintura-indomitos3.jpg",
  categoryId: "1",
  serieId: "1",
});

Artwork.create({
  name: "Diablo y pajaro - Blanco y Negro",
  description: "Blanco y negro - Oleo sobre lienzo. 90x90. ",
  price: 3000,
  img: "pintura-indomitos3b&n.jpg",
  categoryId: "1",
  serieId: "1",
});
Artwork.create({
  name: "La charla",
  description: " Oleo sobre lienzo. 90x90",
  price: 3000,
  img: "pintura-indomitos7.jpg",
  categoryId: "1",
  serieId: "1",
});
Artwork.create({
  name: "La charla - Blanco y Negro",
  description: "Blanco y negro - Oleo sobre lienzo. 90x90",
  price: 3000,
  img: "pintura-indomitos7b&n.jpg",
  categoryId: "1",
  serieId: "1",
});
Artwork.create({
  name: "Pincha-globos",
  description: "Oleo sobre lienzo. 100x90",
  price: 3000,
  img: "pintura-indomitos8.jpg",
  categoryId: "1",
  serieId: "1",
});
Artwork.create({
  name: "Mil brazos",
  description: "Oleo sobre tela. 80 x 100",
  price: 6000,
  img: "pintura-indomitos10.jpg",
  categoryId: "1",
  serieId: "1",
});
Artwork.create({
  name: "Mil brazos - Blanco y Negro",
  description: "Oleo sobre tela. 80 x 100",
  price: 6000,
  img: "pintura-indomitos10b&n.jpg",
  categoryId: "1",
  serieId: "1",
});
Artwork.create({
  name: "Soy una perra",
  description: "Oleo sobre tela. 80 x 100",
  price: 6000,
  img: "pintura-indomitos6.jpg",
  categoryId: "1",
  serieId: "1",
});
Artwork.create({
  name: "Soy una perra - Blanco y Negro",
  description: "Oleo sobre tela. 80 x 100",
  price: 6000,
  img: "pintura-indomitos6b&n.jpg",
  categoryId: "1",
  serieId: "1",
});
Artwork.create({
  name: "Mujer en Oleo I",
  description: "Oleo sobre tela. 80 x 100",
  price: 6000,
  img: "pintura-naturaleza1.jpg",
  categoryId: "1",
  serieId: "2",
});

Artwork.create({
  name: "Hombre Pajaro",
  description: "Oleo 200 x 200",
  price: 3000,
  img: "pintura-naturaleza3.jpg",
  categoryId: "1",
  serieId: "2",
});

Artwork.create({
  name: "En su medio Natural",
  description: "Acrilico sobre lienzo. 90x90",
  price: 3000,
  img: "pintura-naturaleza4.jpg",
  categoryId: "1",
  serieId: "2",
});
Artwork.create({
  name: "El protector",
  description: "Oleo sobre lienzo. 100x90",
  price: 3000,
  img: "pintura-naturaleza5.jpg",
  categoryId: "1",
  serieId: "2",
});
Artwork.create({
  name: "Quinquela Querido",
  description: "Acrilico sobre tela. 80 x 100",
  price: 6000,
  img: "pinturas-boca-1.jpg",
  categoryId: "1",
  serieId: "3",
});
Artwork.create({
  name: "La familia",
  description: "Acrilico sobre tela. 80 x 100",
  price: 6000,
  img: "pinturas-boca-2.jpg",
  categoryId: "1",
  serieId: "3",
});

Artwork.create({
  name: "En el patio",
  description: "Oleo 200 x 200",
  price: 3000,
  img: "pinturas-boca-3.jpg",
  categoryId: "1",
  serieId: "3",
});
Artwork.create({
  name: "Escena de La Boca",
  description: "Acuarela sobre lienzo; 200 x 200",
  price: 5000,
  img: "pinturas-boca-4.jpg",
  categoryId: "1",
  serieId: "3",
});

//----------TINTA------------
Artwork.create({
  name: "Mundo en birome",
  description: "Lapicera sobre papel. 35 x 42",
  price: 1200,
  img: "tinta9.jpg",
  categoryId: "2",
  serieId: "8",
});
Artwork.create({
  name: "Lapicera",
  description: "Lapicera sobre papel. 35 x 42",
  price: 1200,
  img: "tinta10.jpg",
  categoryId: "2",
  serieId: "8",
});
Artwork.create({
  name: "Mundo en birome",
  description: "Lapicera sobre papel. 35 x 42",
  price: 1200,
  img: "birome0.jpg",
  categoryId: "2",
  serieId: "8",
});
Artwork.create({
  name: "Bring it back",
  description: "Tinta sobre papel, 90x80",
  price: 7500,
  img: "tinta8.jpg",
  categoryId: "2",
  serieId: "8",
});
Artwork.create({
  name: "Rivalidad",
  description: "Tinta sobre papel, 90x80",
  price: 7500,
  img: "tintaMujeres.jpg",
  categoryId: "2",
  serieId: "8",
});

Artwork.create({
  name: "Tintas",
  description: "Tinta sobre papel, 120x80",
  price: 5000,
  img: "tinta1.jpg",
  categoryId: "2",
  serieId: "8",
});

Artwork.create({
  name: "Cortazar",
  description: "Birome sobre papel; 200 x 200",
  price: 3000,
  img: "CORTAZARazul.jpg",
  categoryId: "2",
  serieId: "8",
});

Artwork.create({
  name: "Mujer Alfa",
  description: "Lapiz sobre papel 200 x 200",
  price: 3000,
  img: "mujerLapicera.jpg",
  categoryId: "2",
  serieId: "8",
});
Artwork.create({
  name: "Mujer Betta",
  description: "Lapiz sobre papel 200 x 200",
  price: 3000,
  img: "mujerLapicera2.jpg",
  categoryId: "2",
  serieId: "8",
});
Artwork.create({
  name: "Mujer Gamma",
  description: "Lapiz sobre papel 200 x 200",
  price: 3000,
  img: "mujerLapicera3.jpg",
  categoryId: "2",
  serieId: "8",
});

Artwork.create({
  name: "Mujer-Mujer",
  description: "Oleo sobre papel 200 x 200",
  price: 1200,
  img: "mujerTinta.jpg",
  categoryId: "2",
  serieId: "8",
});

Artwork.create({
  name: "Diablos",
  description: "Tinta sobre papel 75 x 70",
  price: 5200,
  img: "diablos.jpg",
  categoryId: "2",
  serieId: "8",
});

Artwork.create({
  name: "TintaHomMuj",
  description: "Tinta sobre madera. Tecnica mixta 200 x 200",
  price: 1200,
  img: "tintaHomMuj.jpg",
  categoryId: "2",
  serieId: "8",
});

Artwork.create({
  name: "Tintas",
  description: "TInta papel 200 x 200",
  price: 1200,
  img: "tinta3.jpg",
  categoryId: "2",
  serieId: "8",
});

Artwork.create({
  name: "Tntos",
  description: "Tinta sobre papel 75 x 70",
  price: 5200,
  img: "tinta2.jpg",
  categoryId: "2",
  serieId: "8",
});

Artwork.create({
  name: "Bella Tinta",
  description: "Tinta sobre madera. Tecnica mixta 200 x 200",
  price: 1200,
  img: "tinta4.jpg",
  categoryId: "2",
  serieId: "8",
});

//----------DIGITAL----------

Artwork.create({
  name: "Manos: que ven?",
  description: "Arte digital 75 x 70",
  price: 1200,
  img: "digital18.jpg",
  categoryId: "3",
  serieId: "8",
});
Artwork.create({
  name: "Vamos",
  description: "Arte digital 75 x 70",
  price: 250,
  img: "digital1.jpg",
  categoryId: "3",
  serieId: "8",
});
Artwork.create({
  name: "Ahora si!",
  description: "Arte digital 75 x 70",
  price: 240,
  img: "digital2.jpg",
  categoryId: "3",
  serieId: "8",
});
Artwork.create({
  name: "Sentate, veni.",
  description: "Arte digital 75 x 70",
  price: 100,
  img: "digital3.jpg",
  categoryId: "3",
  serieId: "8",
});
Artwork.create({
  name: "A la cucha!",
  description: "Arte digital 100 x 100",
  price: 300,
  img: "digital4.jpg",
  categoryId: "3",
  serieId: "8",
});

Artwork.create({
  name: "Dialogo Azul",
  description: "Arte digital 75 x 70",
  price: 240,
  img: "digital5.jpg",
  categoryId: "3",
  serieId: "8",
});
Artwork.create({
  name: "A rodar",
  description: "Arte digital 75 x 70",
  price: 100,
  img: "digital8.jpg",
  categoryId: "3",
  serieId: "8",
});
Artwork.create({
  name: "Lobo de mundo",
  description: "Arte digital 100 x 100",
  price: 300,
  img: "digital7.jpg",
  categoryId: "3",
  serieId: "8",
});

Artwork.create({
  name: "Nube negra",
  description: "Arte digital 100 x 100",
  price: 300,
  img: "digital8.jpg",
  categoryId: "3",
  serieId: "8",
});

Artwork.create({
  name: "Crecer",
  description: "Arte digital 90 x 70",
  price: 290,
  img: "digital9.jpg",
  categoryId: "3",
  serieId: "8",
});
Artwork.create({
  name: "Navidad",
  description: "Arte digital 75 x 70",
  price: 100,
  img: "digital10.jpg",
  categoryId: "3",
  serieId: "8",
});
Artwork.create({
  name: "Flotemos",
  description: "Arte digital 100 x 100",
  price: 300,
  img: "digital11.jpg",
  categoryId: "3",
  serieId: "8",
});
Artwork.create({
  name: "El desastre",
  description: "Arte digital 90 x 70",
  price: 290,
  img: "digital12.jpg",
  categoryId: "3",
  serieId: "8",
});
Artwork.create({
  name: "Buenos muchachos",
  description: "Arte digital 180 x 70",
  price: 100,
  img: "digital13.jpg",
  categoryId: "3",
  serieId: "8",
});
Artwork.create({
  name: "A cuatro manos",
  description: "Arte digital 100 x 100",
  price: 300,
  img: "digital14.jpg",
  categoryId: "3",
  serieId: "8",
});
Artwork.create({
  name: "La Banda",
  description: "Arte digital 70 x 100",
  price: 200,
  img: "digital15.jpg",
  categoryId: "3",
  serieId: "8",
});

//---------LAPIZ---------------

Artwork.create({
  name: "Mujer en Lapiz",
  description: "Lapiz 80 x 70",
  price: 5200,
  img: "lapiz2.jpg",
  categoryId: "4",
  serieId: "8",
});
Artwork.create({
  name: "A todo color",
  description: "Lapiz color 80 x 70",
  price: 1000,
  img: "lapiz3.jpg",
  categoryId: "4",
  serieId: "8",
});
Artwork.create({
  name: "Pajaro y noche",
  description: "Lapiz 80 x 70",
  price: 1000,
  img: "lapiz4.jpg",
  categoryId: "4",
  serieId: "8",
});
Artwork.create({
  name: "Habla de frente",
  description: "Lapiz 80 x 70",
  price: 1000,
  img: "lapiz5.jpg",
  categoryId: "4",
  serieId: "8",
});
Artwork.create({
  name: "Burda Copia",
  description: "Lapiz 80 x 70ada. 50x90",
  price: 1500,
  img: "lapiz6.jpg",
  categoryId: "4",
  serieId: "8",
});
Artwork.create({
  name: "Buenos Demonios",
  description: "Lapiz 80 x 70",
  price: 1000,
  img: "lapiz7.jpg",
  categoryId: "4",
  serieId: "8",
});
Artwork.create({
  name: "Hay equipo",
  description: "Lapiz y acuera. Tecnica mixta 100 x 705",
  price: 1200,
  img: "lapiz8.jpg",
  categoryId: "4",
  serieId: "8",
});

Artwork.create({
  name: "Pensemos",
  description: "Lapiz y carbonilla. Tecnica mixta 80 x 705",
  price: 1200,
  img: "lapiz9.jpg",
  categoryId: "4",
  serieId: "8",
});
Artwork.create({
  name: "Otra epoca",
  description: "Lapiz 80 x 705",
  price: 1200,
  img: "lapiz10.jpg",
  categoryId: "4",
  serieId: "8",
});

Artwork.create({
  name: "Ser de luz",
  description: "Lapiz color. 80 x 705",
  price: 1200,
  img: "lapiz11.jpg",
  categoryId: "4",
  serieId: "8",
});

Artwork.create({
  name: "Sonreir",
  description: "Lapiz 80 x 70",
  price: 1200,
  img: "lapiz13.jpg",
  categoryId: "4",
  serieId: "8",
});
Artwork.create({
  name: "En el bosque",
  description: "Lapiz 80 x 70",
  price: 1200,
  img: "lapiz14.jpg",
  categoryId: "4",
  serieId: "8",
});

Artwork.create({
  name: "Se lo lleva el viento",
  description: "Lapiz 80 x 70x75",
  price: 1200,
  img: "lapiz15.jpg",
  categoryId: "4",
  serieId: "8",
});
Artwork.create({
  name: "A color",
  description: "Lapiz color, técnica mixta 80 x 70",
  price: 1200,
  img: "lapiz16.jpg",
  categoryId: "4",
  serieId: "8",
});
Artwork.create({
  name: "Perra",
  description: "Lapiz 80 x 70",
  price: 1200,
  img: "lapiz17.jpg",
  categoryId: "4",
  serieId: "8",
});

Artwork.create({
  name: "Irradiado",
  description: "Lapiz color, tecnica mixta 80 x 70",
  price: 1200,
  img: "lapiz21.jpg",
  categoryId: "4",
  serieId: "8",
});

//---------OBJETOS--------------
Artwork.create({
  name: "Pesca",
  description: "Figura forma madera. 80 x 70",
  price: 5200,
  img: "pecesMadera.jpg",
  categoryId: "5",
  serieId: "7",
});
Artwork.create({
  name: "Caja La Linda",
  description: "Cajita de madera pintada. 50x50x65",
  price: 1000,
  img: "CAJA1.jpg",
  categoryId: "5",
  serieId: "6",
});
Artwork.create({
  name: "Caja La Linda",
  description: "Cajita de madera pintada. 50x50x65",
  price: 1000,
  img: "CAJA2.jpg",
  categoryId: "5",
  serieId: "6",
});
Artwork.create({
  name: "Caja La Linda",
  description: "Cajita de madera pintada. 50x50x65",
  price: 1000,
  img: "CAJA3.jpg",
  categoryId: "5",
  serieId: "6",
});
Artwork.create({
  name: "Bandeja pal'mate",
  description: "Bandeja de madera pintada. 50x90",
  price: 1500,
  img: "bandeja.jpg",
  categoryId: "5",
  serieId: "8",
});
Artwork.create({
  name: "Cajas Princesa",
  description: "Cajita de madera pintada. 50x50x65",
  price: 1000,
  img: "cajaPrincesa.jpg",
  categoryId: "5",
  serieId: "6",
});
Artwork.create({
  name: "Pajaros Madera",
  description: "Figuras en madera.75x75",
  price: 1200,
  img: "pajaroCartapesta.jpg",
  categoryId: "5",
  serieId: "7",
});

Artwork.create({
  name: "Tu cara de madera",
  description: "Figuras en madera.75x75",
  price: 1200,
  img: "objeto9.jpg",
  categoryId: "5",
  serieId: "7",
});
Artwork.create({
  name: "Peces Madera",
  description: "Figuras en madera.75x75",
  price: 1200,
  img: "pecesCartapesta.jpg",
  categoryId: "5",
  serieId: "7",
});

Artwork.create({
  name: "Los tres",
  description: "Figuras en madera.75x75",
  price: 1200,
  img: "lostres.jpg",
  categoryId: "5",
  serieId: "7",
});

Artwork.create({
  name: "Zorro y flia",
  description: "Figura en madera.55x75",
  price: 1200,
  img: "objeto1.jpg",
  categoryId: "5",
  serieId: "7",
});
Artwork.create({
  name: "Vamos",
  description: "Figura en madera.75x75",
  price: 1200,
  img: "objeto2.jpg",
  categoryId: "5",
  serieId: "7",
});

Artwork.create({
  name: "Prendedores",
  description: "Prendores en madera.75x75",
  price: 1200,
  img: "objeto3.jpg",
  categoryId: "5",
  serieId: "8",
});
Artwork.create({
  name: "Mujer que baila en madera",
  description: "Figura en madera.55x75",
  price: 1200,
  img: "objeto4.jpg",
  categoryId: "5",
  serieId: "7",
});
Artwork.create({
  name: "Hombre que baila en madera",
  description: "Figura en madera.75x75",
  price: 1200,
  img: "objeto5.jpg",
  categoryId: "5",
  serieId: "7",
});

Artwork.create({
  name: "Diablo bebedor en madera",
  description: "Prendores en madera.75x75",
  price: 1200,
  img: "objeto6.jpg",
  categoryId: "5",
  serieId: "7",
});
