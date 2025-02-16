// ==UserScript==
// @name         NH: Sort by seed
// @namespace    http://tampermonkey.net/
// @version      2025-02-16
// @description  Sort by seed
// @author       log1x0
// @match        https://newheaven.nl/index.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=newheaven.nl
// @grant        none
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
  let tbody = document.querySelector('.torrenttable > tbody');
  for (let i = 0; i < trs.length; i++) {
    tbody.deleteRow(1);
  }
  for (let i = 0; i < trs.length; i++) {
    let r = tbody.insertRow(i + 1);
    r.innerHTML = trs[i].innerHTML;
  }
})();
