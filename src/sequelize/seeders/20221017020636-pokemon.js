'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pokemon', [
      //1 sin evolucion
      {
        name: 'ditto',
        evolution: 0,
        color: 'purple',
        description: 'Redistribuye las células de su cuerpo para cobrar la apariencia de lo que ve, pero vuelve a la normalidad al relajarse.',
        is_legendary: false,
        is_mythical: false,
        habitatId: 7,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //2 una evolución ->raichu
      {
        name: 'pikachu',
        evolution: 11,
        color: 'yellow',
        description: 'Levanta su cola para vigilar los alrededores. A veces, puede ser alcanzado por un rayo en esa pose, Las bolsas de las mejillas están llenas de electricidad, que libera cuando se siente amenazado.',
        is_legendary: false,
        is_mythical: false,
        habitatId: 2,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //3 una evolución -> charizard
      {
        name: 'charmander',
        evolution: 12,
        color: 'red',
        description: 'La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado.',
        is_legendary: false,
        is_mythical: false,
        habitatId: 4,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //4 una evolución ->
      {
        name: 'clefairy',
        evolution: 13,
        color: 'pink',
        description: 'Cuando la luz de la luna baña sus alas, estas emiten un tenue brillo y, sin batirlas siquiera, levita en el aire y comienza a bailar.',
        is_legendary: false,
        is_mythical: false,
        habitatId: 4,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //5 dos evoluciones -> wartotle y blastoize
      {
        name: 'squirtle',
        evolution: 14,
        color: 'pink',
        description: 'Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.',
        is_legendary: false,
        is_mythical: false,
        habitatId: 8,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //6 una evolución -> Wigglytuff
      {
        name: 'jigglypuff',
        evolution: 15,
        color: 'pink',
        description: 'Su capacidad pulmonar es excepcional, incluso para un Pokémon. Es capaz de cantar nanas sin cesar hasta que su rival se duerma.',
        is_legendary: false,
        is_mythical: false,
        habitatId: 3,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //7 una evolución -> Golduck
      {
        name: 'psyduck',
        evolution: 16,
        color: 'yellow',
        description: 'Siempre padece dolores de cabeza. Tras desatar sus misteriosos poderes, la jaqueca remite unos instantes.',
        is_legendary: false,
        is_mythical: false,
        habitatId: 8,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //8 una evolución -> Starmie
      {
        name: 'staryu',
        evolution: 17,
        color: 'brown',
        description: 'A finales de verano, se pueden ver grupos de Staryu en la orilla de la playa sincronizando el brillo de sus núcleos a ritmo regular.',
        is_legendary: false,
        is_mythical: false,
        habitatId: 6,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //9 una evolución -> marowak
      {
        name: 'cubone',
        evolution: 18,
        color: 'brown',
        description: 'Lleva puesto el cráneo de su difunta madre. A veces llora en sueños, pero cada lágrima vertida le hace más fuerte.',
        is_legendary: false,
        is_mythical: false,
        habitatId: 4,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //10 una evolución -> meganium
      {
        name: 'bayleef',
        evolution: 19,
        color: 'green',
        description: 'Bayleef tiene un collar de hojas alrededor del cuello y un brote de un árbol en cada una de ellas. La fragancia que desprenden estos brotes anima a la gente.',
        is_legendary: false,
        is_mythical: false,
        habitatId: 3,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pokemon', null, { truncate: true, cascade: true });
  }
};
