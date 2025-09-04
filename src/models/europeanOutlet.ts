// src/models/europeanOutlet.ts
export interface EuropeanDevice {
  plugIntoEuropeanOutlet(): string;
}

export class EuropeanOutlet {
  connect(device: EuropeanDevice): string {
    return device.plugIntoEuropeanOutlet();
  }
}
