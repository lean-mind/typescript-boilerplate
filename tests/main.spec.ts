import {expect} from "vitest";

class Coin {
  private readonly weight: number;
  private readonly diameter: number;
  constructor(diameter: number, weight: number) {
    this.diameter = diameter;
    this.weight = weight;
  }

  getDiameter() {
    return this.diameter;
  }
  getWeight(): number {
    return this.weight;
  }
}

class VendingMachine {
  private balance: number = 0.00;
  insertCoin(coin: Coin) {
    const coinValue = this.calculateCoinValue(coin);
    this.addCoinValueToBalance(coinValue);
  }

  private addCoinValueToBalance(coinValue: number) {
    return this.balance += coinValue;
  }

  private calculateCoinValue(coin: Coin) {
    const isOneEuroCoin = coin.getDiameter() === 22.50 && coin.getWeight() === 7.50;
    if (isOneEuroCoin) {
      return 1.00
    }
    const isFiveCentEuroCoin = coin.getDiameter() === 21.25 && coin.getWeight() === 3.92;
    if(isFiveCentEuroCoin) {
        return 0.05
    }
    return 0.50
  }

  getBalance() {
    return this.balance;
  }

  showStatusMessage() {
    return "Insert coin...";
  }
}
describe("Vending Machine", () => {
  it("displays `insert coin` message when there is no balance", () => {
    const vendingMachine = new VendingMachine();

    expect(vendingMachine.showStatusMessage()).toEqual("Insert coin...")
  })

  it.each([
      {diameter:22.50, weight: 7.50, value: 1.00, name: "one euro"},
      {diameter:24.25, weight: 7.80, value: 0.50, name: "fifty cent"},
      {diameter:21.25, weight: 3.92, value: 0.05, name: "five cent"}
  ])("should accept a $name coin", (coinAttributes) => {
    const coin = new Coin(coinAttributes.diameter, coinAttributes.weight);
    const vendingMachine = new VendingMachine();

    vendingMachine.insertCoin(coin);

    expect(vendingMachine.getBalance()).toEqual(coinAttributes.value);
  })

  it("should return an invalid coin", () => {
    const coin = new Coin(20.67, 13.89);
    const vendingMachine = new VendingMachine();

    vendingMachine.insertCoin(coin);

    expect(vendingMachine.returnInvalidCoin(coin)).toHaveBeenCalledWith(coin);
  })
});