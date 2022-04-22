export const interesSimpleCompuesto=()=>{
const view=
`
<div class="bg-bg_blue h-screen w-full  flex flex-col items-center md:justify-center ">

  <main class="h-screen  w-80 pt-6 md:h-[95%]  md:w-2/4 md:rounded-2xl md:shadow-xl md:shadow-[#1B404B]">
    <nav class="nav">
      <a href="#/home"><img src="./../../assets/images/arrow.svg" alt="menu"></a>
    </nav>

    <div class="text-center mt-5 md:px-14">
      <p class=" text-green_text text-2xl font-bold">Interés simple y compuesto</p>
    </div>

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

     <div class="text-white">
       <p>El interés a pagar es: <span id="InteresResult"> 0 </span> $</p>
     </div>

     <div class="flex justify-between" >

    <button id="buttonSimple" class="button w-28">Interés simple</button>
    <button id="buttonCompuesto" class="button w-28 leading-none">Interés compuesto</button>

     </div>
      
    </div>

  </main>

</div>


`
return view
}