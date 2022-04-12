export const triangle=()=>{
  const figure =`
  <div class="mt-8 h-32" >
  <p class="text-white pl-36">Introduce los datos</p>
  <div class="flex justify-between">
    <img class="h-20 w-20" src="./../../assets/images/triangle.svg" alt="">
  
    <div class="flex flex-col ">
      <div>
        <label class="label" for="l">L</label>
        <input min="0" id="rightSideOfTraingle" value="" class="input" type="number">
        <span class="label">cm</span>
      </div>
      
      <div>
        <label class="label" for="l">L</label>
        <input min="0" id="leftSideOfTraingle" value="" class="input" type="number">
        <span class="label">cm</span>
      </div>

      <div>
        <label class="label" for="B">B</label>
        <input min="0" id="baseOfTriangle" value="" class="input" type="number">
        <span class="label">cm</span>
      </div>

      <div>
        <label class="label" for="H">H</label>
        <input min="0" value="" id="triangleHeight" class="input" type="number">
        <span class="label">cm</span>
      </div>
    </div>
  </div>
</div>
  
  `
  return figure
}

export const square=()=>{
  const figure=`
  <div class="mt-8 h-32">
        <p class="text-white pl-36">Introduce los datos</p>
        <div class="flex justify-between">
          <img class="h-20 w-20" src="./../../assets/images/square.svg" alt="">
        
          <div class="flex items-center">
            <label class="label" for="l">L</label>
            <input min="0" value="" id="squareSide" class="input" type="number">
            <span class="label">cm</span>
          </div>
        </div>
      </div>
  
  `
  return figure
}

export const circle=()=>{
  const figure=`
  <div class="mt-8 h-32">
        <p class="text-white pl-36">Introduce los datos</p>
        <div class="flex justify-between">
          <img class="h-20 w-20" src="./../../assets/images/circle.svg" alt="">
        
          <div class="flex items-center">
            <label class="label" for="R">R</label>
            <input min="0"  value="" id="circleRadio" class="input" type="number">
            <span class="label">cm</span>
          </div>
        </div>
      </div>
  
  `
  return figure
}