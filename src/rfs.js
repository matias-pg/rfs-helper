import { generateCSS } from "./utils/css";
import { setInputValueToObj } from "./utils/form";

export default function setupRfs({
  inputs,
  resultEl,
  styleEl,
  copyBtn,
  state,
}) {
  function renderResult(state) {
    const generatedCSS = generateCSS(state);

    // Show the generated CSS and set it to a <style> tag to preview the result
    styleEl.innerHTML = resultEl.innerHTML = generatedCSS;
  }

  renderResult(state);

  // When the inputs change, update the state and render the result
  inputs.forEach((input) =>
    input.addEventListener("input", function () {
      setInputValueToObj(this, state);
      renderResult(state);
    })
  );

  // Copy the CSS to the clipboard when the copy button is clicked
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(resultEl.textContent);
  });
}
