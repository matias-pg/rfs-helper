import setupRfs from "./rfs";
import "./style.css";

const form = document.querySelector("form");
const resultEl = document.querySelector("#result");
const styleEl = document.querySelector("#style");
const copyBtn = document.querySelector("#copy-btn");

const initialSize = new URLSearchParams(window.location.search).get("size");
if (initialSize) {
  form.elements.namedItem("size").value = initialSize;
}

setupRfs({
  form,

  resultEl,
  styleEl,
  copyBtn,
});
