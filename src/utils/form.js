/**
 * Gets the value of an input, transforming it according to the input's type
 * the following way:
 * - Checkboxes: the value is whether the checkbox is checked (boolean)
 * - Range & number inputs: the value is the numeric value of the input
 * - Other inputs: the value is the raw (string) input value
 *
 * @param {HTMLInputElement} input From where to get the value
 */
export function getInputValue(input) {
  // Add more cases when needed
  switch (input.type) {
    case "checkbox":
      return input.checked;
    case "number":
    case "range":
      return Number(input.value);
  }
  return input.value;
}

/**
 * Gets the value of the form as an object.
 *
 * @param {HTMLFormElement} form
 * @returns {Record<string, string | number | boolean>}
 */
export function getFormValue(form) {
  return [...form.elements].reduce((acc, input) => {
    // Prevent an unchecked radio from overriding the value of a checked one
    if (input.type === "radio" && !input.checked) return acc;
    return { ...acc, [input.name]: getInputValue(input) };
  }, {});
}
