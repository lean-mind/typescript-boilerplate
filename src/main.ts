/**
 * Main Class
 */
export class Main {
  public static COMMANDS: string = "Hello World";

  public param: string;

  constructor(param: string) {
    this.param = param;
  }

  public getParam() {
    return this.param
  }
}