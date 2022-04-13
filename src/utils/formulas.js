import {getTriangleValues } from "./figuresValues"
import { valueResult } from "./figuresValues"
import { getSquareValue } from "./figuresValues"
import { getCircleValue } from "./figuresValues"
import { buttons } from "./perimeterAreaButton"
import { emptyInputMessage } from "./emptyInput"
import { emptyInput } from "./emptyInput"
import { findZero } from "./emptyInput"
import { getIsoscelesTriangleValues } from "./figuresValues"



//triangle perimeter and area
const trianglePerimeter=(rightSide,leftSide,base)=>{
return rightSide+leftSide+base
}

const triangleArea=(base,height)=>{
return (base*height)/2
}

// square perimeter and area
const squarePerimeter=(side)=>{return side*4}
const squareArea=(side)=>{return side**2}



// circle perimeter and area
const circlePerimeter=(radio)=>{
const diameter=radio*2
return diameter*Math.PI
}

const circleArea=(radio)=>{return (radio**2)*Math.PI}


//isosceles


const triangleIsoscelesPerimeter=(sideA,base)=>{return 2*sideA+base}
const triangleIsoscelesHeight=(sideA,base)=>{return Math.sqrt(sideA**2-(base**2/4))}
const triangleIsoscelesArea=(height,base)=>{return (base*height)/2}


// formulas
export const triangleFormula=()=>{
     valueResult()
     const button=buttons()

    button.perimeter.addEventListener("click",()=>{
      const triangle=getTriangleValues()
      findZero(triangle)?valueResult(emptyInputMessage):valueResult(trianglePerimeter(triangle.rightSide,triangle.leftSide,triangle.base))
     })
     button.area.addEventListener("click",()=>{
      const triangle=getTriangleValues()
      findZero(triangle)?valueResult(emptyInputMessage):valueResult(triangleArea(triangle.base,triangle.height))
     })
   }

 
  export const squareFormula=()=>{
    valueResult()
    const button=buttons()
  
    button.perimeter.addEventListener("click",()=>{
     const squareValue=getSquareValue() 
      emptyInput(squareValue)?valueResult(emptyInputMessage):valueResult(squarePerimeter(squareValue))
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
      console.log('circulo',getCircleValue())
      const circleValue=getCircleValue()
      emptyInput(circleValue)?valueResult(emptyInputMessage):valueResult(circlePerimeter(circleValue))
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
      findZero(triangleValue)?valueResult(emptyInputMessage):valueResult(triangleIsoscelesHeight(triangleValue.side,triangleValue.base))
     })
     button.perimeter.addEventListener("click",()=>{
      const triangleValue=getIsoscelesTriangleValues()
      findZero(triangleValue)?valueResult(emptyInputMessage):valueResult(triangleIsoscelesPerimeter(triangleValue.side,triangleValue.base))
     })
     button.area.addEventListener("click",()=>{
      const triangleValue=getIsoscelesTriangleValues()
      findZero(triangleValue)?valueResult(emptyInputMessage):valueResult(triangleIsoscelesArea(triangleValue.side,triangleValue.base))
     })
   

  }
  
 



