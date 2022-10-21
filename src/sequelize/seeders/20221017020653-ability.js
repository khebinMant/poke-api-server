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
      //raichu  
      {
        name: 'static',
        description: 'La electricidad estática que lo envuelve puede paralizar al mínimo contacto.',
        pokemonId :11,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //raichu  
      {
        name: 'lightning-rod',
        description: 'Atrae y neutraliza movimientos de tipo Eléctrico y sube el At. Esp.',
        pokemonId :11,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //charizard  
      {
        name: 'blaze',
        description: 'Potencia los ataques de tipo Fuego en un apuro',
        pokemonId :12,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //charizard  
      {
        name: 'solar-power',
        description: 'Si hace sol, baja los PS, pero potencia el At. Esp.',
        pokemonId :12,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //clefable   
      {
        name: 'cute-charm',
        description: 'Tocar al Pokémon puede causar enamoramiento.',
        pokemonId :13,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //clefable   
      {
        name: 'magic-guard',
        description: 'El Pokémon solo recibe daño de ataques físicos no mágicos',
        pokemonId :13,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //clefable   
      {
        name: 'unaware',
        description: 'No tiene en cuenta las mejoras en las características del rival.',
        pokemonId :13,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //wartortle   
      {
        name: 'torrent',
        description: 'Potencia los ataques de tipo Agua en un apuro.',
        pokemonId :14,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //wartortle   
      {
        name: 'rain-dish',
        description: 'Recupera PS de forma gradual cuando llueve.',
        pokemonId :14,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //wigglytuff   
      {
        name: 'cute-charm',
        description: 'Tocar al Pokémon puede causar enamoramiento.',
        pokemonId :15,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //wigglytuff   
      {
        name: 'competitive',
        description: 'Aumenta su At. Esp. cuando disminuyen otras características.',
        pokemonId :15,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //wigglytuff   
      {
        name: 'frisk',
        description: 'El Pokémon puede ver el objeto que lleva el rival.',
        pokemonId :15,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //golduck   
      {
        name: 'damp',
        description: 'Aumenta la humedad del entorno y evita que se puedan utilizar movimientos explosivos, tales como Autodestrucción.',
        pokemonId :16,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //golduck   
      {
        name: 'cloud-nine',
        description: 'Anula todos los efectos del tiempo atmosférico.',
        pokemonId :16,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //golduck   
      {
        name: 'swift-swim',
        description: 'Sube la Velocidad cuando llueve.',
        pokemonId :16,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //starmie   
      {
        name: 'illuminate',
        description: 'Aumenta la probabilidad de encontrar Pokémon al aumentar la visibilidad del entorno.',
        pokemonId :17,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //starmie   
      {
        name: 'natural-cure',
        description: 'Cura problemas de estado al cambiar de Pokémon.',
        pokemonId :17,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //starmie   
      {
        name: 'analytic',
        description: 'Aumenta la potencia del movimiento si es el último en atacar.',
        pokemonId :17,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //marowak   
      {
        name: 'rock-head',
        description: 'Impide que el Pokémon se dañe con sus movimientos.',
        pokemonId :18,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //marowak   
      {
        name: 'lightning-rod',
        description: 'Atrae y neutraliza movimientos de tipo Eléctrico y sube el At. Esp.',
        pokemonId :18,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //marowak   
      {
        name: 'battle-armor',
        description: 'La robusta coraza que lo protege bloquea los golpes críticos.',
        pokemonId :18,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //meganium   
      {
        name: 'overgrow',
        description: 'Potencia los ataques de tipo Planta en un apuro.',
        pokemonId :19,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //meganium   
      {
        name: 'leaf-guard',
        description: 'Evita los problemas de estado si hace sol.',
        pokemonId :19,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //blastoise   
      {
        name: 'overgrow',
        description: 'Potencia los ataques de tipo Planta en un apuro.',
        pokemonId :20,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //blastoise   
      {
        name: 'leaf-guard',
        description: 'Evita los problemas de estado si hace sol.',
        pokemonId :20,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Ability', null, { truncate: true, cascade: true });
  }
};
