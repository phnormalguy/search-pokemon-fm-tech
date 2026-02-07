import { Pokemon } from '@/types/pokemon';

/**
 * Test Mocks for Pokemon
 * Following the test requirements: Bulbasaur (Grass), Charmander (Fire), Squirtle (Water)
 */

export const mockBulbasaur: Pokemon = {
  id: '001',
  number: '001',
  name: 'Bulbasaur',
  classification: 'Seed Pokemon',
  types: ['Grass', 'Poison'],
  resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
  weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  weight: {
    minimum: '6.04kg',
    maximum: '7.76kg',
  },
  height: {
    minimum: '0.61m',
    maximum: '0.79m',
  },
  fleeRate: 0.1,
  maxCP: 1115,
  maxHP: 1071,
  image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  attacks: {
    fast: [
      {
        name: 'Tackle',
        type: 'Normal',
        damage: 12,
      },
      {
        name: 'Vine Whip',
        type: 'Grass',
        damage: 7,
      },
    ],
    special: [
      {
        name: 'Power Whip',
        type: 'Grass',
        damage: 70,
      },
      {
        name: 'Seed Bomb',
        type: 'Grass',
        damage: 40,
      },
      {
        name: 'Sludge Bomb',
        type: 'Poison',
        damage: 55,
      },
    ],
  },
  evolutions: [
    {
      id: '002',
      number: '002',
      name: 'Ivysaur',
      classification: 'Seed Pokemon',
      types: ['Grass', 'Poison'],
      image: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
    },
    {
      id: '003',
      number: '003',
      name: 'Venusaur',
      classification: 'Seed Pokemon',
      types: ['Grass', 'Poison'],
      image: 'https://img.pokemondb.net/artwork/venusaur.jpg',
    },
  ],
};

export const mockCharmander: Pokemon = {
  id: '004',
  number: '004',
  name: 'Charmander',
  classification: 'Lizard Pokemon',
  types: ['Fire'],
  resistant: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
  weaknesses: ['Water', 'Ground', 'Rock'],
  weight: {
    minimum: '7.44kg',
    maximum: '9.56kg',
  },
  height: {
    minimum: '0.53m',
    maximum: '0.68m',
  },
  fleeRate: 0.1,
  maxCP: 1108,
  maxHP: 955,
  image: 'https://img.pokemondb.net/artwork/charmander.jpg',
  attacks: {
    fast: [
      {
        name: 'Ember',
        type: 'Fire',
        damage: 10,
      },
      {
        name: 'Scratch',
        type: 'Normal',
        damage: 6,
      },
    ],
    special: [
      {
        name: 'Flame Burst',
        type: 'Fire',
        damage: 30,
      },
      {
        name: 'Flame Charge',
        type: 'Fire',
        damage: 25,
      },
      {
        name: 'Flamethrower',
        type: 'Fire',
        damage: 55,
      },
    ],
  },
  evolutions: [
    {
      id: '005',
      number: '005',
      name: 'Charmeleon',
      classification: 'Flame Pokemon',
      types: ['Fire'],
      image: 'https://img.pokemondb.net/artwork/charmeleon.jpg',
    },
    {
      id: '006',
      number: '006',
      name: 'Charizard',
      classification: 'Flame Pokemon',
      types: ['Fire', 'Flying'],
      image: 'https://img.pokemondb.net/artwork/charizard.jpg',
    },
  ],
};

export const mockSquirtle: Pokemon = {
  id: '007',
  number: '007',
  name: 'Squirtle',
  classification: 'Tiny Turtle Pokemon',
  types: ['Water'],
  resistant: ['Fire', 'Water', 'Ice', 'Steel'],
  weaknesses: ['Electric', 'Grass'],
  weight: {
    minimum: '7.88kg',
    maximum: '10.13kg',
  },
  height: {
    minimum: '0.44m',
    maximum: '0.57m',
  },
  fleeRate: 0.1,
  maxCP: 1134,
  maxHP: 1008,
  image: 'https://img.pokemondb.net/artwork/squirtle.jpg',
  attacks: {
    fast: [
      {
        name: 'Tackle',
        type: 'Normal',
        damage: 12,
      },
      {
        name: 'Bubble',
        type: 'Water',
        damage: 25,
      },
    ],
    special: [
      {
        name: 'Aqua Jet',
        type: 'Water',
        damage: 25,
      },
      {
        name: 'Aqua Tail',
        type: 'Water',
        damage: 45,
      },
      {
        name: 'Water Pulse',
        type: 'Water',
        damage: 35,
      },
    ],
  },
  evolutions: [
    {
      id: '008',
      number: '008',
      name: 'Wartortle',
      classification: 'Turtle Pokemon',
      types: ['Water'],
      image: 'https://img.pokemondb.net/artwork/wartortle.jpg',
    },
    {
      id: '009',
      number: '009',
      name: 'Blastoise',
      classification: 'Shellfish Pokemon',
      types: ['Water'],
      image: 'https://img.pokemondb.net/artwork/blastoise.jpg',
    },
  ],
};
