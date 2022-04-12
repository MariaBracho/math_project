import { triangle } from "./geometric_figures"
export const perimeterAndArea=()=>{
  let view=`
   <div class="bg-bg_blue h-screen w-full flex flex-col items-center">
     <div class="h-screen w-80">

   
    <nav class="w-full mt-8 flex items-center justify-start">
     <a href="#/home"><img src="./../../assets/images/arrow.svg" alt="menu" ></a> 
    </nav>

    <header class="mt-5">
      <p class="text-green_text text-3xl font-bold">Figuras geometricas</p>
      <p class="text-white text-2xl">Calcular perimetro y area </p>
      <p class="text-white_text text-sm mt-7">Este es el primer taller de curso practico de javaScript</p>
    </header>
        <div class="w-full flex justify-center">
         <div class="h-20 w-64 bg-grey rounded-xl flex justify-around items-center mt-7">
           <div><img class="pointer" id="1" src="./../../assets/images/triangle.svg" alt="triangle" ></div>
           <div><img class="pointer" id="2" src="../../assets/images/circle.svg" alt="circle"></div>
           <div><img class="pointer" id="3" src="../../assets/images/square.svg" alt="square"></div>
         </div>

        </div>
        <section  id="geometric_figure">
         ${triangle()}
        </section>  

      <section class="my-6">
        <p class="text-white">Resultado: <span  id="resultOfPerimetreAndArea" >0</span></p>
      </section>

      <section class="w-full flex justify-between">
        <button id="perimeterButton" class="button" type="button">Perimetro</button>
        <button id="areaButton" class="button" type="button">Area</button>

      </section>

  </div>
   </div>
  
  
  `
  return view
}


















