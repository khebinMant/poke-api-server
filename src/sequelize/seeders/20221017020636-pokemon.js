'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pokemons', [
      //1 sin evolucion
      {
        name: 'ditto',
        evolution: 'null',
        color: 'purple',
        description: 'Redistribuye las células de su cuerpo para cobrar la apariencia de lo que ve, pero vuelve a la normalidad al relajarse.',
        is_legendary: false,
        is_mythical: false,
        height:3,
        weight:40,
        habitatId: 7,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //2 una evolución ->raichu(11)
      {
        name: 'pikachu',
        evolution: 'raichu',
        color: 'yellow',
        description: 'Levanta su cola para vigilar los alrededores. A veces, puede ser alcanzado por un rayo en esa pose, Las bolsas de las mejillas están llenas de electricidad, que libera cuando se siente amenazado.',
        is_legendary: false,
        is_mythical: false,
        height:4,
        weight:60,
        habitatId: 2,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //3 una evolución -> charizard
      {
        name: 'charmander',
        evolution: 'charizard',
        color: 'red',
        description: 'La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado.',
        is_legendary: false,
        is_mythical: false,
        height:6,
        weight:85,
        habitatId: 4,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //4 una evolución ->
      {
        name: 'clefairy',
        evolution: 'clefable',
        color: 'pink',
        description: 'Cuando la luz de la luna baña sus alas, estas emiten un tenue brillo y, sin batirlas siquiera, levita en el aire y comienza a bailar.',
        is_legendary: false,
        is_mythical: false,
        height:6,
        weight:75,
        habitatId: 4,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //5 dos evoluciones -> wartortle y blastoise
      {
        name: 'squirtle',
        evolution: 'wartortle',
        color: 'blue',
        description: 'Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.',
        is_legendary: false,
        is_mythical: false,
        height:5,
        weight:90,
        habitatId: 9,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //6 una evolución -> Wigglytuff
      {
        name: 'jigglypuff',
        evolution: 'wigglytuff',
        color: 'pink',
        description: 'Su capacidad pulmonar es excepcional, incluso para un Pokémon. Es capaz de cantar nanas sin cesar hasta que su rival se duerma.',
        is_legendary: false,
        is_mythical: false,
        height:5,
        weight:55,
        habitatId: 3,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //7 una evolución -> Golduck
      {
        name: 'psyduck',
        evolution: 'golduck',
        color: 'yellow',
        description: 'Siempre padece dolores de cabeza. Tras desatar sus misteriosos poderes, la jaqueca remite unos instantes.',
        is_legendary: false,
        is_mythical: false,
        height:8,
        weight:196,
        habitatId: 9,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //8 una evolución -> Starmie
      {
        name: 'staryu',
        evolution: 'starmie',
        color: 'brown',
        description: 'A finales de verano, se pueden ver grupos de Staryu en la orilla de la playa sincronizando el brillo de sus núcleos a ritmo regular.',
        is_legendary: false,
        is_mythical: false,
        height:8,
        weight:345,
        habitatId: 7,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //9 una evolución -> marowak
      {
        name: 'cubone',
        evolution: 'marowak',
        color: 'brown',
        description: 'Lleva puesto el cráneo de su difunta madre. A veces llora en sueños, pero cada lágrima vertida le hace más fuerte.',
        is_legendary: false,
        is_mythical: false,
        height:4,
        weight:65,
        habitatId: 4,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //10 una evolución -> meganium
      {
        name: 'bayleef',
        evolution: 'meganium',
        color: 'green',
        description: 'Bayleef tiene un collar de hojas alrededor del cuello y un brote de un árbol en cada una de ellas. La fragancia que desprenden estos brotes anima a la gente.',
        is_legendary: false,
        is_mythical: false,
        height:12,
        weight:158,
        habitatId: 3,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //11
      {
        name: 'raichu',
        evolution: 'null',
        color: 'yellow',
        description: 'Cuando se carga de electricidad, sus músculos se tensan y se vuelve más agresivo de lo normal.',
        is_legendary: false,
        is_mythical: false,
        height:8,
        weight:300,
        habitatId: 2,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //12
      {
        name: 'charizard',
        evolution: 'null',
        color: 'red',
        description: 'Con las alas que tiene puede alcanzar una altura de casi 1400 m. Suele escupir fuego por la boca.',
        is_legendary: false,
        is_mythical: false,
        height:17,
        weight:905,
        habitatId: 4,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //13
      {
        name: 'clefable',
        evolution: 'null',
        color: 'pink',
        description: 'Este Pokémon de aspecto feérico, raramente visto por los humanos, corre a esconderse en cuanto detecta que hay alguien cerca.',
        is_legendary: false,
        is_mythical: false,
        height:13,
        weight:400,
        habitatId: 4,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //14
      {
        name: 'wartortle',
        evolution: 'blastoise',
        color: 'pink',
        description: 'Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.',
        is_legendary: false,
        is_mythical: false,
        height:10,
        weight:225,
        habitatId: 9,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //15
      {
        name: 'wigglytuff',
        evolution: 'null',
        color: 'pink',
        description: 'Cuanto más aire inhala, más aumenta de tamaño. Si se enfada, hincha el cuerpo con el fin de intimidar a su oponente.',
        is_legendary: false,
        is_mythical: false,
        height:10,
        weight:120,
        habitatId: 3,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //16 
      {
        name: 'golduck',
        evolution: 'null',
        color: 'blue',
        description: 'Habita en ríos de aguas plácidas. Sus largas extremidades le permiten nadar con gracilidad.',
        is_legendary: false,
        is_mythical: false,
        height:17,
        weight:766,
        habitatId: 9,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //17
      {
        name: 'starmie',
        evolution: 'null',
        color: 'purple',
        description: 'Su órgano central, conocido como núcleo, brilla con los colores del arcoíris cuando se dispone a liberar sus potentes poderes psíquicos.',
        is_legendary: false,
        is_mythical: false,
        height:11,
        weight:80,
        habitatId: 7,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //18
      {
        name: 'marowak',
        evolution: 'null',
        color: 'brown',
        description: 'Ha evolucionado tras fortalecerse y superar su pena. Ahora lucha con arrojo blandiendo su hueso a modo de arma.',
        is_legendary: false,
        is_mythical: false,
        height:10,
        weight:450,
        habitatId: 4,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //19
      {
        name: 'meganium',
        evolution: 'null',
        color: 'green',
        description: 'La fragancia de la flor de Meganium aplaca y suaviza los ánimos. Al luchar, este Pokémon libera mayor cantidad de esencia para disminuir el ánimo de combate de su oponente.',
        is_legendary: false,
        is_mythical: false,
        height:18,
        weight:1005,
        habitatId: 3,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //20
      {
        name: 'blastoise',
        evolution: 'null',
        color: 'blue',
        description: 'Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.',
        is_legendary: false,
        is_mythical: false,
        height:16,
        weight:855,
        habitatId: 9,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pokemons', null, { truncate: true, cascade: true });
  }
};
