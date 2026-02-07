import { mockBulbasaur, mockCharmander, mockSquirtle } from '@/__mocks__/pokemon';

/**
 * Pokemon Type Test Suite
 * Tests that each starter Pokemon has the correct type
 * As per requirements:
 * - Bulbasaur → Grass
 * - Charmander → Fire
 * - Squirtle → Water
 */

describe('Pokemon Type Tests', () => {
  describe('Bulbasaur', () => {
    it('should have Grass type', () => {
      expect(mockBulbasaur.types).toContain('Grass');
    });

    it('should be a Seed Pokemon', () => {
      expect(mockBulbasaur.classification).toBe('Seed Pokemon');
    });

    it('should have the correct Pokemon number', () => {
      expect(mockBulbasaur.number).toBe('001');
    });

    it('should have evolutions', () => {
      expect(mockBulbasaur.evolutions).toHaveLength(2);
      expect(mockBulbasaur.evolutions[0].name).toBe('Ivysaur');
      expect(mockBulbasaur.evolutions[1].name).toBe('Venusaur');
    });
  });

  describe('Charmander', () => {
    it('should have Fire type', () => {
      expect(mockCharmander.types).toContain('Fire');
    });

    it('should be a Lizard Pokemon', () => {
      expect(mockCharmander.classification).toBe('Lizard Pokemon');
    });

    it('should have the correct Pokemon number', () => {
      expect(mockCharmander.number).toBe('004');
    });

    it('should have evolutions', () => {
      expect(mockCharmander.evolutions).toHaveLength(2);
      expect(mockCharmander.evolutions[0].name).toBe('Charmeleon');
      expect(mockCharmander.evolutions[1].name).toBe('Charizard');
    });
  });

  describe('Squirtle', () => {
    it('should have Water type', () => {
      expect(mockSquirtle.types).toContain('Water');
    });

    it('should be a Tiny Turtle Pokemon', () => {
      expect(mockSquirtle.classification).toBe('Tiny Turtle Pokemon');
    });

    it('should have the correct Pokemon number', () => {
      expect(mockSquirtle.number).toBe('007');
    });

    it('should have evolutions', () => {
      expect(mockSquirtle.evolutions).toHaveLength(2);
      expect(mockSquirtle.evolutions[0].name).toBe('Wartortle');
      expect(mockSquirtle.evolutions[1].name).toBe('Blastoise');
    });
  });

  describe('Starter Pokemon Type Assertions', () => {
    it('should correctly map Bulbasaur to Grass type', () => {
      const pokemon = mockBulbasaur;
      const expectedType = 'Grass';
      expect(pokemon.types).toContain(expectedType);
    });

    it('should correctly map Charmander to Fire type', () => {
      const pokemon = mockCharmander;
      const expectedType = 'Fire';
      expect(pokemon.types).toContain(expectedType);
    });

    it('should correctly map Squirtle to Water type', () => {
      const pokemon = mockSquirtle;
      const expectedType = 'Water';
      expect(pokemon.types).toContain(expectedType);
    });
  });

  describe('Pokemon Structure Validation', () => {
    const testPokemon = [
      { pokemon: mockBulbasaur, name: 'Bulbasaur' },
      { pokemon: mockCharmander, name: 'Charmander' },
      { pokemon: mockSquirtle, name: 'Squirtle' },
    ];

    testPokemon.forEach(({ pokemon, name }) => {
      describe(`${name} structure`, () => {
        it('should have required properties', () => {
          expect(pokemon).toHaveProperty('id');
          expect(pokemon).toHaveProperty('number');
          expect(pokemon).toHaveProperty('name');
          expect(pokemon).toHaveProperty('types');
          expect(pokemon).toHaveProperty('attacks');
          expect(pokemon).toHaveProperty('evolutions');
        });

        it('should have attacks with fast and special categories', () => {
          expect(pokemon.attacks).toHaveProperty('fast');
          expect(pokemon.attacks).toHaveProperty('special');
          expect(Array.isArray(pokemon.attacks.fast)).toBe(true);
          expect(Array.isArray(pokemon.attacks.special)).toBe(true);
        });

        it('should have at least one attack', () => {
          const totalAttacks = pokemon.attacks.fast.length + pokemon.attacks.special.length;
          expect(totalAttacks).toBeGreaterThan(0);
        });
      });
    });
  });
});
