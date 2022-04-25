export const promedio_moda_mediana=()=>{
const view=

`
<div class="containe-page-primary">
<div class="container-page ">


<nav class="nav">
<a href="#/home"><img src="./../../assets/images/arrow.svg" alt="menu" ></a> 
</nav>

<header class="mt-5 text-center w-80">
 <p class="text-green_text text-3xl font-bold">Promedio, moda y mediana</p>
</header>

   <div class="mt-14">
   <div class="flex flex-col items-center">
          <label for="input" class="text-center text-boxTwo ">Introduce los valores separados con una coma (,)</label>
          <input type="text" value="" placeholder="Ej: 23,65,10,8" name="input" id="promedioModaMediaValue" class="input w-64 mt-6  ">
   </div>

   <div class="mt-14">
   <p class="text-white relative">El resultado:</p>
   <div class="w-64 h-auto border-2 mt-3 border-gray-500 rounded-lg mx-auto">

      <p class="text-white ml-3" id="resulValueAverage">0</p>

   </div>
   </div>

   </div>

 <section class="absolute bottom-0 mb-12" id="buttons">
         
         <div class=" w-80 flex justify-around flex-wrap">

         <button class="buttonSecundary" id="modeButton">Moda</button>
         <button class="buttonSecundary" id="averageButton">Media</button>
         <button class="buttonSecundary" id="medianButton">Mediana</button>
         <button class="buttonSecundary mt-4" id="geometricMeanButton">Media Geométrica</button>
       
         </div>
         
 </section>

</div>
</div>

`

return view
   
}