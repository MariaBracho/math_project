export const promedio_moda_mediana=()=>{
const view=
`
<div class="container-page md:flex justify-center items-center">
  <div class="w-80 md:h-[95%]  grid place-content-center md:shadow-xl md:shadow-[#1B404B] md:w-2/4 md:rounded-2xl">

  <div class="absolute w-80 md:w-2/4">
    <nav class="nav">
    <a href="#/home"><img src="./../../assets/images/arrow.svg" alt="menu" ></a> 
   </nav>
  <header>
     <p class="text-center text-green_text text-3xl font-bold">Promedio, moda y mediana</p>    
  </header></div>
    

    <div class="h-screen w-80  grid place-items-center">
      <main class="grid items-center grid-rows-3  h-2/4">
        <div class="flex flex-col items-center">
          <label for="input" class="text-boxTwo text-center">Introduce los valores separados con una coma (,)</label>
          <input type="text" value="" placeholder="Ej: 23,65,10,8" name="input" id="promedioModaMediaValue" class="input w-64 mt-6  ">
        </div>
       <div>
         <p class="text-white relative">El resultado:</p>
         <div class="w-64 h-auto border-2 mt-3 border-gray-500 rounded-lg mx-auto">

            <p class="text-white ml-3" id="resulValueAverage">0</p>

         </div>
         </div>
         
         <div class="flex justify-around flex-wrap">
         <button class="buttonSecundary" id="modeButton">Moda</button>
         <button class="buttonSecundary" id="averageButton">Media</button>
         <button class="buttonSecundary" id="medianButton">Mediana</button>
         <button class="buttonSecundary mt-4" id="geometricMeanButton">Media Geométrica</button>
         </div>
      
      </main>
    </div>
  </div>

</div>


`
return view
   
}