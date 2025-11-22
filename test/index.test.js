const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('capitalizeWords', () => {
  test('should capitalize each word in a normal string', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('good morning')).toBe('Good Morning');
  });

  test('should handle empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('should handle strings with special characters', () => {
    expect(capitalizeWords('hello-world')).toBe('Hello-World');
    expect(capitalizeWords("it's time")).toBe("It's Time");
  });

  test('should handle single-word strings', () => {
    expect(capitalizeWords('hello')).toBe('Hello');
  });
});

describe('filterActiveUsers', () => {
  test('should return only active users', () => {
    const users = [
      { name: 'Alice', active: true },
      { name: 'Bob', active: false },
      { name: 'Charlie', active: true }
    ];
    expect(filterActiveUsers(users)).toEqual([
      { name: 'Alice', active: true },
      { name: 'Charlie', active: true }
    ]);
  });

  test('should return empty array if all users are inactive', () => {
    const users = [
      { name: 'Alice', active: false },
      { name: 'Bob', active: false }
    ];
    expect(filterActiveUsers(users)).toEqual([]);
  });

  test('should return empty array if input array is empty', () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});

describe('logAction', () => {
  test('should generate correct log string for valid inputs', () => {
    expect(logAction('login', 'Alice')).toBe('Action: login performed by Alice');
  });

  test('should handle missing action or username', () => {
    expect(logAction('', 'Alice')).toBe('Action:  performed by Alice');
    expect(logAction('login', '')).toBe('Action: login performed by ');
    expect(logAction('', '')).toBe('Action:  performed by ');
  });

  test('should handle undefined or null inputs', () => {
    expect(logAction(undefined, 'Alice')).toBe('Action: undefined performed by Alice');
    expect(logAction('login', null)).toBe('Action: login performed by null');
  });
});
