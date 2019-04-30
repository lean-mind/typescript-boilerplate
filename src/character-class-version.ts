export class Character {
  private health: number

  constructor() {
    this.health = 1000
  }

  public isAlive() {
    return this.health > 0
  }

  public attack(target: Character) {
    target.health -= 400
  }
}
