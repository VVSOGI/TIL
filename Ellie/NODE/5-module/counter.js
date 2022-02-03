let count = 0;

export function increase() {
  count++;
}

export function getCount() {
  console.log(count);
  return count;
}
