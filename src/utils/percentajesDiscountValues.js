export const getInputsValues=()=>({
 price: document.getElementById('price').value,
 discount:document.getElementById('discount').value,
})

export const valueResult=(value)=>{
  return document.getElementById('discountResult').innerHTML=value
}