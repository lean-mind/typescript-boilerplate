import { Main } from '../src/main';

describe('Default test', () => {
  it('should work', () => {
    const main = new Main('Hello world');
    expect(main.getParam()).toBe('Hello world');
  });
});
