import { promedioValue, valueResultPromedio } from "./promedioId"
import { promedioButtons } from "./promedioId"

const paraments=(regex,replace)=>{
  const inputId=document.getElementById('promedioModaMediaValue')
  const onlyOperation = regex
  inputId.addEventListener("input", (e) => {
      let value = e.target.value
      e.target.value = value.replace(onlyOperation, replace)
  })
}

const paramentsInput=(regex,replace,str,regexTwo)=>{
  const inputId=document.getElementById('promedioModaMediaValue')
  const transformValue=str.replace(regex,replace)
  const value=transformValue.replace(regexTwo,replace)
  inputId.value=value
}


const arithmeticAverage=(list)=>{
    const transformToArray=list.split(',')
    const length=transformToArray.length
    const sum=transformToArray.reduce((lastnumber,current)=>{
         return Number(lastnumber)+Number(current)
         
    })
    return sum/length
}


const median=(list)=>{
const transformToArray=list.split(',')
const sortValues=transformToArray.sort()
const length=sortValues.length
const middle=parseInt(length/2) 

if(length%2===0){
const positionOne=Number(sortValues[middle-1])
const positionTwo=Number(sortValues[middle])

return (positionOne+positionTwo)/2
}

if(length===1){
 const value=sortValues[0]===''
 const result=value?'0':sortValues[0]
 return result
}
else{

  return sortValues[middle]


}

}

const geometricMean=(list)=>
{
  const transformToArray=list.split(',')
  const length=transformToArray.length
  const operation=transformToArray.reduce((lastnumber,current)=>{
    return Number(lastnumber)*Number(current)
    
})

return operation**(1/length)

}

const mode=(list)=>{
  const listReplace=list.replace(/^,{1,}/g, '')
  const transformToArray=listReplace.replace(/,{1,}$/g,'').split(',')


  const sortList=transformToArray.sort()
  const lengthList=sortList.length

  const obj = sortList.reduce((count,current)=>{
    
    count[current]=(count[current]||0)+1
    return count
  }, { })
  
  const valuesList=Object.values(obj)
  const sortValues=valuesList.sort()
  const findRepeatNumber=sortValues[sortValues.length-1]


  const mode=Object.entries(obj).filter(([,value])=>{
  return value===findRepeatNumber


})

const modaNumber= mode.map(([keys,values])=>{
  return keys.toString()
})



  if(lengthList===1){
    const value=sortList[0]===''
    const result=value?'0':sortList[0]
    return result
  }
  else{

    return ` La moda es : ${modaNumber} y se repite: ${findRepeatNumber} veces`
    
  }
}

export const onclick=()=>{
  const buttons=promedioButtons() 

  paraments(/[^\d\,\.]/g,'')
  paraments(/,{2,}/g, ',')
  paraments(/^\.{1,}/,'')
  paraments(/\.{2,}/,'.')
  paraments(/(?<=,)\./g,'')

  
  buttons.average.addEventListener('click',()=>{
    const promedio= promedioValue()
    paramentsInput(/^,{1,}/g, '',promedio,/,{1,}$/g)

    valueResultPromedio(arithmeticAverage(promedio))
    
  })

  buttons.median.addEventListener('click',()=>{
  const promedio=promedioValue()

  paramentsInput(/^,{1,}/g, '',promedio,/,{1,}$/g)
  valueResultPromedio(median(promedio))

  })

  buttons.mode.addEventListener('click',()=>{
     const promedio=promedioValue()
     paramentsInput(/^,{1,}/g, '',promedio,/,{1,}$/g)
  

     const result=mode(promedio)
     valueResultPromedio(result)

  })

  buttons.geometricMean.addEventListener('click',()=>{
    const promedio=promedioValue()
    paramentsInput(/^,{1,}/g, '',promedio,/,{1,}$/g)
    valueResultPromedio(geometricMean(promedio))
  })

}


