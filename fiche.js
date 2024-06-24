// somme
let x = 45;
let y= 5;
let z = x+y;
console.log(z);
// produit
let nb1 = 12;
let nb2 = 8;
let nb = nb1*nb2;
alert(nb);
// Écrire un programme qui permet de faire la table de multiplication de 1 à 9
let i = 1;
i1=2;
i2=3;
i3=4;
i4=5;
i5=6;
i6=7;
i7=8;
i8=9;
let j =9;
console.log(i*j);
console.log(i1*j);
console.log(i2*j);
console.log(i3*j);
console.log(i4*j);
console.log(i5*j);
console.log(i6*j);
console.log(i7*j);
console.log(i8*j);
// la somme de a et b
let a =12;
let b = 10;
let d= a+b;
let c = 2;
let e = d/=c;
document.write(e);
// Déclarez un tableau de 10 étudiants dont un étudiant a ces informations : Prénom - Nom - Âge - Note
let etudiants = [
    {prenom:"marie",nom:"sarr",age:"20",note:"18"},
    {prenom:"modou",nom:"fall",age:"18",note:"16"},
    {prenom:"fatima",nom:"beye",age:"20",note:"13"},
    {prenom:"coumba",nom:"biteye",age:"19",note:"14"},
    {prenom:"ansou",nom:"diop",age:"21",note:"17"},
    {prenom:"sophia",nom:"ndiaye",age:"18",note:"12"},
    {prenom:"abdou",nom:"diouf",age:"20",note:"15"},
    {prenom:"antoine",nom:"gomis",age:"18",note:"13"},
    {prenom:"salim",nom:"tall",age:"19",note:"15"},
    {prenom:"bineta",nom:"lam",age:"18",note:"16"}
];
console.log(etudiants);
// Récupération de l'élément <tbody> dans le DOM
let tbody = document.querySelector('.table tbody');
// Génération des lignes de la table à partir des données des étudiants
etudiants.forEach(etudiants => {
    // Création d'une nouvelle ligne (<tr>)
    let row = document.createElement('tr');
  
    // Création des cellules (<td>) pour chaque attribut de l'étudiant
    let prenomCell = document.createElement('td');
    prenomCell.textContent = etudiants.prenom;
    row.appendChild(prenomCell);
  
    let nomCell = document.createElement('td');
    nomCell.textContent = etudiants.nom;
    row.appendChild(nomCell);
  
    let ageCell = document.createElement('td');
    ageCell.textContent = etudiants.age;
    row.appendChild(ageCell);
  
    let noteCell = document.createElement('td');
    noteCell.textContent = etudiants.note;
    row.appendChild(noteCell);
  
    // Ajout de la ligne au corps de la table (<tbody>)
    tbody.appendChild(row);
  });
  // Déclaration des variables à comparer
let variable1 = 42; // entier
let variable2 = "Hello"; // chaîne de caractères
let variable3 = 3.14; // décimal

// Comparaison et affichage des alertes avec switch-case
switch (true) {
  case typeof variable1 === 'number':
    alert(`Variable 1 est un entier : ${variable1}`);
    break;
  case typeof variable1 === 'string':
    alert(`Variable 1 est une chaîne de caractères : ${variable1}`);
    break;
  case typeof variable1 === 'number' && Number.isInteger(variable1):
    alert(`Variable 1 est un entier : ${variable1}`);
    break;
  default:
    alert(`Type de variable 1 non pris en charge : ${typeof variable1}`);
}

switch (true) {
  case typeof variable2 === 'number':
    alert(`Variable 2 est un entier : ${variable2}`);
    break;
  case typeof variable2 === 'string':
    alert(`Variable 2 est une chaîne de caractères : ${variable2}`);
    break;
  case typeof variable2 === 'number' && Number.isInteger(variable2):
    alert(`Variable 2 est un entier : ${variable2}`);
    break;
  default:
    alert(`Type de variable 2 non pris en charge : ${typeof variable2}`);
}

switch (true) {
  case typeof variable3 === 'number':
    alert(`Variable 3 est un décimal : ${variable3}`);
    break;
  case typeof variable3 === 'string':
    alert(`Variable 3 est une chaîne de caractères : ${variable3}`);
    break;
  case typeof variable3 === 'number' && !Number.isInteger(variable3):
    alert(`Variable 3 est un décimal : ${variable3}`);
    break;
  default:
    alert(`Type de variable 3 non pris en charge : ${typeof variable3}`);
}