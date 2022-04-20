export const gethash=()=>{
let reget=/[^-\w]/ig
  let hash=location.hash
  if(hash===''){
    window.location.hash='#/home/'
  }
  let cadena=hash.replaceAll(reget,'')
  console.log(cadena)
  return cadena
}

 