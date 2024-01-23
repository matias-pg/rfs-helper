import { generateCSS } from "./utils/css";
import { getFormValue } from "./utils/form";

export default function setupRfs({ form, resultEl, styleEl, copyBtn }) {
  function renderResult() {
    const options = getFormValue(form);
    const generatedCSS = generateCSS(options);

    // Show the generated CSS and set it to a <style> tag to preview the result
    styleEl.innerHTML = resultEl.innerHTML = generatedCSS;
  }

  // Render the result on load and after an input changes
  renderResult();
  form.addEventListener("input", renderResult);

  // Copy the CSS to the clipboard when the copy button is clicked
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(resultEl.textContent);
  });
}
