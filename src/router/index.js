import {home} from './../pages/home'
import {gethash} from './../utils/gethash'
import {perimeterAndArea} from './../pages/perimeterAndArea'
import { searchFigure } from '../utils/searchFigure'
import { percentagesAndDiscount } from '../pages/percentagesAndDiscounts'
import { priceWithDiscountformula } from '../utils/discountFormula'
import { promedio_moda_mediana } from '../pages/promedio_Moda_mediana'
import  {mediaAritmeticaFormula} from '../utils/promedioFormula'



const routes = ()=>([
  {
    name:'perimetro y area',
    render:perimeterAndArea,
    hash:'Perimetro-area',
    operation:searchFigure,

},
{
  name:'home',
  render:home,
  hash:''||'home',
},
{
name:'porcentajes y descuentos',
render:percentagesAndDiscount,
hash:'Porcentajes-y-Descuentos',
operation:priceWithDiscountformula
},
{
name:'promedio, moda y mediana',
render:promedio_moda_mediana,
hash:'Promedio-moda-mediana',
operation:mediaAritmeticaFormula
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

  console.log(hash)
  homeid.innerHTML=hash.render()
  
  if(hash.hash!='home'){
    hash.operation()
   
  }

}

export const initRouter = () => {
  window.addEventListener(`load`,router)
  window.addEventListener('hashchange',router)
}


