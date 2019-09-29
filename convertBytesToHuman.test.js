/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman(-56.5)).toBe(false);
  expect(convertBytesToHuman(121233.332212)).toBe(false);
  // ...
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1050)).toBe("1.03 KB");
  expect(convertBytesToHuman(1024)).toBe("1 KB");
  expect(convertBytesToHuman(48432948932)).toBe("45.11 GB");
  // ...
});

// другая группа проверок
