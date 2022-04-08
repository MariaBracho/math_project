export const triangulo=()=>{
  const figure =`
  <div class="mt-8 h-32" >
  <p class="text-white pl-36">Introduce los datos</p>
  <div class="flex justify-between">
    <img class="h-20 w-20" src="./../../assets/images/Polygon 1.svg" alt="">
  
    <div class="flex flex-col ">
      <div>
        <label class="text-white h-8" for="l">L</label>
        <input id="" class="text-white h-8 w-32 border-green-400 border-b-4 mx-3 bg-transparent outline-none" type="number">
        <span class="text-white h-8">cm</span>
      </div>
      
      <div>
        <label class="text-white h-8" for="l">L</label>
        <input class="text-white h-8 w-32 border-green-400 border-b-4 mx-3 bg-transparent outline-none" type="number">
        <span class="text-white h-8">cm</span>
      </div>

      <div>
        <label class="text-white h-8" for="B">B</label>
        <input class="text-white h-8 w-32 border-green-400 border-b-4 mx-3 bg-transparent outline-none" type="number">
        <span class="text-white h-8">cm</span>
      </div>

      <div>
        <label class="text-white h-8" for="H">H</label>
        <input class="text-white h-8 w-32 border-green-400 border-b-4 mx-3 bg-transparent outline-none" type="number">
        <span class="text-white h-8">cm</span>
      </div>
    </div>
  </div>
</div>
  
  `
  return figure
}

export const cuadrado=()=>{
  const figure=`
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
  
  `
  return figure
}

export const circulo=()=>{
  const figure=`
  <div class="mt-8 h-32">
        <p class="text-white pl-36">Introduce los datos</p>
        <div class="flex justify-between">
          <img class="h-20 w-20" src="./../../assets/images/Ellipse 1.svg" alt="">
        
          <div class="flex items-center">
            <label class="text-white h-8" for="R">R</label>
            <input class="text-white h-8 w-32 border-green-400 border-b-4 mx-3 bg-transparent outline-none" type="number">
            <span class="text-white h-8">cm</span>
          </div>
        </div>
      </div>
  
  `
  return figure
}