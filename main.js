const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//* forEach pintar el nombre de las companies
// for (const company of companies) {
//   console.log(company.name)
// }
// companies.forEach((company) => console.log(company.name));

//* filter

// Pintar las edades que cumplan la mayoría de edad
const mayoresEdad = ages.filter(age=> age > 17)
// console.log(mayoresEdad)
// Filter
//pintar las companies que tienen la categoría Retail
const catRetail = companies.filter(company => company.category == "Retail")
// console.log(catRetail)
// Pintar las companies que empezarón en los 80 o para arriba
const company80 = companies.filter(company => company.start >= 1980)
// console.log(company80)

//* map

// Crear Array con los nombres de las companies

const nameCompanies = companies.map(company => company.name)
// console.log(nameCompanies)
// Crear Array con los nombres y categorias de las companies

const nameAndCategoryCompanies =  companies.map(company => {
  const obj = {
    name:company.name,
    category: company.category
  }
  return obj
})

// let nameAndCategoryCompanies2 = []
// for (const company of companies) {
//   const obj = {
//     name:company.name,
//     category: company.category
//   }
//   nameAndCategoryCompanies2.push(obj)
// }
console.log(nameAndCategoryCompanies)

//* reduce

//sumar todas las edades

const sumaEdad = ages.reduce((ageA,ageC)=> ageA + ageC,5)
console.log(sumaEdad)
