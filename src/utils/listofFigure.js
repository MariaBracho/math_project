import {circle } from "../pages/geometric_figures";
import {square } from "../pages/geometric_figures";
import {triangle } from "../pages/geometric_figures";
import { triangleFormula } from "./formulas";
import { squareFormula } from "./formulas";
import { circleFormula } from "./formulas";

export const figure=()=>{
  const allFigure=[
  {
    figureid:1,
    figureName:'square',
    render:square(),
    formula:squareFormula
  },
  {
    figureid:2,
    figureName:'circle',
    render:circle(),
    formula:circleFormula
  },
  {
    figureid:3,
    figureName:'triangle',
    render:triangle(),
    formula:triangleFormula
  }
  ]
  return allFigure

}