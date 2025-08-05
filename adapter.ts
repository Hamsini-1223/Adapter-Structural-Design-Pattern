// adapter.ts
// This adapter makes US devices work with European outlets

import { USLaptop } from "./us-device";
import { EuropeanDevice } from "./european-outlet";

export class PowerAdapter implements EuropeanDevice {
  private usDevice: USLaptop;

  constructor(usDevice: USLaptop) {
    this.usDevice = usDevice;
  }

  // This method converts the interface
  plugIntoEuropeanOutlet(): string {
    // Convert 220V European power to 110V for US device
    const result = this.usDevice.plugIntoUSOutlet();
    return `Adapter: Converting 220V to 110V. ${result}`;
  }
}
