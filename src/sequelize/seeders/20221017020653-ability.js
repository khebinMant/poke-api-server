'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Ability', [
      //Ditto
      {
        name: 'imposter',
        description: 'Se transforma en el Pokémon que tiene enfrente',
        pokemonId :1,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Pikachu
      {
        name: 'static',
        description: 'La electricidad estática que lo envuelve puede paralizar al mínimo contacto.',
        pokemonId :2,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Charmander
      {
        name: 'blaze',
        description: 'Potencia los movimientos de tipo Fuego del Pokémon cuando le quedan pocos puntos de salud',
        pokemonId :3,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Clefairy
      {
        name: 'cute-charm',
        description: 'Tocar al Pokémon puede causar enamoramiento.',
        pokemonId :4,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Clefairy
      {
        name: 'magic-guard',
        description: 'El Pokémon solo recibe daño de ataques físicos no mágicos',
        pokemonId :4,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Clefairy
      {
        name: 'friend-guard',
        description: 'Reduce el daño que sufren los aliados.',
        pokemonId :4,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Squirtle
      {
        name: 'torrent',
        description: 'Potencia los ataques de tipo Agua en un apuro.',
        pokemonId :5,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Squirtle
      {
        name: 'rain-dish',
        description: 'Recupera puntos de saludos de forma gradual cuando llueve.',
        pokemonId :5,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Jigglypuff
      {
        name: 'cute-charm',
        description: 'Tocar al Pokémon puede causar enamoramiento.',
        pokemonId :6,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      //Jigglypuff
      {
        name: 'competitive',
        description: 'Aumenta mucho su Ataque Especial cuando el rival le baja cualquiera de sus características.',
        pokemonId :6,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      //Jigglypuff
      {
        name: 'friend-guard',
        description: 'Reduce el daño que sufren los aliados.',
        pokemonId :6,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },     
      //Psyduck 
      {
        name: 'damp',
        description: 'Aumenta la humedad del entorno y evita que se puedan utilizar movimientos explosivos, tales como Autodestrucción.',
        pokemonId :7,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },  
      //Psyduck 
      {
        name: 'cloud-nine',
        description: 'Anula todos los efectos del tiempo atmosférico.',
        pokemonId :7,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      //Psyduck 
      {
        name: 'swift-swim',
        description: 'Sube la Velocidad cuando llueve.',
        pokemonId :7,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      //Staryu 
      {
        name: 'illuminate',
        description: 'Aumenta la probabilidad de encontrar Pokémon al aumentar la visibilidad del entorno.',
        pokemonId :8,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      //Staryu 
      {
        name: 'natural-cure',
        description: 'Cura problemas de estado al cambiar de Pokémon.',
        pokemonId :8,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      //Staryu 
      {
        name: 'analytic',
        description: 'Aumenta la potencia del movimiento si es el último en atacar.',
        pokemonId :8,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //cubone  
      {
        name: 'rock-head',
        description: 'Impide que el Pokémon se dañe con sus movimientos.',
        pokemonId :9,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      //cubone  
      {
        name: 'lightning-rod',
        description: 'Atrae y neutraliza movimientos de tipo Eléctrico y sube el At. Esp.',
        pokemonId :9,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      //cubone  
      {
        name: 'battle-armor',
        description: 'La robusta coraza que lo protege bloquea los golpes críticos.',
        pokemonId :9,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //bayleef  
      {
        name: 'overgrow',
        description: 'Potencia los ataques de tipo Planta en un apuro.',
        pokemonId :10,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      //bayleef  
      {
        name: 'leaf-guard',
        description: 'Evita los problemas de estado si hace sol.',
        pokemonId :10,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Ability', null, { truncate: true, cascade: true });
  }
};
