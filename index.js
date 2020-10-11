let nome = prompt ("Qual o seu nome?");
let sobrenome = prompt ("Qual o seu sobrenome?");
let sobrenomecaps = sobrenome.toUpperCase();

alert (`Nome completo: ${nome} ${sobrenome}.`);
alert (`Nome de catálogo: ${sobrenomecaps}, ${nome}.`);