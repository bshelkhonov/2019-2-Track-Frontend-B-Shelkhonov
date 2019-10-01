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
  expect(convertBytesToHuman(Infinity)).toBe(false);
  expect(convertBytesToHuman(null)).toBe(false);
  expect(convertBytesToHuman("1234")).toBe(false);
  expect(convertBytesToHuman(NaN)).toBe(false);
  expect(convertBytesToHuman(false)).toBe(false);
  // ...
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1050)).toBe("1.03 KB");
  expect(convertBytesToHuman(1024)).toBe("1 KB");
  expect(convertBytesToHuman(32232221)).toBe("30.74 MB");
  expect(convertBytesToHuman(859384984932345)).toBe("781.61 TB");
  expect(convertBytesToHuman(438478357837847421)).toBe("389.45 PB");
  // ...
});

// другая группа проверок
