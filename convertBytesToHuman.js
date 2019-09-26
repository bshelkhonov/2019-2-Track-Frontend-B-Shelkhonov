/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */



export default function convertBytesToHuman(bytes) {
  // your solution goes here
  let toKB = 1024, toMB = toKB * 1024, 
    toGB =toMB * 1024, toTB = toMB * 1024, 
    toPB = toTB * 1024;
  if (!Number.isInteger(bytes) || bytes < 0) {
    return false;
  }
  else if (bytes < toKB) {
    return bytes + " B";
  }
  else if (bytes < toMB) {
    return parseFloat((bytes / toKB).toFixed(3)) + " KB";
  }
  else if (bytes < toGB) {
    return parseFloat((bytes / toMB).toFixed(3)) + " MB";
  }
  else if (bytes < toTB) {
    return parseFloat((bytes / toGB).toFixed(3)) + " GB";
  }
  else if (bytes < toPB) {
    return parseFloat((bytes / toTB).toFixed(3)) + " TB";
  }
  return parseFloat((bytes / toPB).toFixed(3)) + " PB";
}
