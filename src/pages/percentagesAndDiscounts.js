export const percentagesAndDiscount=()=>{
const view=
`
  <div class="bg-bg_blue h-screen w-full  flex flex-col items-center md:justify-center ">

  <main class="h-screen  w-80 pt-6 md:h-[95%]  md:w-2/4 md:rounded-2xl md:shadow-xl md:shadow-[#1B404B]">
    
  <nav class="nav">
      <a href="#/home"><img src="./../../assets/images/arrow.svg" alt="menu"></a>
    </nav>

    <div class="text-center mt-5 md:px-14">
      <p class=" text-green_text text-2xl font-bold">Porcentajes y descuentos</p>
    </div>

    <div class="grid grid-rows-4 gap-4 items-center place-content-center h-2/3 mt-5">

      <div>
        <p class="text-boxTwo ">Precio del producto $</p>
        <input  id="price" type="number" class="inputSecundary">
      </div>

     <div>
       <p class="text-boxTwo  ">Descuento %</p>
       <input id="discount" type="number" class="inputSecundary">
     </div>

     <div class="text-white">
       <p>El precio con el decuento es: <span id="discountResult"> 0 $</span> </p>
     </div>

     <div>
      <button id="buttonDiscount" class="button">Precio final</button>
     </div>
      
    </div>

  </main>

</div>



`
return view
}