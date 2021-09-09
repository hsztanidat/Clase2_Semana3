//Ejercicio 1
const PI = 3.14
const calcCircumfrence = (radius) => {
  console.log(`La circunferencia es ${radius*(PI*2)}`);
}
const calcArea = (radius) => {
  console.log(`El area del circulo es ${(radius**2)*PI}`)
}

//Ejercicio 2
const calculateDogAge = function(age,typeToConv) {
  if (typeToConv==="Humano") {
    console.log(`Tienes ${age/7} en años de perro`)
  }
  else if (typeToConv==="Perro") {
    console.log(`Tu perro tiene ${age*7} en años humanos`)
  }
  else{
    console.log("Falta algo")
  }
}