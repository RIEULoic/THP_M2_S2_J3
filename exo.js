const array = [10, 15, 3, 0, 6, 2]
const k = 17

//exo 1
function isSumK (n) {
  for (i = 0; i < n.length; i++) {
    for (j = i + 1; j <= n.length - 1 ; j++) {
      let sum = n[i] + n[j];
      if (sum === k) {
        return true;
      }; 
    };
  };
return false;
};
console.log(isSumK(array));

//exo 2
const seeWest = (n) => {
  let count = 1
  for (i = 0; i < n.length; i++) {
    let hasView = true;
    for (j = i + 1; j < n.length - 2; j++) {
      if (n[i] <= n[j]);
      hasView = false ;
    };
    hasView ? count++ : null;
  };
return count;
};

console.log(seeWest(array));