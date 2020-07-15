const User = require("../server/db/models/index").User;
const Category = require ("../server/db/models/index").Category;
const Product = require("../server/db/models/index").Product;
const Serie = require ('./db/models/index').Serie;

User.create({
  name: "agus",
  surname: "Pardo",
  adress: "472 esq 19",
  cuit: 20315965854,
  email: "agus@hotmail.com",
  isAdmin: true,
  avatar: "",
  password: "1234",
  passwordConfirmed: false
  //salt: 'lkjljasda'
});

Category.create({
  name: "paints",
  img: "milPiernas.jpg"

})
Category.create({
  name: "ink",
  img: "birome0.jpg"

})
Category.create({
  name: "digital",
  img: "vacaciones.jpg"

})
Category.create({
  name: "pencil",
  img: "lapiz2.jpg"

})
Category.create({
  name: "objets",
  img: "pajaroMaderaRuedas.jpg"
})

Serie.create({
  name: "Indomitos",
  img: "pintura-indomitos3.jpg",
  categoryId:"1"
})
Serie.create({
  name: "Naturaleza Salvaje",
  img:"pintura-naturaleza1.jpg",
  categoryId:"1"
})
Serie.create({
  name: "La Boca",
  img: "pinturas-boca-1.jpg",
  categoryId:"1"
})
Serie.create({
  name: "Elementos",
  img:"pintura-elementos3.jpg",
  categoryId:"1"
})
Serie.create({
  name: "De Fiesta",
  img:"pintura-festejo1.jpg",
  categoryId:"1"
})
Serie.create({
  name: "Cajas",
  img:"cajaPrincesa.jpg",
  categoryId:"5"
})
Serie.create({
  name: "Muñecos",
  img:"pecesCartapesta.jpg",
  categoryId:"5"
})
Serie.create({
  name: "Varios",
  img:"lapiz7.jpg",
  categoryId:"5"
})


//PAINTS
Product.create({
  name: "Arbol de Peces",
  description: "Oleo 200 x 200",
  price: 5000,
  stock: 1,
  img: "pintura-elementos1.jpg",
  categoryId:"1",
  serieId:"4  "
});

Product.create({
  name: "Manos que ven",
  description: "Oleo 200 x 200",
  price: 15000,
  stock: 1,
  img: "pintura-elementos2.jpg",
  categoryId:"1", 
  serieId:"4"
});


Product.create({
  name: "Mujer alada",
  description: "Oleo sobre papel 200 x 200",
  price: 5000,
  stock: 1,
  img: "pintura-elementos3.jpg",
  categoryId:"1",
  serieId:"4"
});
Product.create({
  name: "4 tipos audaces",
  description: "Oleo sobre lienzo. 75x75",
  price: 3000,
  stock: 1,
  img: "pintura-festejo2.jpg",
  categoryId:"1",
  serieId:"5"
});
Product.create({
  name: "El grupete",
  description: "Oleo sobre lienzo. 75x75",
  price: 3000,
  stock: 1,
  img: "pintura-festejo1.jpg",
  categoryId:"1",
  serieId:"5"
});
Product.create({
  name: "Diablo y pajaro",
  description: "Oleo sobre lienzo. 90x90. ",
  price: 3000,
  stock: 1,
  img: "pintura-indomitos3.jpg",
  categoryId:"1",
  serieId:"1"
});
Product.create({
  name: "Diablo y pajaro - Blanco y Negro",
  description: "Blanco y negro - Oleo sobre lienzo. 90x90. ",
  price: 3000,
  stock: 1,
  img: "pintura-indomitos3b&n.jpg",
  categoryId:"1",
  serieId:"1"
});
Product.create({
  name: "La charla",
  description: " Oleo sobre lienzo. 90x90",
  price: 3000,
  stock: 1,
  img: "pintura-indomitos7.jpg",
  categoryId:"1",
  serieId:"1"
});
Product.create({
  name: "La charla - Blanco y Negro",
  description: "Blanco y negro - Oleo sobre lienzo. 90x90",
  price: 3000,
  stock: 1,
  img: "pintura-indomitos7b&n.jpg",
  categoryId:"1",
  serieId:"1"
});
Product.create({
  name: "Pincha-globos",
  description: "Oleo sobre lienzo. 100x90",
  price: 3000,
  stock: 1,
  img: "pintura-indomitos8.jpg",
  categoryId:"1",
  serieId:"1"
});
Product.create({
  name: "Mil brazos",
  description: "Oleo sobre tela. 80 x 100",
  price: 6000,
  stock: 1,
  img: "pintura-indomitos10.jpg",
  categoryId:"1",
  serieId:"1"
});
Product.create({
  name: "Mil brazos - Blanco y Negro",
  description: "Oleo sobre tela. 80 x 100",
  price: 6000,
  stock: 1,
  img: "pintura-indomitos10b&n.jpg",
  categoryId:"1",
  serieId:"1"
});
Product.create({
  name: "Soy una perra",
  description: "Oleo sobre tela. 80 x 100",
  price: 6000,
  stock: 1,
  img: "pintura-indomitos6.jpg",
  categoryId:"1",
  serieId:"1"
});
Product.create({
  name: "Soy una perra - Blanco y Negro",
  description: "Oleo sobre tela. 80 x 100",
  price: 6000,
  stock: 1,
  img: "pintura-indomitos6b&n.jpg",
  categoryId:"1",
  serieId:"1"
});
Product.create({
  name: "Mujer en Oleo I",
  description: "Oleo sobre tela. 80 x 100",
  price: 6000,
  stock: 1,
  img: "pintura-naturaleza1.jpg",
  categoryId:"1",
  serieId:"2"
});

Product.create({
  name: "Hombre Pajaro",
  description: "Oleo 200 x 200",
  price: 3000,
  stock: 1,
  img: "pintura-naturaleza3.jpg",
  categoryId:"1",
  serieId:"2"
});

Product.create({
  name: "En su medio Natural",
  description: "Acrilico sobre lienzo. 90x90",
  price: 3000,
  stock: 1,
  img: "pintura-naturaleza4.jpg",
  categoryId:"1",
  serieId:"2"
});
Product.create({
  name: "El protector",
  description: "Oleo sobre lienzo. 100x90",
  price: 3000,
  stock: 1,
  img: "pintura-naturaleza5.jpg",
  categoryId:"1",
  serieId:"2"
});
Product.create({
  name: "Quinquela Querido",
  description: "Acrilico sobre tela. 80 x 100",
  price: 6000,
  stock: 1,
  img: "pinturas-boca-1.jpg",
  categoryId:"1",
  serieId:"3"
});
Product.create({
  name: "La familia",
  description: "Acrilico sobre tela. 80 x 100",
  price: 6000,
  stock: 1,
  img: "pinturas-boca-2.jpg",
  categoryId:"1",
  serieId:"3"
});

Product.create({
  name: "En el patio",
  description: "Oleo 200 x 200",
  price: 3000,
  stock: 1,
  img: "pinturas-boca-3.jpg",
  categoryId:"1",
  serieId:"3"
});
Product.create({
  name: "Escena de La Boca",
  description: "Acuarela sobre lienzo; 200 x 200",
  price: 5000,
  stock: 1,
  img: "pinturas-boca-4.jpg",
  categoryId:"1",
  serieId:"3"
});


//----------TINTA------------
Product.create({
  name: "Mundo en birome",
  description: "Lapicera sobre papel. 35 x 42",
  price: 1200,
  stock: 1,
  img: "tinta9.jpg",
  categoryId:"2",
  serieId:"8"

});
Product.create({
  name: "Lapicera",
  description: "Lapicera sobre papel. 35 x 42",
  price: 1200,
  stock: 1,
  img: "tinta10.jpg",
  categoryId:"2",
  serieId:"8"
});
Product.create({
  name: "Mundo en birome",
  description: "Lapicera sobre papel. 35 x 42",
  price: 1200,
  stock: 1,
  img: "birome0.jpg",
  categoryId:"2",
  serieId:"8"
});
Product.create({
  name: "Bring it back",
  description: "Tinta sobre papel, 90x80",
  price: 7500,
  stock: 1,
  img: "tinta8.jpg",
  categoryId:"2",
  serieId:"8"
});
Product.create({
  name: "Rivalidad",
  description: "Tinta sobre papel, 90x80",
  price: 7500,
  stock: 1,
  img: "tintaMujeres.jpg",
  categoryId:"2",
  serieId:"8"
});

Product.create({
  name: "Tintas",
  description: "Tinta sobre papel, 120x80",
  price: 5000,
  stock: 1,
  img: "tinta1.jpg",
  categoryId:"2",
  serieId:"8"
});


Product.create({
  name: "Cortazar",
  description: "Birome sobre papel; 200 x 200",
  price: 3000,
  stock: 1,
  img: "CORTAZARazul.jpg",
  categoryId:"2",
  serieId:"8"
});


Product.create({
  name: "Mujer Alfa",
  description: "Lapiz sobre papel 200 x 200",
  price: 3000,
  stock: 1,
  img: "mujerLapicera.jpg",
  categoryId:"2",
  serieId:"8"
});
Product.create({
  name: "Mujer Betta",
  description: "Lapiz sobre papel 200 x 200",
  price: 3000,
  stock: 1,
  img: "mujerLapicera2.jpg",
  categoryId:"2",
  serieId:"8"
});
Product.create({
  name: "Mujer Gamma",
  description: "Lapiz sobre papel 200 x 200",
  price: 3000,
  stock: 1,
  img: "mujerLapicera3.jpg",
  categoryId:"2",
  serieId:"8"
});

Product.create({
  name: "Mujer-Mujer",
  description: "Oleo sobre papel 200 x 200",
  price: 1200,
  stock: 1,
  img: "mujerTinta.jpg",
  categoryId:"2",
  serieId:"8"
});

Product.create({
  name: "Diablos",
  description: "Tinta sobre papel 75 x 70",
  price: 5200,
  stock: 1,
  img: "diablos.jpg",
  categoryId:"2",
  serieId:"8"
});


Product.create({
  name: "TintaHomMuj",
  description: "Tinta sobre madera. Tecnica mixta 200 x 200",
  price: 1200,
  stock: 1,
  img: "tintaHomMuj.jpg",
  categoryId:"2",
  serieId:"8"
});

Product.create({
  name: "Tintas",
  description: "TInta papel 200 x 200",
  price: 1200,
  stock: 1,
  img: "tinta3.jpg",
  categoryId:"2",
  serieId:"8"
});

Product.create({
  name: "Tntos",
  description: "Tinta sobre papel 75 x 70",
  price: 5200,
  stock: 1,
  img: "tinta2.jpg",
  categoryId:"2",
  serieId:"8"
});


Product.create({
  name: "Bella Tinta",
  description: "Tinta sobre madera. Tecnica mixta 200 x 200",
  price: 1200,
  stock: 1,
  img: "tinta4.jpg",
  categoryId:"2",
  serieId:"8"
});


//----------DIGITAL----------

Product.create({
  name: "Manos: que ven?",
  description: "Arte digital 75 x 70",
  price: 1200,
  stock: 1,
  img: "digital18.jpg",
  categoryId:"3",
  serieId:"8"
});
Product.create({
  name: "Vamos",
  description: "Arte digital 75 x 70",
  price: 250,
  stock: 1,
  img: "digital1.jpg",
  categoryId:"3",
  serieId:"8"
});
Product.create({
  name: "Ahora si!",
  description: "Arte digital 75 x 70",
  price: 240,
  stock: 1,
  img: "digital2.jpg",
  categoryId:"3",
  serieId:"8"
});
Product.create({
  name: "Sentate, veni.",
  description: "Arte digital 75 x 70",
  price: 100,
  stock: 1,
  img: "digital3.jpg",
  categoryId:"3",
  serieId:"8"
});
Product.create({
  name: "A la cucha!",
  description: "Arte digital 100 x 100",
  price: 300,
  stock: 1,
  img: "digital4.jpg",
  categoryId:"3",
  serieId:"8"
});

Product.create({
  name: "Dialogo Azul",
  description: "Arte digital 75 x 70",
  price: 240,
  stock: 1,
  img: "digital5.jpg",
  categoryId:"3",
  serieId:"8"
});
Product.create({
  name: "A rodar",
  description: "Arte digital 75 x 70",
  price: 100,
  stock: 1,
  img: "digital8.jpg",
  categoryId:"3",
  serieId:"8"
});
Product.create({
  name: "Lobo de mundo",
  description: "Arte digital 100 x 100",
  price: 300,
  stock: 1,
  img: "digital7.jpg",
  categoryId:"3",
  serieId:"8"
});

Product.create({
  name: "Nube negra",
  description: "Arte digital 100 x 100",
  price: 300,
  stock: 1,
  img: "digital8.jpg",
  categoryId:"3",
  serieId:"8"
});

Product.create({
  name: "Crecer",
  description: "Arte digital 90 x 70",
  price: 290,
  stock: 1,
  img: "digital9.jpg",
  categoryId:"3",
  serieId:"8"
});
Product.create({
  name: "Navidad",
  description: "Arte digital 75 x 70",
  price: 100,
  stock: 1,
  img: "digital10.jpg",
  categoryId:"3",
  serieId:"8"
});
Product.create({
  name: "Flotemos",
  description: "Arte digital 100 x 100",
  price: 300,
  stock: 1,
  img: "digital11.jpg",
  categoryId:"3",
  serieId:"8"
});
Product.create({
  name: "El desastre",
  description: "Arte digital 90 x 70",
  price: 290,
  stock: 1,
  img: "digital12.jpg",
  categoryId:"3",
  serieId:"8"
});
Product.create({
  name: "Buenos muchachos",
  description: "Arte digital 180 x 70",
  price: 100,
  stock: 1,
  img: "digital13.jpg",
  categoryId:"3",
  serieId:"8"
});
Product.create({
  name: "A cuatro manos",
  description: "Arte digital 100 x 100",
  price: 300,
  stock: 1,
  img: "digital14.jpg",
  categoryId:"3",
  serieId:"8"
});
Product.create({
  name: "La Banda",
  description: "Arte digital 70 x 100",
  price: 200,
  stock: 1,
  img: "digital15.jpg",
  categoryId:"3",
  serieId:"8"
});

//---------LAPIZ---------------

Product.create({
  name: "Mujer en Lapiz",
  description: "Lapiz 80 x 70",
  price: 5200,
  stock: 1,
  img: "lapiz2.jpg",
  categoryId:"4",
  serieId:"8"
});
Product.create({
  name: "A todo color",
  description: "Lapiz color 80 x 70",
  price: 1000,
  stock: 1,
  img: "lapiz3.jpg",
  categoryId:"4",
  serieId:"8"
});
Product.create({
  name: "Pajaro y noche",
  description: "Lapiz 80 x 70",
  price: 1000,
  stock: 1,
  img: "lapiz4.jpg",
  categoryId:"4",
  serieId:"8"
});
Product.create({
  name: "Habla de frente",
  description: "Lapiz 80 x 70",
  price: 1000,
  stock: 1,
  img: "lapiz5.jpg",
  categoryId:"4",
  serieId:"8"
});
Product.create({
  name: "Burda Copia",
  description: "Lapiz 80 x 70ada. 50x90",
  price: 1500,
  stock: 1,
  img: "lapiz6.jpg",
  categoryId:"4",
  serieId:"8"
});
Product.create({
  name: "Buenos Demonios",
  description: "Lapiz 80 x 70",
  price: 1000,
  stock: 1,
  img: "lapiz7.jpg",
  categoryId:"4",
  serieId:"8"
});
Product.create({
  name: "Hay equipo",
  description: "Lapiz y acuera. Tecnica mixta 100 x 705",
  price: 1200,
  stock: 5,
  img: "lapiz8.jpg",
  categoryId:"4",
  serieId:"8"
});

Product.create({
  name: "Pensemos",
  description: "Lapiz y carbonilla. Tecnica mixta 80 x 705",
  price: 1200,
  stock: 5,
  img: "lapiz9.jpg",
  categoryId:"4",
  serieId:"8"
});
Product.create({
  name: "Otra epoca",
  description: "Lapiz 80 x 705",
  price: 1200,
  stock: 5,
  img: "lapiz10.jpg",
  categoryId:"4",
  serieId:"8"
});

Product.create({
  name: "Ser de luz",
  description: "Lapiz color. 80 x 705",
  price: 1200,
  stock: 5,
  img: "lapiz11.jpg",
  categoryId:"4",
  serieId:"8"
});

Product.create({
  name: "Sonreir",
  description: "Lapiz 80 x 70",
  price: 1200,
  stock: 5,
  img: "lapiz13.jpg",
  categoryId:"4",
  serieId:"8"
});
Product.create({
  name: "En el bosque",
  description: "Lapiz 80 x 70",
  price: 1200,
  stock: 5,
  img: "lapiz14.jpg",
  categoryId:"4",
  serieId:"8"
});

Product.create({
  name: "Se lo lleva el viento",
  description: "Lapiz 80 x 70x75",
  price: 1200,
  stock: 5,
  img: "lapiz15.jpg",
  categoryId:"4",
  serieId:"8"
});
Product.create({
  name: "A color",
  description: "Lapiz color, técnica mixta 80 x 70",
  price: 1200,
  stock: 5,
  img: "lapiz16.jpg",
  categoryId:"4",
  serieId:"8"
});
Product.create({
  name: "Perra",
  description: "Lapiz 80 x 70",
  price: 1200,
  stock: 5,
  img: "lapiz17.jpg",
  categoryId:"4",
  serieId:"8"
});

Product.create({
  name: "Irradiado",
  description: "Lapiz color, tecnica mixta 80 x 70",
  price: 1200,
  stock: 5,
  img: "lapiz21.jpg",
  categoryId:"4",
  serieId:"8"
});


//---------OBJETOS--------------
Product.create({
  name: "Pesca",
  description: "Figura forma madera. 80 x 70",
  price: 5200,
  stock: 1,
  img: "pecesMadera.jpg",
  categoryId:"5",
  serieId:"7"
});
Product.create({
  name: "Caja La Linda",
  description: "Cajita de madera pintada. 50x50x65",
  price: 1000,
  stock: 1,
  img: "CAJA1.jpg",
  categoryId:"5",
  serieId:"6"
});
Product.create({
  name: "Caja La Linda",
  description: "Cajita de madera pintada. 50x50x65",
  price: 1000,
  stock: 1,
  img: "CAJA2.jpg",
  categoryId:"5",
  serieId:"6"
});
Product.create({
  name: "Caja La Linda",
  description: "Cajita de madera pintada. 50x50x65",
  price: 1000,
  stock: 1,
  img: "CAJA3.jpg",
  categoryId:"5",
  serieId:"6"
});
Product.create({
  name: "Bandeja pal'mate",
  description: "Bandeja de madera pintada. 50x90",
  price: 1500,
  stock: 1,
  img: "bandeja.jpg",
  categoryId:"5",
  serieId:"8"
});
Product.create({
  name: "Cajas Princesa",
  description: "Cajita de madera pintada. 50x50x65",
  price: 1000,
  stock: 1,
  img: "cajaPrincesa.jpg",
  categoryId:"5",
  serieId:"6"
});
Product.create({
  name: "Pajaros Madera",
  description: "Figuras en madera.75x75",
  price: 1200,
  stock: 5,
  img: "pajaroCartapesta.jpg",
  categoryId:"5",
  serieId:"7"
});

Product.create({
  name: "Tu cara de madera",
  description: "Figuras en madera.75x75",
  price: 1200,
  stock: 5,
  img: "objeto9.jpg",
  categoryId:"5",
  serieId:"7"
});
Product.create({
  name: "Peces Madera",
  description: "Figuras en madera.75x75",
  price: 1200,
  stock: 5,
  img: "pecesCartapesta.jpg",
  categoryId:"5",
  serieId:"7"
});

Product.create({
  name: "Los tres",
  description: "Figuras en madera.75x75",
  price: 1200,
  stock: 5,
  img: "lostres.jpg",
  categoryId:"5",
  serieId:"7"
});

Product.create({
  name: "Zorro y flia",
  description: "Figura en madera.55x75",
  price: 1200,
  stock: 5,
  img: "objeto1.jpg",
  categoryId:"5",
  serieId:"7"
});
Product.create({
  name: "Vamos",
  description: "Figura en madera.75x75",
  price: 1200,
  stock: 5,
  img: "objeto2.jpg",
  categoryId:"5",
  serieId:"7"
});

Product.create({
  name: "Prendedores",
  description: "Prendores en madera.75x75",
  price: 1200,
  stock: 5,
  img: "objeto3.jpg",
  categoryId:"5",
  serieId:"8"
});
Product.create({
  name: "Mujer que baila en madera",
  description: "Figura en madera.55x75",
  price: 1200,
  stock: 5,
  img: "objeto4.jpg",
  categoryId:"5",
  serieId:"7"
});
Product.create({
  name: "Hombre que baila en madera",
  description: "Figura en madera.75x75",
  price: 1200,
  stock: 5,
  img: "objeto5.jpg",
  categoryId:"5",
  serieId:"7"
});

Product.create({
  name: "Diablo bebedor en madera",
  description: "Prendores en madera.75x75",
  price: 1200,
  stock: 5,
  img: "objeto6.jpg",
  categoryId:"5",
  serieId:"7"
});


