export const buttons=()=>({
  perimeter:document.getElementById("perimeterButton"),
  area:document.getElementById("areaButton"),
  height:document.getElementById("heightButton")

})

export const renderButtons=()=>{
const view=
`
<div class="w-80 flex justify-between">
  <button id="perimeterButton" class="button" type="button">Perímetro</button>
  <button id="areaButton" class="button " type="button">Área</button>
</div>

`
return view

}

export const renderButtonIsosceles=()=>{
const view=
`
<div class="w-80 flex justify-between ">

<button id="heightButton" class="buttonSecundary" type="button">Altura</button>
<button id="perimeterButton" class="buttonSecundary" type="button">Perímetro</button>
<button id="areaButton" class="buttonSecundary" type="button">Área</button>
</div>
`
return view


}