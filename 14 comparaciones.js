let num1 = 10;
let num2 = 10;

// Comparación 1:
console.log(num1 == num2); // == solo compara ambos valores, no compara el tipo de dato
console.log(num1 === num2); // === compara ambos valores y que el tipo de dato sea igual

// Comparación 2:
num2 = "10";
console.log(num1 == num2);
console.log(num1 === num2);

// Comparación 3: Diferentes
console.log(num1 != num2);
console.log(num1 !== num2);