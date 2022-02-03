let count = 0;

function increase() {
  count++;
}

function getCount() {
  console.log(count);
  return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;
