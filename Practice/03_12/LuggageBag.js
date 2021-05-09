/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class LuggageBag {
  constructor(
    // Defines parameters:
    width,
    height,
    volume,
    color,
    wheelerType,
    handleBarLength,
    outsidePocketsCount,
    insidePocketsCount,
    insidePocket,
    bagMaterial,
    brand,
    tsaLockPresent,
    warrantyPeriodInYears,
    bagOpen
  ) {
    // Define properties:
    this.width = width;
    this.height = height;
    this.volume = volume;
    this.color = color;
    this.wheelerType = wheelerType;
    this.handleBarLength = handleBarLength;
    this.outsidePocketsCount = outsidePocketsCount;
    this.insidePocketsCount = insidePocketsCount;
    this.insidePocket = insidePocket;
    this.bagMaterial = bagMaterial;
    this.brand = brand;
    this.tsaLockPresent = tsaLockPresent;
    this.warrantyPeriodInYears = warrantyPeriodInYears;
    this.bagOpen = bagOpen;
  }
  // Add methods like normal functions:
  openBag() {
    this.bagOpen = true;
    updateLuggageBag(`Bag is open now...`);
  }

  closeBag() {
    this.bagOpen = false;
    updateLuggageBag(`Bag is closed now...`);
  }
}

export default LuggageBag;
