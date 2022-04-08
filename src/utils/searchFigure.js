import { figure } from "./listofFigure"

export const searchFigure=()=>{
  figure.forEach((f)=>{
    document.getElementById(f.figureid).addEventListener('click',()=>{
      document.getElementById('figura_Geometrica').innerHTML=f.render
     console.log(f.figureName)
   
    })
   })

}