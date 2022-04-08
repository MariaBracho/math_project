import { figure } from "../utils/listofFigure.js"

export const perimetroArea=()=>{
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
           <div><img id="1" src="./../../assets/images/Rectangle.svg" alt="" ></div>
           <div><img id="2" src="../../assets/images/Ellipse 1.svg" alt=""></div>
           <div><img id="3" src="../../assets/images/Polygon 1.svg" alt=""></div>
         </div>

        </div>
        <section  id="figura_Geometrica">
          <div class="mt-8 h-32">
        <p class="text-white pl-36">Introduce los datos</p>
        <div class="flex justify-between">
          <img class="h-20 w-20" src="./../../assets/images/Rectangle.svg" alt="">
        
          <div class="flex items-center">
            <label class="text-white h-8" for="l">L</label>
            <input class="text-white h-8 w-32 border-green-400 border-b-4 mx-3 bg-transparent outline-none" type="number">
            <span class="text-white h-8">cm</span>
          </div>
        </div>
      </div>
        </section>  

      <section class="my-6">
        <p class="text-white">Resultado: <span id="resultofPerimetroArea"></span></p>
      </section>

      <section class="w-full flex justify-between">
        <button class="w-36 h-11 bg-white rounded-xl" type="button">Perimetro</button>
        <button class="w-36 h-11 bg-white rounded-xl" type="button">Area</button>

      </section>

  </div>
   </div>
  
  
  `

  return view
}


















