import { getInputsValues } from "./percentajesDiscountValues";
import { valueResult } from "./percentajesDiscountValues";

const priceWithDiscount=(price,discount)=>{
  const percentageWithDiscount=100-discount
  return price*percentageWithDiscount/100
}

export const priceWithDiscountformula=()=>{
  
  const button=document.getElementById('buttonDiscount')

  button.addEventListener('click',()=>{
    const inputsValues=getInputsValues()
    valueResult(`${priceWithDiscount(inputsValues.price,inputsValues.discount)} $`) 
  })

}