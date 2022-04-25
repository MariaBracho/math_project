import { triangle } from "./geometric_figures"
import { renderButtons } from "../utils/perimeterArea/perimeterAreaButton"

export const perimeterAndArea=()=>{
  let view=`
   <div class="containe-page-primary">
     <div class="container-page">

   
    <nav class="nav">
     <a href="#/home"><img src="./../../assets/images/arrow.svg" alt="menu" ></a> 
    </nav>

    <header class="mt-5 text-center w-80">
      <p class="text-green_text text-3xl font-bold ">Figuras geométricas</p>
      <p class="text-white  text-2xl ">Calcular perímetro y área </p>
    </header>
    
        <div class="w-full flex justify-center">
         <div class="h-20 w-64 bg-grey rounded-xl flex justify-around items-center mt-7">
          <div><img class="cursor-pointer" id="3" src="../../assets/images/square.svg" alt="square"></div>
           <div><img class="cursor-pointer" id="1" src="./../../assets/images/triangle.svg" alt="triangle" ></div>
           <div><img class="cursor-pointer" id="2" src="../../assets/images/circle.svg" alt="circle"></div>
           <div><img class="cursor-pointer" id="4" src="./../../assets/images/triangle.svg" alt="triangle"></div>
         </div>

        </div>
        <section  id="geometric_figure" class="md:w-80 ">
         ${triangle()}
        </section>  

        <div class="mt-14">
        <p class="text-white relative">El resultado:</p>
        <div class="w-64 h-auto border-2 mt-3 border-gray-500 rounded-lg mx-auto">

           <p class="text-white ml-3" id="resultOfPerimetreAndArea">0</p>

        </div>
        </div>

      <section class="absolute bottom-0 mb-9" id="buttons">
        ${renderButtons()}
      </section>

  </div>
   </div>
  
  
  `
  return view
}


















