export const buttons=()=>({
  perimeter:document.getElementById("perimeterButton"),
  area:document.getElementById("areaButton"),
  height:document.getElementById("heightButton")

})

export const renderButtons=()=>{
const view=
`

  <button id="perimeterButton" class="button" type="button">Perimetro</button>
  <button id="areaButton" class="button " type="button">Area</button>


`
return view

}

export const renderButtonIsosceles=()=>{
const view=
`
<div class="w-full flex justify-between">

<button id="heightButton" class="buttonSecundary" type="button">Height</button>
<button id="perimeterButton" class="buttonSecundary" type="button">Perimetro</button>
<button id="areaButton" class="buttonSecundary" type="button">Area</button>
</div>
`
return view


}