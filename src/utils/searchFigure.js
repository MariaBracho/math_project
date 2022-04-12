import { figure } from "./listofFigure"
import { triangleFormula } from "./formulas"

export const searchFigure=()=>{
  const listOfFigure=figure()
  const renderFigure=document.getElementById('geometric_figure')

  triangleFormula()

  listOfFigure.forEach((figures)=>{
  
  document.getElementById(figures.figureid).addEventListener('click',()=>{
  renderFigure.innerHTML=figures.render
  figures.formula()
    
    })

   })
   
}




