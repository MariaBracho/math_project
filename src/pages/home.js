const home=()=>{
  const view=`
  <main class="bg-bg_blue h-auto w-full font-nunito font-bold pt-10"> 
    <header class="w-full flex flex-col items-center">
        <h1 class="text-4xl text-white">Matemáticas</h1>
        <p class="text-green_text text-3xl font-semibold" >Calcula y diviertete 🚀</p>
    </header>
    <div class="w-full h-auto flex flex-col items-center">
     
        <a href="#/Perimetro-area/">
          <section class="seccionBox bg-boxOne">
            <p class="seccionBox__text">Périmetro y área</p>
          </section>
        </a>
              
      <a href="">
        <section class="seccionBox bg-boxTwo" >
        <p class="seccionBox__text">Périmetro y área</p>      
       </section></a>
       
      <a href="">
        <section class="seccionBox bg-boxThree">
          <p class="seccionBox__text">Périmetro y área</p>      
         </section>
      </a>
      
      <a href="">
        <section class="seccionBox bg-boxFour">
          <p class="seccionBox__text">Perimetro y area</p>      
         </section>
      </a>
    </div>
   


  </main>
  
  
  
  
  `
  return view
}

export default home