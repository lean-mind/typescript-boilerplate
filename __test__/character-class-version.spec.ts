import { Character } from '../src/character-class-version';

describe('Character class version', () => {
  it('attacks other characters', () => {
    const gandalf = new Character()
    const saruman = new Character()

    gandalf.attack(saruman)
    expect(saruman.isAlive()).toBe(true)
    gandalf.attack(saruman)
    gandalf.attack(saruman)
    expect(saruman.isAlive()).toBe(false)
  });
});
