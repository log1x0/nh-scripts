// ==UserScript==
// @name         New Userscript BTF Advent
// @description  New Userscript BTF Advent
// @namespace    https://github.com/log1x0/nh-scripts
// @updateURL    https://github.com/log1x0/nh-scripts/raw/refs/heads/master/javascript/btf-advent.user.js
// @downloadURL  https://github.com/log1x0/nh-scripts/raw/refs/heads/master/javascript/btf-advent.user.js
// @supportURL   https://github.com/log1x0/nh-scripts/issues
// @version      1.0.0
// @author       log1x0
// @license      MIT
// @grant        none
// @match        https://bittorrentfiles.me/xmas2025.php
// @icon         https://bittorrentfiles.me/favicon.ico
// ==/UserScript==

(function () {
  "use strict";
  let img = null;
  let tileData = new Array();
  let oldData = new Array();
  if (localStorage.getItem("tileData")) {
    oldData = localStorage.getItem("tileData");
  }
  let imgs = document.getElementsByTagName("img");
  for (let a of imgs) {
    if (a.getAttribute("src").startsWith("/pic/xmas2025/")) {
      img = a;
      break;
    }
  }
  let areas = document.getElementsByTagName("area");
  for (let b of areas) {
    b.removeAttribute("style");
    b.removeAttribute("tabindex");
    let c = b.getAttribute("coords").split(",");
    if (oldData.length == 0 || oldData.includes(c)) {
      tileData.push(c);
    }
  }
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let imageObj = new Image();
  imageObj.src = img.getAttribute("src");
  canvas.width = 900;
  canvas.height = 530;
  let w = imageObj.width;
  let h = imageObj.height;
  let sizer = Math.min(canvas.width / w, canvas.height / h);
  ctx.drawImage(imageObj, 0, 0, w, h, 0, 0, w * sizer, h * sizer);
  for (let c of tileData) {
    ctx.strokeStyle = "rgb(255,0,0)";
    ctx.beginPath();
    ctx.rect(c[0], c[1], c[2] - c[0], c[3] - c[1]);
    ctx.stroke();
  }
  img.parentElement.appendChild(document.createElement("p"));
  img.parentElement.appendChild(canvas);
  localStorage.setItem("tileData", tileData);
})();
