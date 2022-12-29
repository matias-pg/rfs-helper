import rfs from "rfs/lib/rfs";

/**
 * @typedef {object} Options -
 * @property {string} size
 * @property {number} baseValue
 * @property {"rem"|"px"} unit
 * @property {number} breakpoint
 * @property {"rem"|"px"} breakpointUnit
 * @property {"min-media-query"|"max-media-query"} mode
 *
 * This is used to simulate a type from TypeScript.
 * TODO: Use TypeScript in this project pls.
 */

/**
 * Generates CSS using RFS.
 *
 * @param {Options} options Options to be passed to RFS
 * @returns {string} The CSS
 */
export function generateCSS(options) {
  // The rfs() PostCSS function needs to be called for RFS to process it
  const valueToTransform = `rfs(${options.size})`;

  // A new instance needs to be created each time we update the options
  const rfsInstance = new rfs(options);

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
