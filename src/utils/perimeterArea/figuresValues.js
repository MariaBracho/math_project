export const getTriangleValues = () => ({
  rightSide:Number(document.getElementById("rightSideOfTraingle")?.value),
  leftSide:Number(document.getElementById("leftSideOfTraingle")?.value),
  base:Number(document.getElementById("baseOfTriangle")?.value),
  height:Number(document.getElementById("triangleHeight")?.value)
});
  

export const valueResult=(value=0)=>{
 return document.getElementById('resultOfPerimetreAndArea').innerHTML=value

}

export const getSquareValue=()=>{
return (document.getElementById("squareSide")?.value)

}

export const getCircleValue=()=>{
  return document.getElementById('circleRadio')?.value
}

 export const getIsoscelesTriangleValues=()=>({
  side:Number(document.getElementById("sideTriangleIsosceles")?.value),
  base:Number(document.getElementById("baseOfTriangleIsosceles")?.value)
 })