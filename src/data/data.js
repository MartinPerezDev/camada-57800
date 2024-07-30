const productos = [
  {
    id: "Rtx123",
    nombre: "Ea Sport fc 24",
    descripcion: "",
    precio: 200,
    categoria: "deportes",
    stock: 10,
    imagen: "/img/fc.webp"
  },
  {
    id: "Rtx456",
    nombre: "NBA 2K23",
    descripcion: "NBA 2K23 trae de vuelta el mejor baloncesto de 2K Sports, que durante dos décadas ha logrado establecerse como una pieza clave de la cultura del baloncesto al crear videojuegos de basket con una experiencia inmersiva en la palma de la mano de cada jugador.",
    precio: 220,
    categoria: "deportes",
    stock: 5,
    imagen: "/img/nba.webp"
  },
  {
    id: "Rtx789",
    nombre: "Way of the Hunter",
    descripcion: "Way of the Hunter se presenta como una experiencia de caza auténtica que permite explorar y capturar presas en amplios entornos de mundo abierto de Estados Unidos y Europa. Nine Rocks Games desarrolla un videojuego donde el jugador se convierte en propietario de una cabaña rodeada de espectaculares hábitats y manadas de animales.",
    precio: 120,
    categoria: "deportes",
    stock: 2,
    imagen: "/img/way.webp"
  },
  {
    id: "Frg111",
    nombre: "God Of War Ragnarök",
    descripcion: "",
    precio: 500,
    categoria: "aventura",
    stock: 2,
    imagen: "/img/god.webp"
  },
  {
    id: "Frg222",
    nombre: "New Tales",
    descripcion: "New Tales from the Borderlands es una entrega independiente de la línea de spin-offs narrativos de Gearbox: lejos de Telltale, y de la historia original de Rhys y compañía, este episodio cuenta las desventuras de un grupo de perdedores (Anu, Octavio y Fran) en el peor día de sus vidas. Durante la campaña, tendrán que enfrentarse a la facción Tediore en su reinado del planeta Promethea, así como contra los alienígenas y los maleantes que lo pueblan.",
    precio: 550,
    categoria: "aventura",
    stock: 5,
    imagen: "/img/tales.webp"
  },
  {
    id: "Frg333",
    nombre: "Spider-Man",
    descripcion: "piderman protagoniza este videojuego de acción desarrollado por Insomniac Games, los autores de Resistance y Ratchet & Clank entre otros, en exclusiva para PS4. La historia de esta aventura es totalmente original y nos pone en el rol de un Peter Parker experimentado y maduro que debe lidiar con los problemas que suponen el tener que salvar Manhattan de los peores criminales o villanos y compatibilizarlo con su vida personal.",
    precio: 600,
    categoria: "aventura",
    stock: 8,
    imagen: "/img/spider.webp"
  },
  {
    id: "Dcd111",
    nombre: "Sonic Frontiers",
    descripcion: "Sonic Frontiers es un videojuego de acción, plataformas y aventuras en mundo abierto desarrollado por Sonic Team, el equipo creador de Sonic Generations y Sonic Forces. Se presenta como el buque insignia del futuro del erizo azul de SEGA en el mundo de los videojuegos y busca ofrecer un encuentro entre mundos distintos, desafiando al erizo azul a correr a tope y alcanzar nuevas alturas con más libertad que nunca.",
    precio: 350,
    categoria: "accion",
    stock: 25,
    imagen: "/img/sonic.webp"
  },
  {
    id: "Dcd222",
    nombre: "One Piece Odyssey",
    descripcion: "La exitosa y veterana saga One Piece se embarca en un RPG de corte japonés que se convierte en la producción más ambiciosa jamás realizada por Bandai Namco dentro de esta serie manganime. One Piece Odyssey es un videojuego de rol y aventura en mundo abierto que combina la exploración de una isla misteriosa, Waford, con batallas contra sus lugareños que tienen lugar por turnos, pudiendo decidir con qué personajes entablamos cada uno de estos combates.",
    precio: 450,
    categoria: "accion",
    stock: 5,
    imagen: "/img/one-piece.webp"
  },
  {
    id: "Dcd333",
    nombre: "Cuphead",
    descripcion: "Un indie de categoría como Cuphead regresa con un DLC que expande la acción del videojuego con nuevos jefes, más armas para hacerles frente ¡y nueva protagonista! en Cuphead The Delicious Last Course.",
    precio: 600,
    categoria: "accion",
    stock: 15,
    imagen: "/img/cuphead.webp"
  }
]

const obtenerProductos = () => {
  return new Promise((resolve, reject) => {
    //simulamos un retraso de red
    setTimeout(() => {
      resolve(productos)
    }, 2000);
  });
};

export default obtenerProductos