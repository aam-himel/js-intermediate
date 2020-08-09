// slice
const nums = [11, 21, 12, 33, 45, 55, 3, 2, 1];
const arraySlice = nums.slice(3, 7);

console.log("Slice", arraySlice);
console.log("Nums", nums);

// splice
const ages = [5, 6, 10, 17, 18, 20, 25];
const removed = ages.splice(2, 2, 3, 4444);  // start, delete_count, elements_to_replace........
console.log("Removed", removed);
console.log("Ages", ages);


// Join
const names = ['himel', 'fariya', 'rubaya', 'niloy', 'hamim', 'anika'];
const joined = names.join('-');
console.log("Joined", joined);
console.log("Names", names); 