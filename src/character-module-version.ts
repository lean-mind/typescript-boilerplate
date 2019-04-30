export function Character() {
  let health = 1000

  function isAlive() {
    return health > 0
  }

  function attack(target: ReturnType<typeof Character>) {
    target.health -= 400 // No existe!
  }

  return {
    isAlive,
    attack
  }
}
