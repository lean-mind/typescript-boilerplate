import { Main } from '../src/main';

describe('Default test', () => {
    it('should work', () => {
        const main = new Main();
        main.param = 'Hello world';
        main.main();
        expect(true).toBe(true);
    });
});