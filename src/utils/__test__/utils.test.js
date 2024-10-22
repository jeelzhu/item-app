import { formatDate, joinArray, isDateString } from '../utils';

describe('Utility Functions', () => {
    test('formatDate should format date strings correctly', () => {
        expect(formatDate('2023-12-22')).toBe('22/12/2023'); 
        expect(formatDate('invalid-date')).toBe('Invalid Date'); 
    });

    test('joinArray should join array elements with a separator', () => {
        expect(joinArray(['a', 'b', 'c'], ', ')).toBe('a, b, c');
        expect(joinArray(['a', 'b', 'c'], ' > ')).toBe('a > b > c');
        expect(joinArray([])).toBe(''); 
    });

    test('isDateString should validate date strings', () => {
        expect(isDateString('2023-01-01')).toBe(true);
        expect(isDateString('invalid-date')).toBe(false);
    });
});