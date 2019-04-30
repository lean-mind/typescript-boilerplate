import { Character } from '../src/character-module-version';

describe('Character class version', () => {
  it('attacks other characters', () => {
    const gandalf = Character()
    const saruman = Character()

    gandalf.attack(saruman)
    expect(saruman.isAlive()).toBe(true)
    gandalf.attack(saruman)
    gandalf.attack(saruman)
    expect(saruman.isAlive()).toBe(false)
  });
});
