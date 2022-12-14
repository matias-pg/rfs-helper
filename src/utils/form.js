/**
 * Puts the input value to the object, with the input's name being the key.
 *
 * The value is set according to the input type, in the following way:
 * - Checkboxes: the value is whether the checkbox is checked or not
 * - Range & number inputs: the value is the numeric value of the input
 * - Other inputs: the value is the raw (string) input value
 *
 * @param {HTMLInputElement} input
 * @param {Object} obj
 */
export function setInputValueToObj(input, obj) {
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
