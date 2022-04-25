export const interesSimpleCompuesto=()=>{
const view=
`
<div class="containe-page-primary">
<div class="container-page ">
    
<nav class="nav">
      <a href="#/home"><img src="./../../assets/images/arrow.svg" alt="menu"></a>
    </nav>

    <header class="mt-5 text-center">
      <p class="text-green_text text-3xl font-bold w-80">Interés simple y compuesto</p>
    </header>
   

    <div class="grid grid-rows-4 gap-4 items-center place-content-center h-2/3 mt-5">

      <div>
        <p class="text-boxTwo ">Monto a invertir $</p>
        <input  id="investment" type="number" class="inputSecundary">
      </div>

     <div>
       <p class="text-boxTwo" > Tasa de interés %</p>
       <input id="rate" type="number" class="inputSecundary">
     </div>

     <div>
       <p class="text-boxTwo  ">Lapso de tiempo (Años)</p>
       <input id="time" type="number" class=" inputSecundary">
     </div>

     <div class="">
     <p class="text-white relative">El resultado:</p>
     <div class="w-64 h-auto border-2 mt-3 border-gray-500 rounded-lg mx-auto">
  
        <p class="text-white ml-3" id="InteresResult">0</p>
  
     </div>
     </div>

     <section class="absolute bottom-0 mb-12" id="buttons">
       <div class="w-80 flex justify-between">
        <button id="buttonSimple" class="button w-28">Interés simple</button>
        <button id="buttonCompuesto" class="button w-28 leading-none">Interés compuesto</button>
       </div>
      
    </section>
     

  </div>

</div>


`
return view
}