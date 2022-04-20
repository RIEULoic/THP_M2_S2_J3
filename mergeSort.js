const fs = require('fs');

//console.log(process.argv[2]);
try{
  const fileName = process.argv[2];
  const data = fs.readFileSync(fileName, 'utf8');
  const listConvertArray = data.split(' ').map(num => parseInt(num, 10));
  let count = 0

// Fonction merge sort en récursif
  function mergeSortTopDown(array) {
    if(array.length <= 1){
        return array
    }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
  console.log(count)

}

function mergeTopDown(left, right) {
  const array = [];

  while(left.length && right.length) {
      if(left[0] < right[0]) {
          array.push(left.shift())
          count++
      } else {
          array.push(right.shift())
          count++
        }        
  }
  console.log(`${count}`)
  return array.concat(left.slice()).concat(right.slice());
}
console.log(count)
console.log(`Tri fusion: ${count} comparaisons - [${mergeSortTopDown(listConvertArray)}]`)
} catch (error) {
  console.error(error.message);
}