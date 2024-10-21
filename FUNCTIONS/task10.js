const objects = [{ name: 'harini', age: 28 }, { name: 'jai', age: 30 }, { name: 'lakshmi', age: 21 }];
objects.sort((a, b) => b.age - a.age);
console.log('Sorted objects (descending by age):',objects);
