// ==UserScript==
// @name         Userscript sort by seed for NH
// @description  Userscript sort by seed for NH
// @namespace    https://github.com/log1x0/nh-scripts
// @updateURL    https://github.com/log1x0/nh-scripts/raw/refs/heads/master/javascript/nh-sort.user.js
// @downloadURL  https://github.com/log1x0/nh-scripts/raw/refs/heads/master/javascript/nh-sort.user.js
// @supportURL   https://github.com/log1x0/nh-scripts/issues
// @version      1.0.0
// @author       log1x0
// @copyright    2024, log1x0
// @license      MIT
// @grant        none
// @match        https://newheaven.nl/index.php
// @icon         https://newheaven.nl/favicon.ico
// ==/UserScript==

(function () {
  "use strict";
  let trs = [];
  for (let i = 2; ; i++) {
    let tr = document.querySelector(`.torrenttable > tbody:nth-child(1) > tr:nth-child(${i})`);
    if (!tr) {
      break;
    }
    trs.push(tr);
  }
  trs.sort((a, b) => {
    let x = parseInt(a.cells[7].innerText) + parseInt(a.cells[8].innerText);
    let y = parseInt(b.cells[7].innerText) + parseInt(b.cells[8].innerText);
    return y - x;
  });
  let tbody = document.querySelector(".torrenttable > tbody");
  for (let i = 0; i < trs.length; i++) {
    tbody.deleteRow(1);
  }
  for (let i = 0; i < trs.length; i++) {
    let r = tbody.insertRow(i + 1);
    r.innerHTML = trs[i].innerHTML;
  }
})();
