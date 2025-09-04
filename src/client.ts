// src/client.ts
import { EuropeanOutlet } from "./models/europeanOutlet";
import { EuropeanDevice } from "./models/europeanOutlet";

export class Tourist {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  useDevice(outlet: EuropeanOutlet, device: EuropeanDevice): void {
    console.log(`${this.name} is trying to use device...`);
    const result = outlet.connect(device);
    console.log(result);
  }
}
