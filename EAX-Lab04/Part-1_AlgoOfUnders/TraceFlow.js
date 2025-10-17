// Student Grade Tracker - Bug Hunt Exercise
// This program has logical errors that students need to find and fix
// The program should calculate student grades and generate class statistics

class Student {
  constructor(id, name, major) {
    this.id = id;
    this.name = name;
    this.major = major;
    this.grades = [];
    this.enrollmentDate = new Date();
  }

  addGrade(subject, score, credits) {
    this.grades.push({
      subject,
      score,
      credits,
      date: new Date()
    });
  }

  getGPA() {
    if (this.grades.length === 0) return 0;
    
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < this.grades.length; i++) {
      const grade = this.grades[i];
      totalPoints += grade.score * grade.credits;
      totalCredits += grade.credits; // bug 1 
    }
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
  }

  getAverageScore() {
    if (this.grades.length === 0) return 0;
    
    const total = this.grades.reduce((sum, grade) => sum + grade.score, 0);
    return (total / this.grades.length).toFixed(2);
  }

  getLetterGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  getFailingGrades() {
    return this.grades.filter(grade => grade.score < 60);
  }
}

class GradeTracker {
  constructor(schoolName) {
    this.schoolName = schoolName;
    this.students = [];
    this.nextId = 2001;
  }

  addStudent(name, major) {
    const student = new Student(this.nextId++, name, major);
    this.students.push(student);
    return student;
  }

  removeStudent(id) {
    const index = this.students.findIndex(s => s.id === id);
    if (index !== -1) {
      return this.students.splice(index, 1)[0];
    }
    return null;
  }

  getStudentById(id) {
    return this.students.find(s => s.id === id);
  }

  getStudentsByMajor(major) {
    return this.students.filter(s => 
      s.major.toLowerCase() === major.toLowerCase()
    );
  }

  getHonorRollStudents() {
    return this.students.filter(student => {
      const gpa = parseFloat(student.getGPA());
      return gpa > 3.5; 
    });
  }

  getAtRiskStudents() {
    return this.students.filter(student => {
      const failingGrades = student.getFailingGrades();
      return failingGrades.length >= 2;
    });
  }

  calculateClassAverage() {
    if (this.students.length === 0) return 0;

    let totalGPA = 0;
    for (let i = 0; i < this.students.length; i++) {
      totalGPA += parseFloat(this.students[i].getGPA());
    }

    return (totalGPA / this.students.length).toFixed(2);
  }

  getTopStudents(count) {
    const sorted = [...this.students].sort((a, b) => {
      const gpaA = parseFloat(a.getGPA());
      const gpaB = parseFloat(b.getGPA());
      return gpaB - gpaA ;  // bug2
    });
    return sorted.slice(0, count);
  }

  getGradeDistribution() {
    const distribution = { A: 0, B: 0, C: 0, D: 0, F: 0 };

    for (let i = 0; i < this.students.length; i++) {
      const student = this.students[i];
      for (let j = 0; j < student.grades.length; j++) {
        const grade = student.grades[j];
        const letter = student.getLetterGrade(grade.score);
        distribution[letter]++;
      }
    }

    return distribution;
  }

  getStatistics() {
    const total = this.students.length;
    const honorRoll = this.getHonorRollStudents().length;
    const atRisk = this.getAtRiskStudents().length;
    const classAverage = this.calculateClassAverage();

    return {
      totalStudents: total,
      honorRoll,
      atRisk,
      classAverage
    };
  }
}

function generateReport(tracker) {
  const stats = tracker.getStatistics();
  const distribution = tracker.getGradeDistribution();
  const topStudents = tracker.getTopStudents(3);

  let report = `=== ${tracker.schoolName.toUpperCase()} GRADE REPORT ===\n\n`;
  report += `Total Students: ${stats.totalStudents}\n`;
  report += `Class Average GPA: ${stats.classAverage}\n`;
  report += `Honor Roll Students: ${stats.honorRoll}\n`;
  report += `At-Risk Students: ${stats.atRisk}\n\n`;

  report += "GRADE DISTRIBUTION:\n";
  report += `  A: ${distribution.A}\n`;
  report += `  B: ${distribution.B}\n`;
  report += `  C: ${distribution.C}\n`;
  report += `  D: ${distribution.D}\n`;
  report += `  F: ${distribution.F}\n\n`;

  report += "TOP 3 STUDENTS:\n";
  topStudents.forEach((student, idx) => {
    report += `  ${idx + 1}. ${student.name} (${student.major}) - GPA: ${student.getGPA()}\n`;
  });

  return report;
}

function enrollStudentsWithGrades(tracker, studentData) {
  const enrolled = [];

  for (let i = 0; i < studentData.length; i++) {  // bug 3
    const data = studentData[i];
    const student = tracker.addStudent(data.name, data.major);
    
    for (let j = 0; j < data.grades.length; j++) {
      const grade = data.grades[j];
      student.addGrade(grade.subject, grade.score, grade.credits);
    }

    enrolled.push(student.id);
  }

  return enrolled;
}

console.log("Starting Grade Tracker System...\n");

const highSchool = new GradeTracker("Lincoln High School");

const studentsToEnroll = [
  {
    name: "Emma Wilson",
    major: "Science",
    grades: [
      { subject: "Math", score: 92, credits: 3 },
      { subject: "Physics", score: 88, credits: 4 },
      { subject: "Chemistry", score: 95, credits: 3 }
    ]
  },
  {
    name: "Liam Brown",
    major: "Arts",
    grades: [
      { subject: "Literature", score: 85, credits: 3 },
      { subject: "History", score: 78, credits: 3 },
      { subject: "Art", score: 92, credits: 2 }
    ]
  },
  {
    name: "Sophia Martinez",
    major: "Science",
    grades: [
      { subject: "Biology", score: 98, credits: 4 },
      { subject: "Math", score: 96, credits: 3 },
      { subject: "Chemistry", score: 94, credits: 3 }
    ]
  },
  {
    name: "Noah Davis",
    major: "Engineering",
    grades: [
      { subject: "Math", score: 55, credits: 3 },
      { subject: "Physics", score: 58, credits: 4 },
      { subject: "Engineering", score: 62, credits: 4 }
    ]
  }
];

console.log("Enrolling students and adding grades...");
const enrolledIds = enrollStudentsWithGrades(highSchool, studentsToEnroll);
console.log(`Enrolled ${enrolledIds.length} students\n`);

console.log("Generating grade report...");
const report = generateReport(highSchool);
console.log(report);

console.log("Science majors:");

// studentsToEnroll.forEach(element => {
//    console.log(element.major) 
// })
const scienceStudents = highSchool.getStudentsByMajor("Science");
scienceStudents.forEach(student => {
  console.log(` ${student.name} - Majors: ${student.major} - GPA: ${student.getGPA()}`);
});

console.log("\n=== Program Complete ===");