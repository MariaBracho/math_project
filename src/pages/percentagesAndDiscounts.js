export const percentagesAndDiscount=()=>{
const view=
`
<div class="containe-page-primary">
<div class="container-page">
    
  <nav class="nav">
      <a href="#/home"><img src="./../../assets/images/arrow.svg" alt="menu"></a>
    </nav>

    <header class="mt-5 text-center">
      <p class="text-green_text text-3xl font-bold w-80">Porcentajes y descuentos</p>
    </header>
   

    <div class="grid grid-rows-4 gap-4 items-center place-content-center h-2/3 mt-5">

      <div>
        <p class="text-boxTwo ">Precio del producto $</p>
        <input  id="price" type="number" class="inputSecundary">
      </div>

     <div>
       <p class="text-boxTwo  ">Descuento %</p>
       <input id="discount" type="number" class="inputSecundary">
     </div>


     <div class="mt-14">
     <p class="text-white relative">El resultado:</p>
     <div class="w-64 h-auto border-2 mt-3 border-gray-500 rounded-lg mx-auto">
  
        <p class="text-white ml-3" id="discountResult">0</p>
  
     </div>
     </div>

     <div class="absolute bottom-0 mb-9">
      <button id="buttonDiscount" class="button  ">Precio final</button>
     </div>
      
    </div>

  </div>

</div>



`
return view
}