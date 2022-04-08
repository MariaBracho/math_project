import home from './../pages/home.js'
import gethash from './../utils/gethash.js'
import {perimetroArea} from './../pages/perimetroArea.js'
import { searchFigure } from '../utils/searchFigure.js'




const routes =[
  {
    name:'perimetro y area',
    render:perimetroArea,
    hash:'Perimetro-area',
    operation:searchFigure,
},
{
  name:'home',
  render:home,
  hash:''||'home',
}

]



export const router = () => {
  const homeid=document.getElementById("root")
  homeid.innerHTML=home()
  let hash=routes.find((e)=>{
    let currentHash=gethash()
    return e.hash==currentHash
  })

  console.log(hash)
  homeid.innerHTML=hash.render()
  
  if(hash.hash=='Perimetro-area'){
    hash.operation()
  }
 





}

export const initRouter = () => {
  window.addEventListener(`load`,router)
  window.addEventListener('hashchange',router)
}


