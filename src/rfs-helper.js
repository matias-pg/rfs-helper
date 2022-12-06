import rfs from "rfs/lib/rfs";

/**
 * @param {HTMLInputElement} input
 * @param {Object} obj
 */
function setInputValueToObj(input, obj) {
  const { name } = input;

  switch (input.type) {
    case "checkbox":
      return (obj[name] = input.checked);
    case "range":
    case "number":
      return (obj[name] = Number(input.value));
    default:
      return (obj[name] = input.value);
  }
}

/**
 * @param {Object} options
 * @param {HTMLFormElement} options.form
 * @param {HTMLFormElement} options.optionsForm
 * @param {HTMLElement} options.resultEl
 * @param {HTMLStyleElement} options.styleEl
 */
export function setupRfsHelper({ form, optionsForm, resultEl, styleEl }) {
  const state = {
    size: "2.5rem",
  };

  const options = {
    baseValue: 20,
    unit: "rem",
    breakpoint: 1200,
    breakpointUnit: "px",
    factor: 10,
    twoDimensional: false,
    unitPrecision: 5,
    remValue: 16,
    functionName: "rfs",
    enableRfs: true,
    mode: "min-media-query",
  };

  function renderResult() {
    // The rfs() function needs to be called for RFS to process it
    const valueToTransform = `rfs(${state.size})`;

    // A new instance needs to be created each time we update the options
    const rfsInstance = new rfs(options);

    const value = rfsInstance.value(valueToTransform);
    const fluidValue = rfsInstance.fluidValue(valueToTransform);
    const mediaQuery = rfsInstance.renderMediaQuery(valueToTransform);

    // Create the CSS that will be shown in the screen and added to a <style> tag
    const generatedCSS = `.element {
  font-size: ${fluidValue};
}

${mediaQuery} {
  .element {
    font-size: ${value};
  }
}`;

    styleEl.innerHTML = resultEl.innerHTML = generatedCSS;
  }

  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) =>
    input.addEventListener("input", ({ target }) => {
      setInputValueToObj(target, state);
      renderResult();
    })
  );

  const optionInputs = optionsForm.querySelectorAll("input");
  optionInputs.forEach((input) =>
    input.addEventListener("input", ({ target }) => {
      setInputValueToObj(target, options);
      renderResult();
    })
  );

  renderResult();
}
