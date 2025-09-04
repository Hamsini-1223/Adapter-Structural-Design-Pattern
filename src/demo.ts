// src/demo.ts
import * as readline from "readline";
import { UsLaptop } from "./models/usDevice";
import { EuropeanOutlet } from "./models/europeanOutlet";
import { PowerAdapter } from "./adapters/powerAdapter";
import { Tourist } from "./client";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class InteractiveDemo {
  private tourist: Tourist;
  private outlet: EuropeanOutlet;
  private laptop: UsLaptop;

  constructor() {
    this.tourist = new Tourist("You");
    this.outlet = new EuropeanOutlet();
    this.laptop = new UsLaptop("MacBook Pro");
  }

  async start(): Promise<void> {
    console.log("Adapter Pattern Demo");
    console.log("===================");
    await this.showMenu();
  }

  private async showMenu(): Promise<void> {
    console.log("\n1. Try direct connection");
    console.log("2. Use power adapter");
    console.log("3. Exit");

    const choice = await this.ask("Choose (1-3): ");

    switch (choice.trim()) {
      case "1":
        this.tryDirect();
        break;
      case "2":
        this.useAdapter();
        break;
      case "3":
        this.exit();
        return;
      default:
        console.log("Invalid choice. Please enter 1, 2, or 3.");
    }

    await this.showMenu();
  }

  private tryDirect(): void {
    console.log("\nTrying to connect US laptop to European outlet...");
    console.log("ERROR: Incompatible interfaces!");
    console.log("US device needs 110V, European outlet provides 220V");
  }

  private useAdapter(): void {
    console.log("\nUsing power adapter...");
    const adapter = new PowerAdapter(this.laptop);
    this.tourist.useDevice(this.outlet, adapter);
    console.log("SUCCESS! Adapter made it work.");
  }

  private ask(question: string): Promise<string> {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  private exit(): void {
    console.log("Demo finished.");
    rl.close();
  }
}

const demo = new InteractiveDemo();
demo.start();
