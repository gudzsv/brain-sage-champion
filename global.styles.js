const variablesStyles = '@import "./src/scss/common/_vars.scss"';
const breakpointsStyles = '@import "./src/scss/common/_breakpoints.scss"';
const mixinsStyles = '@import "./src/scss/common/_mixins.scss"';
const resetStyles = '@import "./src/scss/common/_reset.scss"';
const baseStyles = '@import "./src/scss/common/_base.scss"';

const styles = [
  variablesStyles,
  breakpointsStyles,
  //   colorsStyles,
  mixinsStyles,
  resetStyles,
  baseStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
