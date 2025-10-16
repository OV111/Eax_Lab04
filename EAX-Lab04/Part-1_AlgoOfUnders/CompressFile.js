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

// ========================================
// EXAMPLE 1: E-COMMERCE ORDER PROCESSOR
// ========================================
// Current: 45 lines
// Target: ~20-25 lines

function processOrders_VERBOSE(orders) {
  let result = [];
  
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    
    // Check if order is valid
    let isValid = false;
    if (order.items && order.items.length > 0) {
      isValid = true;
    }
    
    if (isValid === true) {
      // Calculate total
      let total = 0;
      for (let j = 0; j < order.items.length; j++) {
        let item = order.items[j];
        let itemTotal = item.price * item.quantity;
        total = total + itemTotal;
      }
      
      // Apply discount
      let discount = 0;
      if (total > 100) {
        discount = total * 0.1;
      } else if (total > 50) {
        discount = total * 0.05;
      } else {
        discount = 0;
      }
      
      let finalTotal = total - discount;
      
      // Determine shipping
      let shipping = 0;
      if (finalTotal < 50) {
        shipping = 10;
      } else {
        shipping = 0;
      }
      
      let grandTotal = finalTotal + shipping;
      
      // Create result object
      let processedOrder = {
        orderId: order.id,
        subtotal: total,
        discount: discount,
        shipping: shipping,
        total: grandTotal
      };
      
      result.push(processedOrder);
    }
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
  
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    
    // Calculate average
    let total = 0;
    let count = 0;
    for (let j = 0; j < student.grades.length; j++) {
      total = total + student.grades[j];
      count = count + 1;
    }
    let average = total / count;
    
    // Determine letter grade
    let letterGrade = '';
    if (average >= 90) {
      letterGrade = 'A';
    } else if (average >= 80) {
      letterGrade = 'B';
    } else if (average >= 70) {
      letterGrade = 'C';
    } else if (average >= 60) {
      letterGrade = 'D';
    } else {
      letterGrade = 'F';
    }
    
    // Check if passing
    let isPassing = false;
    if (average >= 60) {
      isPassing = true;
    } else {
      isPassing = false;
    }
    
    // Find highest grade
    let highest = student.grades[0];
    for (let k = 1; k < student.grades.length; k++) {
      if (student.grades[k] > highest) {
        highest = student.grades[k];
      }
    }
    
    // Find lowest grade
    let lowest = student.grades[0];
    for (let m = 1; m < student.grades.length; m++) {
      if (student.grades[m] < lowest) {
        lowest = student.grades[m];
      }
    }
    
    // Create result object
    let studentResult = {
      name: student.name,
      average: average,
      letterGrade: letterGrade,
      passing: isPassing,
      highest: highest,
      lowest: lowest
    };
    
    results.push(studentResult);
  }
  
  return results;
}

// ========================================
// TEST DATA
// ========================================

const sampleOrders = [
  {
    id: 'ORD-001',
    items: [
      { name: 'Laptop', price: 800, quantity: 1 },
      { name: 'Mouse', price: 25, quantity: 2 }
    ]
  },
  {
    id: 'ORD-002',
    items: [
      { name: 'Keyboard', price: 60, quantity: 1 },
      { name: 'Cable', price: 10, quantity: 3 }
    ]
  },
  {
    id: 'ORD-003',
    items: []
  },
  {
    id: 'ORD-004',
    items: [
      { name: 'Monitor', price: 300, quantity: 1 },
      { name: 'Stand', price: 50, quantity: 1 }
    ]
  }
];

const sampleStudents = [
  { name: 'Alice', grades: [85, 90, 88, 92, 87] },
  { name: 'Bob', grades: [72, 68, 75, 70, 73] },
  { name: 'Charlie', grades: [55, 58, 52, 60, 54] },
  { name: 'Diana', grades: [95, 98, 96, 99, 97] }
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