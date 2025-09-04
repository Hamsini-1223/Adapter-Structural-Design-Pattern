```markdown
# Adapter Design Pattern

A TypeScript implementation of the Adapter Design Pattern using an interactive console interface. This project demonstrates how to make incompatible interfaces work together using the analogy of power plug adapters.

## Overview

The Adapter Pattern allows objects with incompatible interfaces to collaborate. This implementation simulates using US devices with European outlets through power adapters.

## Problem Solved

- US devices cannot directly connect to European outlets
- Different voltage requirements
- Incompatible plug interfaces
- Need for seamless integration without modifying existing code

## Project Structure
```

├── src/
│ ├── demo.ts
│ ├── client.ts
│ ├── adapters/
│ │ └── powerAdapter.ts
│ ├── models/
│ │ ├── usDevice.ts
│ │ └── europeanOutlet.ts
│ └── utils/
│ └── errorHandler.ts
├── README.md
├── package.json
├── tsconfig.json

````

## Installation

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Setup
```bash
npm install
````

### Run

```bash
npm start
```

## Usage

The interactive demo provides several options:

1. Try Direct Connection - Demonstrates interface incompatibility
2. Use Power Adapter - Shows the pattern solving the problem
3. View Available Devices - Lists US devices and their specifications
4. Learn Pattern - Explains the Adapter Pattern concepts

## Output

When you run `npm start`, you'll see:

```
Adapter Pattern Demo
===================

1. Try direct connection
2. Use power adapter
3. Exit
Choose (1-3): 1

Trying to connect US laptop to European outlet...
ERROR: Incompatible interfaces!
US device needs 110V, European outlet provides 220V

1. Try direct connection
2. Use power adapter
3. Exit
Choose (1-3): 2

Using power adapter...
You is trying to use device...
Adapter: Converting 220V to 110V. MacBook Pro is now charging with 110V from US outlet
SUCCESS! Adapter made it work.

1. Try direct connection
2. Use power adapter
3. Exit
Choose (1-3): 3
Demo finished.
```

## Code Example

```typescript
// Problem: Incompatible interfaces
const usLaptop = new UsLaptop("MacBook Pro");
const europeanOutlet = new EuropeanOutlet();

// Solution: Use adapter
const adapter = new PowerAdapter(usLaptop);
europeanOutlet.connect(adapter);
```

## Pattern Benefits

- Interface Compatibility: Makes incompatible classes work together
- Code Reusability: No modification of existing classes required
- Separation of Concerns: Adapter handles only interface translation
- Open/Closed Principle: Open for extension, closed for modification

## Features

- Error handling for all user inputs and operations
- Input validation for menu selections and device choices
- Comprehensive error messages for troubleshooting
- Graceful handling of unexpected scenarios

## Development

### Build

```bash
npm run build
```

### Clean

```bash
npm run clean
```

## Built by

Ms Hamsini S

```

```
