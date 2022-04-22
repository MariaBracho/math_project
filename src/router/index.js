import {home} from './../pages/home'
import {gethash} from './../utils/gethash'
import {perimeterAndArea} from './../pages/perimeterAndArea'
import { searchFigure } from './../utils/perimeterArea/searchFigure'
import { percentagesAndDiscount } from '../pages/percentagesAndDiscounts'
import { priceWithDiscountformula } from './../utils/porcentagesAndDescount/discountFormula'
import { promedio_moda_mediana } from '../pages/promedio_Moda_mediana'
import  {onclick} from './../utils/promedioModaMediana/promedioFormula'
import { interesSimpleCompuesto } from '../pages/interesSimpleCompuesto'
import { interestFormula } from '../utils/interesSimpleCompuesto/formulaInteres'



const routes = ()=>([
  {
    render:perimeterAndArea,
    hash:'Perimetro-area',
    operation:searchFigure,
},
{
  render:home,
  hash:''||'home',
},
{
render:percentagesAndDiscount,
hash:'Porcentajes-y-Descuentos',
operation:priceWithDiscountformula
},
{
render:promedio_moda_mediana,
hash:'Promedio-moda-mediana',
operation:onclick
},
{
render:interesSimpleCompuesto,
hash:'Interes-simple-compuesto',
operation:interestFormula
}


]
)

export const router = () => {
  const homeid=document.getElementById("root")
  homeid.innerHTML=home()

  let hash=routes().find((e)=>{
    let currentHash=gethash()
    return e.hash==currentHash
  })

  
  homeid.innerHTML=hash.render()
  
  if(hash.hash!='home'){
    hash.operation()
   
  }

}

export const initRouter = () => {
  window.addEventListener(`load`,router)
  window.addEventListener('hashchange',router)
}


