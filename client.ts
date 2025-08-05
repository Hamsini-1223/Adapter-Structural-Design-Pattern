// client.ts
// A tourist traveling from US to Europe

import { EuropeanOutlet } from "./european-outlet";
import { EuropeanDevice } from "./european-outlet";

export class Tourist {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Tourist tries to use any European-compatible device
  useDevice(outlet: EuropeanOutlet, device: EuropeanDevice): void {
    console.log(`${this.name} is trying to use device...`);
    const result = outlet.connect(device);
    console.log(result);
  }
}
