import { triangle } from "./geometric_figures"
import { renderButtons } from "../utils/perimeterArea/perimeterAreaButton"

export const perimeterAndArea=()=>{
  let view=`
   <div class="bg-bg_blue h-screen w-full  flex flex-col items-center md:justify-center">
     <div class="h-screen  w-80 md:h-[95%] md:shadow-xl md:shadow-[#1B404B] md:w-2/4 md:rounded-2xl md:flex flex-col items-center ">

   
    <nav class="nav">
     <a href="#/home"><img src="./../../assets/images/arrow.svg" alt="menu" ></a> 
    </nav>

    <header class="mt-5 text-center">
      <p class="text-green_text text-3xl font-bold">Figuras geométricas</p>
      <p class="text-white text-2xl">Calcular perímetro y área </p>
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

      <section class="mt-10  w-80">
        <p class="text-white">Resultado: <span  id="resultOfPerimetreAndArea" >0</span></p>
      </section>

      <section class="h-32 w-full flex justify-around items-end" id="buttons">
        ${renderButtons()}
      </section>

  </div>
   </div>
  
  
  `
  return view
}


















