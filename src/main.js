import { setupRfsHelper } from "./rfs-helper.js";
import "./style.css";

const form = document.forms.values;
const optionsForm = document.forms.options;
const resultEl = document.querySelector("#result");
const styleEl = document.querySelector("style#generated-style");

setupRfsHelper({ form, optionsForm, resultEl, styleEl });
