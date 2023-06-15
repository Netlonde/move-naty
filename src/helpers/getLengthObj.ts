export function getLengthObj(obj: object) {
  let length = 0;
  Object.keys(obj).forEach(() => {
    length += 1;
  });
  return length;
}
