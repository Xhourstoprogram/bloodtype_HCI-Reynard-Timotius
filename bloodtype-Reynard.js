const validBloodGroupRegex = /^(A|B|AB|O)[+-]$/i; 
const validBloodGroupString = 'AB+';
const invalidBloodGroupString = 'BC+';

// Returns true
console.log(validBloodGroupRegex.test(validBloodGroupString))

// Returns false
console.log(validBloodGroupRegex.test(invalidBloodGroupString))