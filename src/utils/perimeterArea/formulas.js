import {getTriangleValues } from "./figuresValues"
import { valueResult } from "./figuresValues"
import { getSquareValue } from "./figuresValues"
import { getCircleValue } from "./figuresValues"
import { buttons } from "../perimeterArea/perimeterAreaButton"
import { emptyInputMessage } from "../emptyInput"
import { emptyInput } from "../emptyInput"
import { findZero } from "../emptyInput"
import { getIsoscelesTriangleValues } from "./figuresValues"



const trianglePerimeterFormula=(rightSide,leftSide,base)=>{
return rightSide+leftSide+base
}

const triangleAreaFormula=(base,height)=>{
return (base*height)/2
}


const squarePerimeterFormula=(side)=>{return side*4}
const squareArea=(side)=>{return side**2}


const circlePerimeterFormula=(radio)=>{
const diameter=radio*2
return diameter*Math.PI
}

const circleArea=(radio)=>{return (radio**2)*Math.PI}



const triangleIsoscelesPerimeterFormula=(sideA,base)=>{return 2*sideA+base}
const triangleIsoscelesHeightFormula=(sideA,base)=>{return Math.sqrt(sideA**2-(base**2/4))}
const triangleIsoscelesArea=(height,base)=>{return (base*height)/2}


export const triangleFormula=()=>{
     valueResult()
     const button=buttons()

    button.perimeter.addEventListener("click",()=>{
      const triangle=getTriangleValues()
      findZero(triangle)?valueResult(emptyInputMessage):valueResult(trianglePerimeterFormula(triangle.rightSide,triangle.leftSide,triangle.base))
     })
     button.area.addEventListener("click",()=>{
      const triangle=getTriangleValues()
      findZero(triangle)?valueResult(emptyInputMessage):valueResult(triangleAreaFormula(triangle.base,triangle.height))
     })
   }

 
  export const squareFormula=()=>{
    valueResult()
    const button=buttons()
  
    button.perimeter.addEventListener("click",()=>{
     const squareValue=getSquareValue() 
      emptyInput(squareValue)?valueResult(emptyInputMessage):valueResult(squarePerimeterFormula(squareValue))
     })
     button.area.addEventListener("click",()=>{
      const squareValue=getSquareValue()
       emptyInput(squareValue)?valueResult(emptyInputMessage):valueResult(squareArea(squareValue))
     })
   

  }
  
  

  export const circleFormula=()=>{
    valueResult()
    const button=buttons()

    button.perimeter.addEventListener("click",()=>{

      const circleValue=getCircleValue()
      emptyInput(circleValue)?valueResult(emptyInputMessage):valueResult(circlePerimeterFormula(circleValue))
     })
     button.area.addEventListener("click",()=>{
      const circleValue=getCircleValue()
       emptyInput(circleValue)?valueResult(emptyInputMessage):valueResult(circleArea(circleValue))
     })
   

  }

  export const isoscelesTriangleFormula=()=>{
    valueResult()
    const button=buttons()

    button.height.addEventListener("click",()=>{
      const triangleValue=getIsoscelesTriangleValues()
      findZero(triangleValue)?valueResult(emptyInputMessage):valueResult(triangleIsoscelesHeightFormula(triangleValue.side,triangleValue.base))
     })
     button.perimeter.addEventListener("click",()=>{
      const triangleValue=getIsoscelesTriangleValues()
      findZero(triangleValue)?valueResult(emptyInputMessage):valueResult(triangleIsoscelesPerimeterFormula(triangleValue.side,triangleValue.base))
     })
     button.area.addEventListener("click",()=>{
      const triangleValue=getIsoscelesTriangleValues()
      findZero(triangleValue)?valueResult(emptyInputMessage):valueResult(triangleIsoscelesArea(triangleValue.side,triangleValue.base))
     })
   

  }
  
 



