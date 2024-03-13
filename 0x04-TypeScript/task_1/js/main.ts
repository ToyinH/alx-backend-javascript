// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows adding any other property dynamically
}

// Create a function to create a Teacher object with required properties
function createTeacher(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, additionalProps: Record<string, any>): Teacher {
  return {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    ...additionalProps // Spread operator to add any additional properties
  };
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the interface for the printTeacher function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
};

// Define interface for the constructor parameters
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Define interface for the Student class
interface Student {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the Student interface in StudentClass
class StudentClass implements Student {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

