import rfs from "rfs/lib/rfs";
import { setInputValueToObj } from "./utils/form";

import "./style.css";

const inputs = document.querySelectorAll("input");
const resultEl = document.querySelector("#result");
const styleEl = document.querySelector("#style");

const state = {
  size: "2.5rem",

  baseValue: 20,
  unit: "rem",
  breakpoint: 1200,
  breakpointUnit: "px",
  mode: "min-media-query",
};

function getCSSFromState() {
  // The rfs() PostCSS function needs to be called for RFS to process it
  const valueToTransform = `rfs(${state.size})`;

  // A new instance needs to be created each time we update the options
  const rfsInstance = new rfs(state);

  const value = rfsInstance.value(valueToTransform);
  const fluidValue = rfsInstance.fluidValue(valueToTransform);
  const mediaQuery = rfsInstance.renderMediaQuery(valueToTransform);

  return `.element {
  font-size: ${fluidValue};
}

${mediaQuery} {
  .element {
    font-size: ${value};
  }
}`;
}

function renderResult() {
  const generatedCSS = getCSSFromState();

  // Show the generated CSS and set it to a <style> tag to preview the result
  styleEl.innerHTML = resultEl.innerHTML = generatedCSS;
}

inputs.forEach((input) =>
  // When the inputs change, update the state and render the result
  input.addEventListener("input", function () {
    setInputValueToObj(this, state);
    renderResult();
  })
);

renderResult();
