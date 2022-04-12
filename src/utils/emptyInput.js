export const findZero=(triangleValues)=>{
  const allValues=Object.values(triangleValues).some((t)=>{
   return t===0
  })
 return allValues
}

export const emptyInput=(value)=> { return value===''}

export const emptyInputMessage="Rellena todos los parametros"