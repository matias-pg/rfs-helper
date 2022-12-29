import setupRfs from "./rfs";
import "./style.css";

const inputs = document.querySelectorAll("input");
const resultEl = document.querySelector("#result");
const styleEl = document.querySelector("#style");
const copyBtn = document.querySelector("#copy-btn");

const state = {
  size: "2.5rem",

  baseValue: 20,
  unit: "rem",
  breakpoint: 1200,
  breakpointUnit: "px",
  mode: "min-media-query",
};

setupRfs({
  inputs,
  resultEl,
  styleEl,
  copyBtn,

  state,
});
