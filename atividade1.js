var salario = parseFloat(prompt("Informe o salário: "));
console.log("Salário antes do aumento: "+ salario)
salario20 = salario * 0.20
salario15 = salario * 0.15
salario10 = salario * 0.10
salario5 = salario * 0.05
if(salario <= 280){
  console.log("Aumento de 20% : " + salario20)
  console.log("Salário após o aumento: " + (salario + salario20))
}else if(salario <= 700){
  console.log("Aumento de 15%: " + salario15)
  console.log("Salário após o aumento: " + (salario + salario15))
}else if(salario <= 1500){
  console.log("Aumento de 10%: " + salario10)
  console.log("Salário após o aumento: " + (salario + salario10))
}else
  console.log(salario5)

