export const percentagesAndDiscount=()=>{
const view=
`
  <div class="bg-bg_blue h-screen w-full  flex flex-col items-center">
  <main class="h-screen  w-80 pt-6">
    <nav>
      <a href="#/home"><img src="./../../assets/images/arrow.svg" alt="menu"></a>
    </nav>

    <div class="text-center mt-5">
      <p class=" text-green_text text-2xl font-bold">Porcentajes y descuentos</p>
      <p class=" text-white text-xl">Calcula el precio a pagar de tus productos con Descuentos</p>
    </div>

    <div class="grid grid-rows-4 gap-4 items-center place-content-center h-2/3 mt-5">

      <div>
        <p class="text-green_text">Precio del producto $</p>
        <input  id="price" type="number" class="text-white focus:ring-0 bg-transparent focus:border-gray-200 form-input rounded-xl">
      </div>

     <div>
       <p class="text-green_text ">Porcentaje del descuento %</p>
       <input id="discount" type="number" class=" text-white focus:ring-0 bg-transparent focus:border-gray-200 form-input rounded-xl ">
     </div>

     <div class="text-white">
       <p>El precio con el decuento es: <span id="discountResult"> </span> </p>
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