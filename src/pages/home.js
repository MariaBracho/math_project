export const home=()=>{
  const view=`
  <main class="bg-bg_blue h-auto w-full  flex flex-col items-center font-nunito font-bold pt-10 md:h-screen"> 
    <div class="h-auto  w-80 md:h-screen md:w-full ">

    <header class="w-full flex flex-col items-center">
        <h1 class="text-4xl text-white">Matemáticas</h1>
        <p class="text-green_text text-3xl font-semibold" >Calcula y diviértete 🚀</p>
    </header>
    
    <div class="w-full h-auto flex flex-col items-center md:flex-row md:flex-wrap md:justify-around md:items-center md:h-4/6 ">
     
        <a href="#/Perimetro-area/">
          <section class="seccionBox  bg-boxOne">
            <p class="seccionBox__text">Perímetro y área</p>
            <p class="text-base seccionBox__text">Taller #1</p>
          </section>
        </a>
              
      <a href="#/Porcentajes-y-Descuentos/">
        <section class="seccionBox bg-boxTwo" >
        <p class="seccionBox__text">Precios y descuentos</p>  
        <p class="text-base seccionBox__text">Taller #2</p>    
       </section></a>
       
      <a href="#/Promedio-moda-mediana">
        <section class="seccionBox bg-boxThree">
          <p class="seccionBox__text">Promedio, Moda y mediana</p>
          <p class="text-base seccionBox__text">Taller #3</p>      
         </section>
      </a>
      <a href="#/Interes-simple-compuesto">
      <section class="seccionBox bg-green_text">
        <p class="seccionBox__text">Interés simple y compuesto</p>
        <p class="text-base seccionBox__text">Taller #4</p>      
       </section>
    </a>
      
      
    </div>
   

  </div>
  </main>
  
  
  
  
  
  `
  return view
}

