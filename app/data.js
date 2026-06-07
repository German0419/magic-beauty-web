/* Magic Beauty — catalog data (prices in Colombian pesos, COP) */
window.MB = {
  contact: {
    whatsapp: "573005707810",
    whatsappDisplay: "300 570 7810",
    instagram: "magic_beauty_jdi",
    city: "Jamundí",
    since: "2016",
  },

  // ---------- PESTAÑAS ----------
  lashes: {
    intro: "Una mirada que habla por ti. Diseñamos cada juego de pestañas a la medida de tus rasgos, con técnica precisa y un acabado impecable que dura.",
    groups: [
      {
        id: "ext",
        title: "Extensiones de pestañas",
        note: "Precio de montura y retoque (3–4 semanas).",
        twoPrice: true,
        items: [
          { name: "Efecto Clásico",      desc: "Una extensión por pestaña. Natural y definido.",        montura: "80.000",  retoque: "40.000" },
          { name: "Efecto Combinado",    desc: "Mezcla de clásico y volumen. Densidad equilibrada.",    montura: "110.000", retoque: "55.000" },
          { name: "Efecto Tecnológico",  desc: "Mapeo avanzado para una mirada abierta y luminosa.",    montura: "130.000", retoque: "65.000" },
          { name: "Volumen Ruso",        desc: "Abanicos ligeros. Máxima densidad, peso pluma.",         montura: "130.000", retoque: "65.000" },
        ],
      },
      {
        id: "mirada",
        title: "Mirada & cejas",
        twoPrice: false,
        items: [
          { name: "Lifting de pestañas",     desc: "Curvatura y elevación de tu pestaña natural.",   price: "75.000" },
          { name: "Pestañas punto a punto",  desc: "Aplicación pelo a pelo, efecto sutil.",          price: "35.000" },
          { name: "Laminado de cejas",       desc: "Cejas peinadas, fijas y con forma todo el día.", price: "75.000" },
          { name: "Diseño de cejas",         desc: "Visagismo y depilación de precisión.",           price: "35.000" },
        ],
      },
      {
        id: "cera",
        title: "Cera & hilo",
        twoPrice: false,
        items: [
          { name: "Cejas — cera",   desc: "Perfilado limpio con cera tibia.",      price: "15.000" },
          { name: "Bigote — cera",  desc: "Acabado suave en segundos.",            price: "12.000" },
          { name: "Cejas — hilo",   desc: "Técnica de hilo, trazo exacto.",        price: "18.000" },
          { name: "Bigote — hilo",  desc: "Depilación delicada con hilo.",         price: "15.000" },
        ],
      },
    ],
  },

  // ---------- UÑAS ----------
  nails: {
    intro: "Manos y pies que se sienten como un lujo cotidiano. Trabajo prolijo, productos de alta gama y diseños a medida para ella y para él.",
    dama: [
      { name: "Tradicional",        desc: "Esmaltado clásico de larga duración.",
        prices: [ ["Manos y pies", "35.000"], ["Manos o pies", "22.000"] ] },
      { name: "Semipermanente",     desc: "Color intenso, brillo que no se rinde.",
        prices: [ ["Manos y pies", "75.000"], ["Manos", "45.000"], ["Pies", "35.000"] ] },
      { name: "Baño de gel",        desc: "Refuerzo flexible sobre uña natural.",
        prices: [ ["Manos y pies", "100.000"], ["Manos", "60.000"], ["Pies", "45.000"] ] },
      { name: "Acrílico / Polygel", desc: "Estructura y longitud a tu medida.",
        prices: [ ["Montura", "100.000"], ["Baby boomer", "110.000"], ["Retoque", "65.000"] ] },
      { name: "Baño de acrílico",   desc: "Resistencia extra sobre uña natural.",
        prices: [ ["Manos", "70.000"] ] },
      { name: "Dipping",            desc: "Inmersión en polvo, secado sin lámpara.",
        prices: [ ["Manos", "60.000"] ] },
      { name: "Press On",           desc: "Uñas listas, aplicación express.",
        prices: [ ["Montura", "75.000"], ["Retoque", "65.000"] ] },
      { name: "Limpieza",           desc: "Retiro y preparación de la uña.",
        prices: [ ["Manos o pies", "12.000"] ] },
    ],
    caballero: [
      { name: "Tradicional",     desc: "Manicure y pedicure prolijo, acabado natural.",
        prices: [ ["Manos y pies", "30.000"], ["Manos o pies", "18.000"] ] },
      { name: "Semipermanente",  desc: "Brillo discreto y resistente.",
        prices: [ ["Manos y pies", "55.000"], ["Manos", "30.000"], ["Manos semi + pies tradicional", "45.000"] ] },
    ],
  },
};
