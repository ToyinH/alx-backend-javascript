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
