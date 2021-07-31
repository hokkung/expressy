import { sum } from '../../src/utils/sum'

describe('SumUtils test', () => {
    test('should be returned 2', () => {
        expect(sum(1, 1)).toBe(2);
    });
});
