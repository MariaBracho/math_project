import { promedioValue, valueResultPromedio } from "./promedioId"
import { promedioButtons } from "./promedioId"

const paraments=()=>{
  const input=document.getElementById('promedioModaMediaValue')
  const onlyOperation = /[^\d\,\.]/g
  input.addEventListener("input", (e) => {
      let value = e.target.value
      e.target.value = value.replace(onlyOperation, "")
  })
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



const moda=(list)=>{
  const value=list.split(',')
  const orderValue=value.sort()
  const lengthList=orderValue.length

  const obj= orderValue.reduce((count,current)=>{
    console.log(count)
     count[current]=(count[current]||0)+1
     return count
   
  },[])
   
  const arr=Object.values(obj)
  const ordern=arr.sort()
  const length=ordern.length
  const findRepeat=ordern[length-1]
  const moda=obj.indexOf(findRepeat)

  console.log(arr)


  if(lengthList===1){
    const value=orderValue[0]===''
    const result=value?'0':orderValue[0]
    return result
  }
  else{
    const results=` La moda es : ${moda} y se repite: ${findRepeat} veces`
    return results
  }
  
}

export const mediaAritmeticaFormula=()=>{
  const buttons=promedioButtons() 
  paraments()
  
  buttons.media.addEventListener('click',()=>{
    const promedio= promedioValue()
    valueResultPromedio(mediaAritmetica(promedio))
    
  })

  buttons.mediana.addEventListener('click',()=>{
  const promedio=promedioValue()
  valueResultPromedio(mediana(promedio))

  })

  buttons.moda.addEventListener('click',()=>{
     const promedio=promedioValue()
     const result=moda(promedio)
     valueResultPromedio(result)

  })

}