// european-outlet.ts
// This is what European outlets expect - 220V devices

export interface EuropeanDevice {
  plugIntoEuropeanOutlet(): string;
}

export class EuropeanOutlet {
  connect(device: EuropeanDevice): string {
    return device.plugIntoEuropeanOutlet();
  }
}
