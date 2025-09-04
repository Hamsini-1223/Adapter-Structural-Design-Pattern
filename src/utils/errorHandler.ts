// src/utils/errorHandler.ts
export class ErrorHandler {
  handleError(error: Error, context: string): void {
    console.log(`Error in ${context}: ${error.message}`);
  }

  validateMenuChoice(choice: string): boolean {
    const validChoices = ["1", "2", "3", "4", "5"];
    return validChoices.includes(choice.trim());
  }

  validateDeviceChoice(choice: string): boolean {
    const validChoices = ["1", "2", "3", "4"];
    return validChoices.includes(choice.trim());
  }
}
