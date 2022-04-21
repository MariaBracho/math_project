import { promedioValue, valueResultPromedio } from "./promedioId"
import { promedioButtons } from "./promedioId"

const paraments=(regex,replace)=>{
  const input=document.getElementById('promedioModaMediaValue')
  const onlyOperation = regex
  input.addEventListener("input", (e) => {
      let value = e.target.value
      e.target.value = value.replace(onlyOperation, replace)
  })
}

const paramentsInput=(regex,replace,str,regexTwo)=>{
  const input=document.getElementById('promedioModaMediaValue')
  const value=str.replace(regex,replace)
  const valueTwo=value.replace(regexTwo,replace)
  input.value=valueTwo
}


const mediaAritmetica=(list)=>{
    const value=list.split(',')
    const length=value.length
    const sum=value.reduce((lastnumber,current)=>{
         return Number(lastnumber)+Number(current)
         
    })
    return sum/length
}


const mediana=(list)=>{
const value=list.split(',')
const orderValue=value.sort()
const length=orderValue.length
const middle=parseInt(length/2) 

if(length%2===0){
const positionOne=Number(orderValue[middle-1])
const positionTwo=Number(orderValue[middle])

console.log(orderValue)
console.log(positionOne,positionTwo)
return (positionOne+positionTwo)/2
}
if(length===1){
 const value=orderValue[0]===''
 const result=value?'0':orderValue[0]
 return result
}
else{
const operation=orderValue[middle]

return operation

}

}

//'5,12,2,5'.split(/(\d*)\,\s/)



const moda=(list)=>{
  const str2=list.replace(/^,{1,}/g, '')
  const value=str2.replace(/,{1,}$/g,'').split(',')

  console.log(value,'str3')
  const orderValue=value.sort()
  const lengthList=orderValue.length

  const obj = orderValue.reduce((count,current)=>{
    console.log(count)
    count[current]=(count[current]||0)+1
    return count
  }, { })
  

  console.log(obj)

  const arr=Object.values(obj)
  const ordern=arr.sort()
  const length=ordern.length
  const findRepeat=ordern[length-1]

  const moda=Object.entries(obj).filter(([,value])=>{
  return value===findRepeat


})

const modaNumber= moda.map(([keys,values])=>{
  return keys.toString()
})

console.log(findRepeat)

  if(lengthList===1){
    const value=orderValue[0]===''
    const result=value?'0':orderValue[0]
    return result
  }
  else{
    const results=` La moda es : ${modaNumber} y se repite: ${findRepeat} veces`
    return results
  }

  
}

export const mediaAritmeticaFormula=()=>{
  const buttons=promedioButtons() 
  paraments(/[^\d\,\.]/g,'')
  paraments(/,{2,}/g, ',')
  paraments(/^\.{1,}/,'')
  paraments(/\.{2,}/,'.')
  paraments(/(?<=,)\./g,'')

  
  buttons.media.addEventListener('click',()=>{
    const promedio= promedioValue()
    paramentsInput(/^,{1,}/g, '',promedio,/,{1,}$/g)

    valueResultPromedio(mediaAritmetica(promedio))
    
  })

  buttons.mediana.addEventListener('click',()=>{
  const promedio=promedioValue()

  paramentsInput(/^,{1,}/g, '',promedio,/,{1,}$/g)
  valueResultPromedio(mediana(promedio))

  })

  buttons.moda.addEventListener('click',()=>{
     const promedio=promedioValue()
     paramentsInput(/^,{1,}/g, '',promedio,/,{1,}$/g)
  

     const result=moda(promedio)
     valueResultPromedio(result)

  })

}


let ejemplo=',.4,5'
let otroEjemplo='..9,9'