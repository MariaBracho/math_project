import { InterestValueInput } from "./interesValue";
import { showResult } from "../showResult";


const simpleInterestFormula=(investment,time,rate)=>{
 return investment*rate/100*time

}

const compoundInterestFormula=(investment,time,rate)=>{
  const interest= investment*(1+rate/100)**time
  return interest-Number(investment)
 
 }

 export const interestFormula=()=>{
    const buttonSimple=document.getElementById("buttonSimple")  
    const buttonCompuesto=document.getElementById("buttonCompuesto")
    const idResult="InteresResult"

    buttonSimple.addEventListener('click',()=>{
    const value=InterestValueInput()
    const interesSimpleResult=simpleInterestFormula(value.investment,value.time,value.rate)
    showResult(interesSimpleResult,idResult)

    })

    buttonCompuesto.addEventListener('click',()=>{
      const value=InterestValueInput()
      
      const interesCompuestoResult=compoundInterestFormula(value.investment,value.time,value.rate)
      showResult(interesCompuestoResult,idResult)
    
    })
 }
 
