/**
 * Main Class
 */
export class Main {
  public static COMMANDS = 'Hello World';

  public param: string;

  constructor(param: string) {
    this.param = param;
  }

  public getParam(): string {
    return this.param;
  }
}
