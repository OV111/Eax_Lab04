// ========================================
// PURE PREDICTION CHALLENGE
// ========================================
// Study the functions, predict outputs for each input
// Write your predictions in a notebook BEFORE running!
// Then uncomment the test section at the bottom to check

// ========================================
// THE FUNCTIONS TO ANALYZE
// ========================================

function normalizeUserData(users) {
  const result = users
    .filter(user => user.age >= 18 && user.email.includes('@'))
    .map(user => ({
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`.toUpperCase(),
      age: user.age,
      email: user.email.toLowerCase(),
      status: user.age >= 65 ? 'senior' : user.age >= 18 ? 'adult' : 'minor'
    }))
    .sort((a, b) => a.age - b.age);
  
  return result;
}

function analyzeText(text) {
  const words = text.toLowerCase().split(' ').filter(w => w.length > 0);
  const wordCount = words.length;
  const uniqueWords = [...new Set(words)];
  const avgLength = words.reduce((sum, w) => sum + w.length, 0) / wordCount;
  
  return {
    totalWords: wordCount,
    uniqueWords: uniqueWords.length,
    averageLength: Math.round(avgLength * 10) / 10,
    longestWord: words.reduce((longest, word) => 
      word.length > longest.length ? word : longest, ''),
    startsWithVowel: /^[aeiou]/i.test(text)
  };
}

function transformNumbers(numbers, operation) {
  let result = [...numbers];
  
  switch(operation) {
    case 'double':
      result = result.map(n => n * 2);
      break;
    case 'square':
      result = result.map(n => n * n);
      break;
    case 'filterEven':
      result = result.filter(n => n % 2 === 0);
      break;
    case 'cumulative':
      let sum = 0;
      result = result.map(n => {
        sum += n;
        return sum;
      });
      break;
    default:
      result = numbers;
  }
  
  return result;
}

// const defaults4 = {
//   theme: 'light',
//   fontSize: 14,
//   sidebar: { visible: true, width: 200 },
//   plugins: ['plugin1', 'plugin2']
// };
// const userConfig4 = {
//   theme: 'dark',
//   sidebar: { visible: false },
//   plugins: ['plugin3']
// };

function mergeConfigs(defaults, userConfig) {
  const merged = { ...defaults };
  
  for (let key in userConfig) {
    if (typeof userConfig[key] === 'object' && !Array.isArray(userConfig[key])) {
      merged[key] = { ...defaults[key], ...userConfig[key] };
    } else {
      merged[key] = userConfig[key];
    }
  }
  
  return merged;
}
// const input5 = [
//   { name: 'Apple', category: 'fruit', price: 1.2 },
//   { name: 'Carrot', category: 'vegetable', price: 0.8 },
//   { name: 'Banana', category: 'fruit', price: 0.5 },
//   { name: 'Broccoli', category: 'vegetable', price: 1.5 },
//   { name: 'Orange', category: 'fruit', price: 1.0 }
// ];
// const property5 = 'category';
function groupByProperty(items, property) {
  const grouped = {};
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const key = item[property];
    
    if (!grouped[key]) {
      grouped[key] = [];
    }
    
    grouped[key].push(item);
  }
  
  return grouped;
}
function processScores(scores) {
  const filtered = scores.filter(s => s >= 50);
  const sorted = filtered.sort((a, b) => b - a);
  const top3 = sorted.slice(0, 3);
  const average = top3.reduce((sum, s) => sum + s, 0) / top3.length;
  
  return {
    passing: filtered.length,
    top3: top3,
    average: Math.round(average * 10) / 10
  };
}

// ========================================
// PREDICTION INPUTS - GUESS THE OUTPUTS!
// ========================================

// CHALLENGE 1: normalizeUserData()
const input1 = [
  { id: 1, firstName: 'Alice', lastName: 'Smith', age: 30, email: 'alice@test.com' },
  { id: 2, firstName: 'Bob', lastName: 'Jones', age: 16, email: 'bob@test.com' },
  { id: 3, firstName: 'Charlie', lastName: 'Brown', age: 70, email: 'CHARLIE@TEST.COM' },
  { id: 4, firstName: 'Diana', lastName: 'Prince', age: 25, email: 'diana.test.com' }
];

// CHALLENGE 2: analyzeText()
const input2a = "The quick brown fox jumps over the lazy dog";
const input2b = "hello world hello";
const input2c = "JavaScript is awesome";

// CHALLENGE 3: transformNumbers()
const input3a = [1, 2, 3, 4, 5];
const operation3a = 'double';

const input3b = [10, 15, 20, 25, 30];
const operation3b = 'filterEven';

const input3c = [2, 3, 4];
const operation3c = 'cumulative';

const input3d = [5, 2, 8, 1];
const operation3d = 'square';

// CHALLENGE 4: mergeConfigs()
const defaults4 = {
  theme: 'light',
  fontSize: 14,
  sidebar: { visible: true, width: 200 },
  plugins: ['plugin1', 'plugin2']
};

const userConfig4 = {
  theme: 'dark',
  sidebar: { visible: false },
  plugins: ['plugin3']
};

// CHALLENGE 5: groupByProperty()
const input5 = [
  { name: 'Apple', category: 'fruit', price: 1.2 },
  { name: 'Carrot', category: 'vegetable', price: 0.8 },
  { name: 'Banana', category: 'fruit', price: 0.5 },
  { name: 'Broccoli', category: 'vegetable', price: 1.5 },
  { name: 'Orange', category: 'fruit', price: 1.0 }
];
const property5 = 'category';

// CHALLENGE 6: processScores()
const input6a = [85, 42, 90, 55, 38, 78, 95, 60];
const input6b = [30, 20, 40, 45];
const input6c = [100, 95, 90, 85, 80];

// ========================================
// YOUR TASK:
// ========================================
// In your notebook, write predictions for:
//
// 1. normalizeUserData(input1) → ?
//    - Which users filtered out and why?
//    - What does output array look like?
//    - What order?
//
// 2. analyzeText(input2a) → ?
//    analyzeText(input2b) → ?
//    analyzeText(input2c) → ?
//    - Count each carefully!
//
// 3. transformNumbers(input3a, operation3a) → ?
//    transformNumbers(input3b, operation3b) → ?
//    transformNumbers(input3c, operation3c) → ?
//    transformNumbers(input3d, operation3d) → ?
//    - Trace each operation step by step
//
// 4. mergeConfigs(defaults4, userConfig4) → ?
//    - What happens to nested objects?
//    - What happens to arrays?
//
// 5. groupByProperty(input5, property5) → ?
//    - What does the output structure look like?
//
// 6. processScores(input6a) → ?
//    processScores(input6b) → ?
//    processScores(input6c) → ?
//    - Filter → sort → slice → calculate
//
// ========================================
// UNCOMMENT BELOW TO CHECK YOUR PREDICTIONS
// ========================================


console.log("CHALLENGE 1:");
console.log(JSON.stringify(normalizeUserData(input1), null, 2));

console.log("\nCHALLENGE 2A:");
console.log(JSON.stringify(analyzeText(input2a), null, 2));

console.log("\nCHALLENGE 2B:");
console.log(JSON.stringify(analyzeText(input2b), null, 2));

console.log("\nCHALLENGE 2C:");
console.log(JSON.stringify(analyzeText(input2c), null, 2));

console.log("\nCHALLENGE 3A:");
console.log(transformNumbers(input3a, operation3a));

console.log("\nCHALLENGE 3B:");
console.log(transformNumbers(input3b, operation3b));

console.log("\nCHALLENGE 3C:");
console.log(transformNumbers(input3c, operation3c));

console.log("\nCHALLENGE 3D:");
console.log(transformNumbers(input3d, operation3d));

console.log("\nCHALLENGE 4:");
console.log(JSON.stringify(mergeConfigs(defaults4, userConfig4), null, 2));

console.log("\nCHALLENGE 5:");
console.log(JSON.stringify(groupByProperty(input5, property5), null, 2));

console.log("\nCHALLENGE 6A:");
console.log(JSON.stringify(processScores(input6a), null, 2));

console.log("\nCHALLENGE 6B:");
console.log(JSON.stringify(processScores(input6b), null, 2));

console.log("\nCHALLENGE 6C:");
console.log(JSON.stringify(processScores(input6c), null, 2));
