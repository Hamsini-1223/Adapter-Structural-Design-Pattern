// src/adapters/powerAdapter.ts
import { UsLaptop } from "../models/usDevice";
import { EuropeanDevice } from "../models/europeanOutlet";

export class PowerAdapter implements EuropeanDevice {
  private usDevice: UsLaptop;

  constructor(usDevice: UsLaptop) {
    this.usDevice = usDevice;
  }

  plugIntoEuropeanOutlet(): string {
    const result = this.usDevice.plugIntoUSOutlet();
    return `Adapter: Converting 220V to 110V. ${result}`;
  }
}
