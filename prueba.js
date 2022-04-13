const triangleIsoceles=(sideA,sideB,base)=>{

const sideEqual=sideA===sideB
const baseDiferente=sideA!=base



if(sideEqual&&baseDiferente){
alert("es un triangulo isoceles")
const perimetro=2*sideA+base
const height=Math.sqrt(sideA**2-(base**2/4))
const area=(base*height)/2

alert("el perimetro es:"+perimetro)
alert("la altura es:"+ height)
alert("el area es:"+area)
}
else{

  alert("no es un triangulo isoceles")
}
}


Math.sqrt(38.25)