export const promedioValue=()=>{
  return document.getElementById('promedioModaMediaValue').value
}



export const valueResultPromedio=(value)=>{
  return document.getElementById('resulValuePromedio').innerHTML=value
}

export const promedioButtons=()=>({
moda:document.getElementById('modaButton'),
mediana:document.getElementById('medianaButton'),
media:document.getElementById('mediaButton')

})