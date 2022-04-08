const gethash=()=>{
let reget=/[^\w-]/ig
  let hash=location.hash
  let cadena=hash.replaceAll(reget,'')
  console.log(cadena)
  return cadena
}

export default gethash 