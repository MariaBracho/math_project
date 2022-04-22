export const promedioValue=()=>{
  return document.getElementById('promedioModaMediaValue').value
}



export const valueResultPromedio=(value)=>{
  return document.getElementById('resulValueAverage').innerHTML=value
}

export const promedioButtons=()=>({
mode:document.getElementById('modeButton'),
median:document.getElementById('medianButton'),
average:document.getElementById('averageButton'),
geometricMean:document.getElementById('geometricMeanButton'),

})