import {circle } from "../pages/geometric_figures";
import {square } from "../pages/geometric_figures";
import {triangle } from "../pages/geometric_figures";
import { triangleFormula } from "./formulas";
import { squareFormula } from "./formulas";
import { circleFormula } from "./formulas";
import { triangleIsosceles } from "../pages/geometric_figures";
import { isoscelesTriangleFormula } from "./formulas";
import { renderButtonIsosceles } from "./perimeterAreaButton";
import { renderButtons } from "./perimeterAreaButton";


export const figure=()=>{
  const allFigure=[
  {
    figureid:3,
    figureName:'square',
    render:square(),
    formula:squareFormula,
    button:renderButtons
  },
  {
    figureid:2,
    figureName:'circle',
    render:circle(),
    formula:circleFormula,
    button:renderButtons
  },
  {
    figureid:1,
    figureName:'triangle',
    render:triangle(),
    formula:triangleFormula,
    button:renderButtons

  },
  {
    figureid:4,
    figureName:'triangleIsoceles',
    render:triangleIsosceles(),
    formula:isoscelesTriangleFormula,
    button:renderButtonIsosceles
  },
    

  ]
  return allFigure

}