// src/models/usDevice.ts
export class UsLaptop {
  private model: string;

  constructor(model: string) {
    this.model = model;
  }

  plugIntoUSOutlet(): string {
    return `${this.model} is now charging with 110V from US outlet`;
  }

  getModel(): string {
    return this.model;
  }
}
