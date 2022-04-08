import { circulo } from "../pages/figuras_geometricas";
import { cuadrado } from "../pages/figuras_geometricas";
import { triangulo } from "../pages/figuras_geometricas";


export const figure=[
  {
    figureid:1,
    figureName:'cuadrado',
    render:cuadrado(),
  },
  {
    figureid:2,
    figureName:'circulo',
    render:circulo(),
  },
  {
    figureid:3,
    figureName:'triangulo',
    render:triangulo(),
  }


  ]