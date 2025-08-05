# Adapter Design Pattern - TypeScript Implementation

A TypeScript implementation of the Adapter Design Pattern using an interactive console interface. This project demonstrates how to make incompatible interfaces work together using the real-world analogy of power plug adapters.

## Overview

The Adapter Pattern allows objects with incompatible interfaces to collaborate. This implementation simulates an American tourist in Europe who needs to use US devices (110V) with European outlets (220V).

### Problem Solved

- US devices cannot directly connect to European outlets
- Different voltage requirements (110V vs 220V)
- Incompatible plug interfaces
- Need for seamless integration without modifying existing code

## Project Structure

```
├── us-device.ts          # US device classes (Adaptee)
├── european-outlet.ts    # European outlet interface (Target)
├── adapter.ts           # Power adapter implementation (Adapter)
├── client.ts            # Tourist class (Client)
├── demo.ts              # Interactive console interface
├── package.json         # Project configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # Documentation
```

## Architecture

The implementation follows the classic Adapter Pattern structure:

- **Target**: `EuropeanDevice` interface - what the client expects
- **Adaptee**: `USLaptop` class - existing incompatible class
- **Adapter**: `PowerAdapter` class - bridges the incompatible interfaces
- **Client**: `Tourist` class - uses the target interface

## Installation

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Setup

```bash
git clone https://github.com/Hamsini-1223/Adapter-Structural-Design-Pattern.git
cd adapter-pattern-demo
npm install
```

### Run

```bash
npm start
```

## Usage

The interactive demo provides several options:

1. **Try Direct Connection** - Demonstrates interface incompatibility
2. **Use Power Adapter** - Shows the pattern solving the problem
3. **View Available Devices** - Lists US devices and their specifications
4. **Learn Pattern** - Explains the Adapter Pattern concepts

## Output

When you run `npm start`, you'll see the interactive console interface:

```
🌍 Welcome to the Adapter Pattern Interactive Demo!
==================================================
You are an American tourist in Europe with US devices.
European outlets provide 220V, but your US devices need 110V.

🏨 You are in your European hotel room...
What would you like to do?

1. 📱 Try to use a US device directly
2. 🔌 Use a power adapter
3. 📋 View available devices
4. 🎓 Learn about the Adapter Pattern
5. 🚪 Exit

Enter your choice (1-5): 2

🔌 Using a power adapter...

📱 Select a US device:
1. 💻 MacBook Pro
2. 📱 iPhone Charger
3. 📲 iPad
4. ⬅️  Back to main menu

Choose device (1-4): 1

🔄 Creating power adapter for MacBook Pro...
✅ Power adapter created successfully!

🎉 Now connecting through adapter:
You is trying to use device...
Adapter: Converting 220V to 110V. MacBook Pro is now charging with 110V from US outlet

✅ SUCCESS! Your US device is working in Europe!
🔄 The adapter converted 220V European power to 110V for your US device.

Press Enter to continue...
```

## Code Example

```typescript
// Problem: Incompatible interfaces
const usLaptop = new USLaptop("MacBook Pro");
const europeanOutlet = new EuropeanOutlet();
// europeanOutlet.connect(usLaptop); // This won't work

// Solution: Use adapter
const adapter = new PowerAdapter(usLaptop);
europeanOutlet.connect(adapter); // This works

// The adapter translates calls:
// adapter.plugIntoEuropeanOutlet() -> usLaptop.plugIntoUSOutlet()
```

## Pattern Benefits

- **Interface Compatibility**: Makes incompatible classes work together
- **Code Reusability**: No modification of existing classes required
- **Separation of Concerns**: Adapter handles only interface translation
- **Open/Closed Principle**: Open for extension, closed for modification

## Technical Details

- **Language**: TypeScript
- **Runtime**: Node.js
- **I/O Interface**: readline
- **Design Pattern**: Adapter (with supporting patterns)

## Learning Objectives

This implementation demonstrates:

- Adapter Pattern implementation
- Interface design in TypeScript
- Composition over inheritance
- Interactive console application development
- Clean architecture principles

## Development

### Build

```bash
npm run build
```

### Clean

```bash
npm run clean
```

## Contributing

Contributions are welcome. Please ensure code follows TypeScript best practices and maintains the educational clarity of the implementation.

## Built by

**Ms Hamsini S**
