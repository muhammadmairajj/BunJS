// Create file of .txt and write something
// const data = "I Love JavaScript";
// await Bun.write('output.txt', data);

// Read data from .txt file
const file = await Bun.file('output.txt');
console.log(await file.text());
console.log(file.size);
console.log(await file.stream());
console.log(await file.arrayBuffer());