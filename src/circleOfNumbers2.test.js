const solution = require('./circleOfNumbers2.js');

test('test 1', () => {
    expect(solution(10, 2)).toBe(7);
});

test('test 2', () => {
    expect(solution(10, 7)).toBe(2);
});

test('test 3', () => {
    expect(solution(4, 1)).toBe(3);
});

test('test 4', () => {
    expect(solution(6, 3)).toBe(0);
});

test('test 5', () => {
    expect(solution(18, 6)).toBe(15);
});

test('test 6', () => {
    expect(solution(12, 10)).toBe(4);
});

test('test 7', () => {
    expect(solution(18, 5)).toBe(14);
});
