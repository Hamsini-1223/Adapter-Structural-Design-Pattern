// demo.ts
// Interactive demonstration of the Adapter Pattern

import * as readline from "readline";
import { USLaptop } from "./us-device";
import { EuropeanOutlet, EuropeanDevice } from "./european-outlet";
import { PowerAdapter } from "./adapter";
import { Tourist } from "./client";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class InteractiveDemo {
  private tourist: Tourist;
  private europeanOutlet: EuropeanOutlet;
  private devices: Map<string, USLaptop> = new Map();

  constructor() {
    this.tourist = new Tourist("You");
    this.europeanOutlet = new EuropeanOutlet();

    // Create some US devices
    this.devices.set("laptop", new USLaptop("MacBook Pro"));
    this.devices.set("phone", new USLaptop("iPhone Charger"));
    this.devices.set("tablet", new USLaptop("iPad"));
  }

  async start(): Promise<void> {
    console.log("🌍 Welcome to the Adapter Pattern Interactive Demo!");
    console.log("=".repeat(50));
    console.log("You are an American tourist in Europe with US devices.");
    console.log(
      "European outlets provide 220V, but your US devices need 110V.\n"
    );

    await this.mainMenu();
  }

  private async mainMenu(): Promise<void> {
    console.log("\n🏨 You are in your European hotel room...");
    console.log("What would you like to do?\n");
    console.log("1. 📱 Try to use a US device directly");
    console.log("2. 🔌 Use a power adapter");
    console.log("3. 📋 View available devices");
    console.log("4. 🎓 Learn about the Adapter Pattern");
    console.log("5. 🚪 Exit");

    const choice = await this.askQuestion("\nEnter your choice (1-5): ");

    switch (choice.trim()) {
      case "1":
        await this.tryDirectConnection();
        break;
      case "2":
        await this.useAdapter();
        break;
      case "3":
        await this.viewDevices();
        break;
      case "4":
        await this.explainPattern();
        break;
      case "5":
        this.exit();
        return;
      default:
        console.log("❌ Invalid choice. Please try again.");
        await this.mainMenu();
    }
  }

  private async tryDirectConnection(): Promise<void> {
    console.log(
      "\n📱 Trying to use US device directly with European outlet..."
    );

    const deviceChoice = await this.selectDevice();
    if (!deviceChoice) {
      await this.mainMenu();
      return;
    }

    const device = this.devices.get(deviceChoice);
    if (!device) {
      await this.mainMenu();
      return;
    }

    console.log(
      `\n🔌 Attempting to connect ${device.getModel()} to European outlet...`
    );
    console.log("❌ ERROR: Incompatible interfaces!");
    console.log("   - US device expects 110V");
    console.log("   - European outlet provides 220V");
    console.log("   - Different plug shapes");
    console.log("\n💡 You need an adapter to make this work!");

    await this.askQuestion("\nPress Enter to continue...");
    await this.mainMenu();
  }

  private async useAdapter(): Promise<void> {
    console.log("\n🔌 Using a power adapter...");

    const deviceChoice = await this.selectDevice();
    if (!deviceChoice) {
      await this.mainMenu();
      return;
    }

    const device = this.devices.get(deviceChoice);
    if (!device) {
      await this.mainMenu();
      return;
    }

    console.log(`\n🔄 Creating power adapter for ${device.getModel()}...`);
    const adapter = new PowerAdapter(device);

    console.log("✅ Power adapter created successfully!");
    console.log("\n🎉 Now connecting through adapter:");

    try {
      this.tourist.useDevice(this.europeanOutlet, adapter);
      console.log("\n✅ SUCCESS! Your US device is working in Europe!");
      console.log(
        "🔄 The adapter converted 220V European power to 110V for your US device."
      );
    } catch (error) {
      console.log(`❌ Error: ${error}`);
    }

    await this.askQuestion("\nPress Enter to continue...");
    await this.mainMenu();
  }

  private async selectDevice(): Promise<string | null> {
    console.log("\n📱 Select a US device:");
    console.log("1. 💻 MacBook Pro");
    console.log("2. 📱 iPhone Charger");
    console.log("3. 📲 iPad");
    console.log("4. ⬅️  Back to main menu");

    const choice = await this.askQuestion("\nChoose device (1-4): ");

    switch (choice.trim()) {
      case "1":
        return "laptop";
      case "2":
        return "phone";
      case "3":
        return "tablet";
      case "4":
        return null;
      default:
        console.log("❌ Invalid choice.");
        return await this.selectDevice();
    }
  }

  private async viewDevices(): Promise<void> {
    console.log("\n📋 Your US Devices:");
    console.log("==================");

    this.devices.forEach((device, key) => {
      console.log(`• ${device.getModel()} - Requires 110V (US standard)`);
    });

    console.log("\n🏨 Hotel Outlet:");
    console.log("• European outlet - Provides 220V (European standard)");

    console.log(
      "\n❗ Problem: Your devices are incompatible with European outlets!"
    );
    console.log("💡 Solution: Use power adapters to bridge the gap.");

    await this.askQuestion("\nPress Enter to continue...");
    await this.mainMenu();
  }

  private async explainPattern(): Promise<void> {
    console.log("\n🎓 Adapter Design Pattern Explanation");
    console.log("=====================================");
    console.log("\n🎯 Purpose: Make incompatible interfaces work together");
    console.log("\n📊 Pattern Components:");
    console.log(
      "• 🇺🇸 US Device (Adaptee) = Existing class with incompatible interface"
    );
    console.log(
      "• 🇪🇺 European Outlet (Target) = Interface that client expects"
    );
    console.log(
      "• 🔄 Power Adapter (Adapter) = Bridges the incompatible interfaces"
    );
    console.log("• 👤 Tourist (Client) = Uses the target interface");

    console.log("\n⚡ How it works:");
    console.log("1. Tourist wants to use US device in Europe");
    console.log("2. Direct connection fails (incompatible)");
    console.log("3. Power adapter wraps the US device");
    console.log("4. Adapter implements European interface");
    console.log("5. Tourist can now use device through adapter");

    console.log("\n✅ Benefits:");
    console.log("• Reuse existing code without modification");
    console.log("• Client code stays simple and clean");
    console.log("• Easy to add new adapters for different devices");

    await this.askQuestion("\nPress Enter to continue...");
    await this.mainMenu();
  }

  private askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  private exit(): void {
    console.log("\n👋 Thanks for learning about the Adapter Pattern!");
    console.log(
      "Remember: Adapters make incompatible things work together! 🔌"
    );
    rl.close();
  }
}

// Start the interactive demo
const demo = new InteractiveDemo();
demo.start().catch(console.error);
