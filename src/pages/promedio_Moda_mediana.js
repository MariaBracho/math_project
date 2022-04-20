export const promedio_moda_mediana=()=>{
const view=
`
<div class="container-page">
  
  <div class="absolute w-80">
    <nav class="w-full mt-8 flex items-center justify-start">
    <a href="#/home"><img src="./../../assets/images/arrow.svg" alt="menu" ></a> 
   </nav>
  <header>
     <p class="text-center text-green_text text-3xl font-bold">Promedio, moda y mediana</p>    
  </header></div>
    

    <div class="h-screen w-80  grid place-items-center">
      <main class="grid items-center grid-rows-3 ">
        <div class="flex flex-col items-center">
          <label for="input" class="text-white text-center">Introce los valores separados con coma (,)</label>
          <input type="text" value="" placeholder="Ej: 23,65,10,8" name="input" id="promedioModaMediaValue" class="input w-64 mt-6 ">
        </div>
       <div class="flex justify-between">
         <button class="buttonSecundary" id="modaButton">Moda</button>
         <button class="buttonSecundary" id="mediaButton">Media</button>
         <button class="buttonSecundary" id="medianaButton">Mediana</button>
       </div>
       <div>
         <p class="text-white relative">El resultado:</p>
         <div class="w-64 h-auto border-2 mt-3 border-gray-500 rounded-lg mx-auto">

            <p class="text-white ml-3" id="resulValuePromedio">0</p>

         </div>
       </div>
      </main>
    </div>


</div>


`
return view
   
}