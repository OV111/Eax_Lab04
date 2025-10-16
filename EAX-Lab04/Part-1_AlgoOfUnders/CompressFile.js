// ========================================
// REFACTORING CHALLENGE
// ========================================
// Your task: Refactor these verbose, unoptimized functions
// Goal: Reduce line count while maintaining:
// - Same functionality
// - Readability
// - Clarity
// Target: Reduce each example by 40-60%
// ========================================

const { count } = require("console");

// ========================================
// EXAMPLE 1: E-COMMERCE ORDER PROCESSOR
// ========================================
// Current: 45 lines
// Target: ~20-25 lines

function processOrders_VERBOSE(orders) {
  let result = [];
  for (let order of orders) {
    // Check if order is valid
    if (!order.items || order.items.length === 0) {
      continue;
    }
    // Calculate total
    let total = 0;
    for (let item of order.items) {
      total += item.price * item.quantity;
    }
    // Apply discount
    let discount = total > 100 ? total * 0.1 : total > 50 ? total * 0.05 : 0;
    let finalTotal = total - discount;
    // Determine shipping
    let shipping = finalTotal < 50 ? 10 : 0;
    let grandTotal = finalTotal + shipping;
    // Create result object
    result.push({
      orderId: order.id,
      subtotal: total,
      discount: discount,
      shipping: shipping,
      total: grandTotal,
    });
  }
  return result;
}

// ========================================
// EXAMPLE 2: STUDENT GRADE ANALYZER
// ========================================
// Current: 50 lines
// Target: ~20-25 lines

function analyzeStudents_VERBOSE(students) {
  let results = [];
  for (let student of students) { // or with map method
    let total = 0, count = 0;
    let grades = student.grades;
    for (let grade of grades) {
      total += grade;
      count++;
    }
    let average = total / count;
    let letterGrade =
      average >= 90
        ? (letterGrade = "A")
        : average >= 80
        ? (letterGrade = "B")
        : average >= 70
        ? (letterGrade = "C")
        : average >= 60
        ? (letterGrade = "D")
        : "F";
    let isPassing = average >= 60 ? true : false;
    let highest = Math.max(...grades);
    let lowest = Math.min(...grades);
    results.push({
      name: student.name,
      average,
      letterGrade,
      passing: isPassing,
      highest,
      lowest,
    });
  }
  return results;
}

// ========================================
// TEST DATA
// ========================================

const sampleOrders = [
  {
    id: "ORD-001",
    items: [
      { name: "Laptop", price: 800, quantity: 1 },
      { name: "Mouse", price: 25, quantity: 2 },
    ],
  },
  {
    id: "ORD-002",
    items: [
      { name: "Keyboard", price: 60, quantity: 1 },
      { name: "Cable", price: 10, quantity: 3 },
    ],
  },
  {
    id: "ORD-003",
    items: [],
  },
  {
    id: "ORD-004",
    items: [
      { name: "Monitor", price: 300, quantity: 1 },
      { name: "Stand", price: 50, quantity: 1 },
    ],
  },
];

const sampleStudents = [
  { name: "Alice", grades: [85, 90, 88, 92, 87] },
  { name: "Bob", grades: [72, 68, 75, 70, 73] },
  { name: "Charlie", grades: [55, 58, 52, 60, 54] },
  { name: "Diana", grades: [95, 98, 96, 99, 97] },
];

// ========================================
// YOUR TASK:
// ========================================
// 1. Analyze the verbose functions above
// 2. Identify redundant code, verbose patterns
// 3. Rewrite as processOrders_REFACTORED()
// 4. Rewrite as analyzeStudents_REFACTORED()
// 5. Test with sample data to ensure same output
//
// Refactoring hints:
// - Use array methods (map, filter, reduce)
// - Eliminate unnecessary variables
// - Combine related operations
// - Use ternary operators for simple conditions
// - Use Math.max/min for finding extremes
// - Chain operations where logical
// ========================================

// ========================================
// UNCOMMENT TO TEST YOUR REFACTORED CODE
// ========================================

/*
// Write your refactored versions here:

function processOrders_REFACTORED(orders) {
  // YOUR CODE HERE
}

function analyzeStudents_REFACTORED(students) {
  // YOUR CODE HERE
}

// Test both versions produce same output
console.log("=== TESTING EXAMPLE 1 ===");
console.log("Verbose version:");
console.log(JSON.stringify(processOrders_VERBOSE(sampleOrders), null, 2));
console.log("\nRefactored version:");
console.log(JSON.stringify(processOrders_REFACTORED(sampleOrders), null, 2));

console.log("\n=== TESTING EXAMPLE 2 ===");
console.log("Verbose version:");
console.log(JSON.stringify(analyzeStudents_VERBOSE(sampleStudents), null, 2));
console.log("\nRefactored version:");
console.log(JSON.stringify(analyzeStudents_REFACTORED(sampleStudents), null, 2));
*/
