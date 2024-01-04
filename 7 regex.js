let texto1 = "Me gusta la música de Daft Punk";
let texto2 = "me gusta la música de Jamiroquai";
let texto3 = "Me gusta la música de Dua Lipa";
let texto4 = "música de Martin Garrix";

// Regex (Expreisones Regulares)
let regex = /Me/; // Busca ese texto en las diferentes variables (Distingue entre mayúsculas y minúsculas)
console.log(regex.test(texto1));
console.log(regex.test(texto2));
console.log(regex.test(texto3));
console.log(regex.test(texto4));

