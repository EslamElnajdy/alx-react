// utils.test.js

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear
test('getFullYear returns the current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy
test('getFooterCopy returns the correct string when the argument is true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});
test('getFooterCopy returns the correct string when the argument is false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// Test for getLatestNotification
test('getLatestNotification returns the correct string', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});