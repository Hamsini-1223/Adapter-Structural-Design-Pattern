// us-device.ts
// US devices that only work with US outlets (110V)

export class USLaptop {
  private model: string;

  constructor(model: string) {
    this.model = model;
  }

  // This method only works with US outlets (110V)
  plugIntoUSOutlet(): string {
    return `${this.model} is now charging with 110V from US outlet`;
  }

  getModel(): string {
    return this.model;
  }
}
