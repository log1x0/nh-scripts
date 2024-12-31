// ==UserScript==
// @name         Userscript for NH
// @namespace    https://openuserjs.org/users/log1x0
// @version      0.0.13
// @description  Userscript for NH
// @author       log1x0
// @license      MIT
// @grant        none
// @match        https://newheaven.nl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=newheaven.nl
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip-utils/0.1.0/jszip-utils.min.js
// ==/UserScript==

// ==OpenUserJS==
// @author log1x0
// ==/OpenUserJS==

let links = [
  ["files/imagecache/63726_pepe-001.gif", 28, 28],
  ["files/imagecache/63733_pepe-095.gif", 28, 28],
  ["files/imagecache/63726_pepe-002.png", 28, 28],
  ["files/imagecache/63726_pepe-003.gif", 28, 28],
  ["files/imagecache/63726_pepe-004.gif", 28, 28],
  ["files/imagecache/63733_pepe-096.gif", 35, 34],
  ["files/imagecache/63726_pepe-005.png", 25, 25],
  ["files/imagecache/63733_pepe-119.gif", 32, 32],
  ["files/imagecache/63726_pepe-006.png", 28, 28],
  ["files/imagecache/63726_pepe-007.png", 28, 28],
  ["files/imagecache/63726_pepe-008.png", 28, 28],
  ["files/imagecache/63726_pepe-009.gif", 28, 27],
  ["files/imagecache/63726_pepe-010.png", 28, 28],
  ["files/imagecache/63726_pepe-011.gif", 28, 28],
  ["files/imagecache/63726_pepe-012.png", 28, 28],
  ["files/imagecache/63726_pepe-013.png", 28, 28],
  ["files/imagecache/63733_pepe-080.png", 28, 28],
  ["files/imagecache/63733_pepe-081.png", 28, 28],
  ["files/imagecache/63733_pepe-082.png", 28, 28],
  ["files/imagecache/62587_3x-imageonline.co-4087141.gif", 28, 28],
  ["files/imagecache/56594_peepoFinger.png", 28, 28],
  ["files/imagecache/63733_pepe-097.gif", 32, 32],
  ["files/imagecache/63733_pepe-098.gif", 32, 32],
  ["files/imagecache/63733_pepe-100.gif", 32, 32],
  ["files/imagecache/63733_pepe-088.gif", 35, 34],
  ["files/imagecache/63733_pepe-089.gif", 30, 32],
  ["files/imagecache/63733_pepe-087.gif", 44, 44],
  ["files/imagecache/63733_pepe-091.gif", 30, 32],
  ["files/imagecache/63733_pepe-092.gif", 30, 32],
  ["files/imagecache/63733_pepe-093.gif", 30, 32],
  ["files/imagecache/63726_pepe-014.gif", 21, 28],
  ["files/imagecache/63726_pepe-015.png", 28, 28],
  ["files/imagecache/63726_pepe-016.gif", 28, 28],
  ["files/imagecache/63726_pepe-017.gif", 28, 28],
  ["files/imagecache/63726_pepe-018.gif", 28, 28],
  ["files/imagecache/63726_pepe-019.png", 28, 28],
  ["files/imagecache/63733_pepe-099.gif", 35, 34],
  ["files/imagecache/63726_pepe-020.gif", 28, 28],
  ["files/imagecache/63726_pepe-021.gif", 28, 28],
  ["files/imagecache/63733_pepe-101.gif", 32, 32],
  ["files/imagecache/63733_pepe-102.gif", 32, 32],
  ["files/imagecache/63733_pepe-110.gif", 32, 32],
  ["files/imagecache/63733_pepe-111.gif", 32, 32],
  ["files/imagecache/63733_pepe-120.gif", 32, 32],
  ["files/imagecache/63733_pepe-112.gif", 32, 32],
  ["files/imagecache/63733_pepe-113.gif", 32, 32],
  ["files/imagecache/63733_pepe-114.gif", 32, 32],
  ["files/imagecache/63733_pepe-115.gif", 32, 32],
  ["files/imagecache/63733_pepe-116.gif", 32, 32],
  ["files/imagecache/63733_pepe-118.gif", 32, 32],
  ["files/imagecache/63733_pepe-103.gif", 32, 32],
  ["files/imagecache/63733_up.gif", 32, 32],
  ["files/imagecache/63733_pepe-105.gif", 32, 32],
  ["files/imagecache/63733_pepe-106.gif", 32, 32],
  ["files/imagecache/63733_pepe-107.gif", 32, 32],
  ["files/imagecache/63733_pepe-108.gif", 32, 32],
  ["files/imagecache/63726_pepe-022.gif", 28, 28],
  ["files/imagecache/63726_pepe-023.gif", 28, 28],
  ["files/imagecache/63726_pepe-024.gif", 28, 28],
  ["files/imagecache/63726_pepe-025.gif", 28, 28],
  ["files/imagecache/63726_pepe-026.gif", 28, 28],
  ["files/imagecache/56594_pepePoint.png", 32, 32],
  ["files/imagecache/56594_bigPls.gif", 28, 28],
  ["files/imagecache/63726_smilie_wet_175.gif", 46, 24],
  ["files/imagecache/63733_pepe-069.gif", 50, 46],
  ["files/imagecache/63733_pepe-070.gif", 28, 28],
  ["files/imagecache/63733_pepe-072.gif", 48, 30],
  ["files/imagecache/63733_pepe-074.gif", 40, 25],
  ["files/imagecache/63733_pepe-075.gif", 18, 18],
  ["files/imagecache/63733_pepe-076.gif", 41, 40],
  ["files/imagecache/63733_pepe-077.gif", 26, 18],
  ["files/imagecache/63733_pepe-078.gif", 36, 29],
  ["files/imagecache/63733_Groehl.gif", 42, 32],
  ["files/imagecache/63733_pepe-094.gif", 36, 26],
  ["files/imagecache/63733_pepe-109.gif", 32, 32],
  ["files/imagecache/63733_pepe-121.gif", 32, 32],
  ["files/imagecache/63733_pepe-123.gif", 32, 32],
  ["files/imagecache/63733_pepe-124.gif", 32, 32],
  ["files/imagecache/63733_pepe-125.gif", 32, 32],
  ["files/imagecache/63733_pepe-126.gif", 32, 32],
  ["files/imagecache/63733_pepe-127.gif", 32, 32],
  ["files/imagecache/63733_pepe-128.gif", 32, 32],
  ["files/imagecache/63733_pepe-129.gif", 32, 32],
  ["files/imagecache/63733_pepe-130.gif", 32, 32],
  ["files/imagecache/63733_pepe-131.gif", 32, 32],
  ["files/imagecache/63733_pepe-132.gif", 32, 32],
  ["files/imagecache/63733_pepe-133.gif", 32, 32],
  ["files/imagecache/63733_pepe-134.gif", 32, 32],
  ["files/imagecache/63733_pepe-135.gif", 32, 32],
  ["files/imagecache/63733_pepe-136.gif", 32, 32],
  ["files/imagecache/63733_pepe-137.gif", 41, 36],
  ["files/imagecache/63733_pepe-117.gif", 32, 32],
  ["files/imagecache/56594_peepoCoffee.gif", 32, 32],
  ["files/imagecache/63733_pepe-139.gif", 32, 32],
  ["files/imagecache/63733_pepe-140.gif", 32, 32],
  ["files/imagecache/63733_pepe-141.gif", 32, 32],
  ["files/imagecache/63733_pepe-142.gif", 32, 32],
  ["files/imagecache/63733_pepe-143.gif", 32, 32],
  ["files/imagecache/63733_pepe-144.gif", 32, 32],
  ["files/imagecache/63733_pepe-145.gif", 32, 32],
  ["files/imagecache/63733_pepe-146.gif", 32, 32],
  ["files/imagecache/63733_pepe-147.gif", 32, 32],
  ["files/imagecache/63733_pepe-148.gif", 32, 32],
  ["files/imagecache/63733_pepe-149.gif", 32, 32],
  ["files/imagecache/63733_pepe-150.gif", 32, 32],
  ["files/imagecache/63733_pepe-151.gif", 32, 32],
  ["files/imagecache/63733_pepe-152.gif", 32, 32],
  ["files/imagecache/63733_pepe-153.gif", 32, 32],
  ["files/imagecache/63733_pepe-154.gif", 32, 32],
  ["files/imagecache/63733_pepe-155.gif", 32, 32],
  ["files/imagecache/63733_pepe-156.gif", 32, 32],
  ["files/imagecache/63733_pepe-158.gif", 32, 32],
  ["files/imagecache/63733_pepe-160.gif", 64, 64],
  ["files/imagecache/63733_pepe-161.gif", 64, 64],
  ["files/imagecache/63733_pepe-163.gif", 64, 64],
  ["files/imagecache/63733_pepe-164.gif", 64, 64],
  ["files/imagecache/63733_pepe-159.gif", 64, 64],
  ["files/imagecache/63837_piratenboot.gif", 140, 130],
  ["files/imagecache/60835_na6otob9r4t.gif", 23, 29],
  ["files/imagecache/60835_jo6a6witkjw.gif", 56, 29],
  ["files/imagecache/60835_brbngzd0q4c.gif", 96, 26],
  ["files/imagecache/63837_pirate.gif", 42, 42],
  ["files/imagecache/63837_coffeem.gif", 29, 30],
  ["files/imagecache/63837_yawnm.gif", 20, 23],
  ["files/imagecache/63837_pirate2.gif", 25, 25],
  ["files/imagecache/63837_wave2.gif", 26, 18],
  ["files/imagecache/63837_0579.gif", 34, 26],
  ["files/imagecache/63837_0581.gif", 31, 28],
  ["files/imagecache/63837_santa.gif", 20, 22],
  ["files/imagecache/63837_user%20delete.gif", 80, 80],
  ["files/imagecache/63837_97c4247b2d741ff6c721f26cda5a48ef.gif", 69, 46],
  ["files/imagecache/63837_rarschleppen.gif", 24, 42],
  ["files/imagecache/63837_2d2a5515902de4c05b1cx42.gif", 27, 24],
  ["files/imagecache/63837_rip.gif", 43, 34],
  ["files/imagecache/63837_censored.gif", 48, 18],
  ["files/imagecache/63837_0567.gif", 40, 30],
  ["files/imagecache/63837_whiteflag.gif", 54, 40],
  ["files/imagecache/63837_doppelbatsch.gif", 100, 50],
  ["files/imagecache/63837_explode.gif", 48, 112],
  ["files/imagecache/63837_hmmm.gif", 25, 23],
  ["files/imagecache/63837_0538.gif", 60, 55],
  ["files/imagecache/63837_furz.gif", 37, 25],
  ["files/imagecache/63837_e61196ed2593a051ea628db21e0c8d1f.gif", 90, 70],
  ["files/imagecache/63837_7b3cdb2918bc7511686ccfbd5ab0870c.gif", 66, 26],
  ["files/imagecache/60835_yovyor4rxqf.gif", 50, 40],
  ["files/imagecache/60835_am7sukwngj.gif", 188, 46],
  ["files/imagecache/60835_korx8xguvk2.gif", 153, 29],
  ["files/imagecache/60835_tdq5oxvc2d0.gif", 39, 29],
  ["files/imagecache/60835_5lb782jhyu5.gif", 234, 109],
  ["files/imagecache/60835_2qshsmhe3j9.gif", 58, 51],
  ["files/imagecache/60835_ouecny3owqv.gif", 48, 34],
  ["files/imagecache/60835_iv3q20c6fue.gif", 39, 22],
  ["files/imagecache/60835_o6qy11a0gnr.gif", 80, 60],
  ["files/imagecache/60835_hl3qylku3jn.gif", 76, 51],
  ["files/imagecache/60835_o6ujjd9fwic.gif", 68, 48],
  ["files/imagecache/60835_cmnjri326fn.gif", 41, 49],
  ["files/imagecache/60835_tg71teti0l9.gif", 35, 35],
  ["files/imagecache/60835_b3wecnal8r7.gif", 63, 60],
  ["files/imagecache/56594_Binoculars.gif", 69, 46],
  ["files/imagecache/60835_mwrel634yyk.gif", 60, 34],
  ["files/imagecache/60835_0eadb9tf3sj.gif", 27, 27],
  ["files/imagecache/63733_Kaffee-G%C3%A4hn.gif", 104, 64],
  ["files/imagecache/60835_uriwd79j509.gif", 136, 81],
  ["files/imagecache/60835_j1v404ijrbp.gif", 92, 45],
  ["files/imagecache/60835_m1l1my18m6u.gif", 48, 34],
  ["files/imagecache/60835_zntmbpn9kcd.gif", 118, 75],
  ["files/imagecache/60835_upkmua9u4zx.gif", 114, 44],
  ["files/imagecache/60835_krvlvl6n2di.gif", 97, 43],
  ["files/imagecache/60835_w7j8d2b27b8.gif", 98, 60],
  ["files/imagecache/60835_ha2xo4bmnw0.gif", 67, 62],
  ["files/imagecache/60835_4lfkh3dczw2.gif", 35, 30],
  ["files/imagecache/60835_4ycax4rze0t.gif", 74, 32],
  ["files/imagecache/60835_lvyj29uy41w.gif", 89, 40],
  ["files/imagecache/60835_qpscbjc8np1.gif", 120, 44],
  ["files/imagecache/60835_1ze6f5a9qv0.gif", 48, 51],
  ["files/imagecache/60835_6p7wagn8zb9.gif", 71, 53],
  ["files/imagecache/60835_rn3tshdb8tu.gif", 120, 100],
  ["files/imagecache/60835_ukvaf7lmnx0.gif", 64, 51],
  ["files/imagecache/60835_83yak1h0vun.gif", 43, 36],
  ["files/imagecache/60835_hase.gif", 74, 54],
  ["files/imagecache/60835_x7y3azegxgz.gif", 19, 18],
  ["files/imagecache/60835_gtfqbjst0pm.gif", 77, 30],
  ["files/imagecache/60835_ejfsvutvlev.gif", 47, 59],
  ["files/imagecache/60835_0foyaxkep1g.gif", 58, 40],
  ["files/imagecache/60835_5yg0xzhapod.gif", 86, 86],
  ["files/imagecache/60835_ufb3847f1hj.gif", 56, 34],
  ["files/imagecache/60835_mxk9y83rdq8.gif", 39, 37],
  ["files/imagecache/60835_qr9li65sh82.gif", 36, 42],
  ["files/imagecache/60835_57t3bptnxff.gif", 48, 38],
  ["files/imagecache/60835_l0rtjp29wvf.gif", 38, 43],
  ["files/imagecache/60835_9cyu4mtxve8.gif", 43, 39],
  ["files/imagecache/60835_o018f09hkfs.gif", 26, 22],
  ["files/imagecache/60835_kjcq2pi9lq6.gif", 45, 50],
  ["files/imagecache/63733_Bouncing_Kirby.gif", 28, 28],
  ["files/imagecache/63733_Gary.gif", 28, 28],
  ["files/imagecache/63733_Smoking.gif", 28, 28],
  ["files/imagecache/63733_spongbob_party.gif", 28, 28],
  ["files/imagecache/63733_Spongebob.gif", 28, 28],
  ["files/imagecache/56594_bu1zerWhat.jpg", 28, 28],
  ["files/imagecache/56594_YEP.png", 28, 28],
  ["files/imagecache/56594_BeerTime.gif", 28, 28],
  ["files/imagecache/56594_HYPERYump.gif", 28, 28],
  ["files/imagecache/56594_Beerge.gif", 28, 28],
  ["files/imagecache/56594_Sure.png", 28, 28],
  ["files/imagecache/56594_peepoPooPoo.gif", 28, 28],
  ["files/imagecache/63837_flieger.gif", 28, 28],
  ["files/imagecache/56594_SALAMI.gif", 28, 28],
  ["files/imagecache/56594_WeirdDude.png", 28, 28],
  ["files/imagecache/56594_NPC.jpg", 28, 28],
  ["files/imagecache/56594_PeepoEyeroll.gif", 28, 28],
  ["files/imagecache/56594_PeepoFinger.gif", 28, 32],
  ["files/imagecache/60835_6p7wagn8zb9.gif", 28, 32],
  ["files/imagecache/56594_NotFunny.gif", 28, 28],
  ["files/imagecache/56594_FLUTERS.gif", 28, 28],
  ["files/imagecache/60835_3xoj0z06cts.gif", 28, 28],
  ["files/imagecache/56594_peepoHug.gif", 28, 28],
  ["files/imagecache/62587_monkaStop.png", 28, 28],
  ["files/imagecache/56594_peepoGift.gif", 28, 28],
  ["files/imagecache/56594_peepoFAT.gif", 28, 28],
  ["files/imagecache/56594_peepoBike.gif", 28, 28],
  ["files/imagecache/56594_peepoAua.png", 28, 28],
  ["files/imagecache/56594_Bedge.png", 28, 28],
  ["files/imagecache/56594_MLADYGOODBYE.gif", 28, 28],
  ["files/imagecache/56594_PepeM.jpg", 28, 28],
  ["files/imagecache/56594_monkaSnap.gif", 28, 28],
  ["files/imagecache/63837_spam.gif", 28, 28],
  ["files/imagecache/56594_NotSure.jpg", 28, 28],
  ["files/imagecache/56594_PausersHype.gif", 28, 28],
  ["files/imagecache/56594_peepoSnowball.gif", 28, 28],
  ["files/imagecache/56594_monkaLaughLeave.gif", 28, 28],
  ["files/imagecache/63733_Duschen.gif", 28, 28],
  ["files/imagecache/63733_biber_wink.gif", 28, 28],
  ["files/imagecache/63733_wand.gif", 28, 28],
  ["files/imagecache/63733_Pizza.gif", 28, 28],
  ["files/imagecache/63733_Klatsch_PEPE.gif", 28, 28],
  ["files/imagecache/63733_pepe-hmm.gif", 28, 28],
  ["files/imagecache/63733_peepo-arrive-pepe-frog.gif", 28, 28],
  ["files/imagecache/63733_pepe-dance.gif", 28, 28],
  ["files/imagecache/63733_verflucht.gif", 28, 28],
  ["files/imagecache/63733_pepe-meme.gif", 28, 28],
  ["files/imagecache/63733_coffee-cobbee.gif", 28, 28],
  ["files/imagecache/63733_pepe-peppo.gif", 28, 28]
];

// Adjust this:
const scalar = 1.35;

// Don't adjust these:
const standardHeight = 550;
const newHeight = 1050;
const rowElements = 22;

let orgTable = null;

(function () {
  "use strict";
  if (getFirstSmiley()) {
    swapInput();
    removeHints();
    addPepe();
    addPepeSearch();
    addExcludeButton();
  }

  add_4k();
  addSwitchStyle();
  checkExcludeRegex();
})();

function swapInput() {
  let msg = document.querySelector("#message");
  let tbl = getNthParent(msg, 4);
  if (tbl != null) {
    let row1 = tbl.rows[tbl.rows.length - 2].cloneNode(true);
    tbl.deleteRow(tbl.rows.length - 2);
    let row2 = tbl.insertRow(-1);
    row2.innerHTML = row1.innerHTML;
  }
}

function removeHints() {
  let std = getFirstSmiley();
  let tbl = getNthParent(std, 7);
  if (tbl && tbl.nodeName == "TBODY" && tbl.rows.length >= 2) {
    tbl.rows[1].innerHTML = "<hr>";
  }
}

function addPepe() {
  initPepe();
  showPepe();
  hidePepe();
}

function initPepe() {
  if (orgTable == null) {
    let std = getFirstSmiley();
    let tbl = getNthParent(std, 4);
    if (tbl != null) {
      for (let i = 1; i <= 5; i++) {
        let r = tbl.rows[i];
        for (let j = 0; j < r.cells.length; j++) {
          let c = r.cells[j];
          let img = c.firstElementChild;
          if (img != null && img.tagName == "IMG") {
            img.style.width = "20px";
            img.style.height = "20px";
            c.style.textAlign = "center";
          }
        }
      }

      let c1 = tbl.rows[1].insertCell(-1);
      let c2 = tbl.rows[5].cells[30];
      c1.innerHTML = c2.innerHTML;

      orgTable = tbl.cloneNode(true);
    }

    initLinks();
  }
}

function getWidth(link) {
  let w = link[1];
  let h = link[2];
  let f = scalar;
  if (w >= h) {
    f *= 20.0 / h;
  } else {
    f *= 20.0 / w;
  }
  return Math.round(w * f);
}

function getHeight(link) {
  let w = link[1];
  let h = link[2];
  let f = scalar;
  if (w >= h) {
    f *= 20.0 / h;
  } else {
    f *= 20.0 / w;
  }
  return Math.round(h * f);
}

function initLinks() {
  for (let i = 0; i < links.length; i++) {
    let e = links[i];
    e[0] = "https://newheaven.nl/" + e[0];
  }

  let w = rowElements;
  let h = Math.ceil(links.length / w);

  while (links.length < w * h) {
    // Placeholder img (transparent):
    links.push(["data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", 18, 18]);
  }

  links.sort(function (a, b) {
    return getWidth(a) - getWidth(b);
  });
  let newLinks = [];
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      let idx = j * h + i;
      if (idx < links.length) {
        newLinks.push(links[idx]);
      }
    }
  }

  let newLinks2 = [];
  while (newLinks.length) {
    newLinks2.push(newLinks.splice(0, w));
  }
  links = newLinks2;
}

function getFirstSmiley() {
  return document.querySelector('[title=":)"]');
}

function showPepe() {
  let std = getFirstSmiley();
  let tb = getNthParent(std, 3);
  if (tb != null) {
    let newRows = [];
    let title_index = 1;
    for (let i = 0; i < links.length; i++) {
      let row_links = links[i];
      tb.appendChild(document.createElement("tr"));
      let tr = document.createElement("tr");
      for (let j = 0; j < row_links.length; j++) {
        let col_link = row_links[j];
        addTd(tr, col_link, title_index++, i + 1, j + 1);
      }
      tb.appendChild(tr);
      newRows.push(tr);
    }
    resizeTds(newRows);
    addSwitch(0);

    let ifr = window.top.document.querySelector('[name="shoutbox"]');
    if (ifr != null) {
      ifr.setAttribute("height", newHeight);
    }
  }
}

function hidePepe() {
  if (orgTable != null) {
    let std = getFirstSmiley();
    let tbl = getNthParent(std, 4);
    if (tbl != null) {
      tbl.innerHTML = orgTable.innerHTML;
      addSwitch(1);

      let ifr = window.top.document.querySelector('[name="shoutbox"]');
      if (ifr != null) {
        ifr.setAttribute("height", standardHeight);
      }
    }
  }
}

function getNthParent(elem, i) {
  if (elem == null) {
    return null;
  }
  if (i <= 0) {
    return elem;
  }
  return getNthParent(elem.parentNode, i - 1);
}

function addTd(tr, link, title_index, row_index, col_index) {
  let title = pad(title_index, 3) + "_r" + pad(row_index, 2) + "_c" + pad(col_index, 2) + "_" + link[0].substring(link[0].lastIndexOf("/") + 1);

  let td = document.createElement("td");
  let img = document.createElement("img");
  td.style.textAlign = "center";
  td.style.verticalAlign = "middle";
  img.src = link[0];
  img.width = getWidth(link);
  img.height = getHeight(link);
  img.setAttribute("onclick", "setTag('[IMG]" + link[0] + "[/IMG]');");
  img.title = title;
  td.appendChild(img);
  tr.appendChild(td);
}

function addSwitch(mode) {
  let std = getFirstSmiley();
  let tbl = getNthParent(std, 4);
  if (tbl != null) {
    let rows = tbl.rows;
    let r = rows[5];
    while (r.cells.length > 30) {
      r.deleteCell(-1);
    }
    let c = r.insertCell(-1);

    let a = document.createElement("a");
    a.href = "#";
    a.style.color = "#DDCCBB";
    if (mode == 0) {
      a.text = "Close Pepe";
      a.addEventListener("click", hidePepe);
    } else {
      a.text = "Pepe...";
      a.addEventListener("click", showPepe);
    }
    c.appendChild(a);
  }
}

function resizeTds(rows) {
  let max = 30;
  for (let i = 0; i < rows.length; i++) {
    let r = rows[i];
    while (r.cells.length < max) {
      r.insertCell(-1);
    }
    r.cells[rowElements - 5].colSpan = 2;
    r.cells[rowElements - 4].colSpan = 2;
    r.cells[rowElements - 3].colSpan = 2;
    r.cells[rowElements - 2].colSpan = 3;
    r.cells[rowElements - 1].colSpan = 5;
  }
}

function addPepeSearch() {
  let comic = document.querySelector('input[value="Comic"]');
  let div = getNthParent(comic, 1);
  if (div != null) {
    let input = document.createElement("input");
    input.id = "pepe-search";
    input.name = "pepe-search";
    input.type = "text";
    input.placeholder = "Search Pepe...";
    input.addEventListener("input", pepeSearchOnChange, false);
    div.appendChild(input);
  }
}

function pad(num, size) {
  num = num.toString();
  while (num.length < size) {
    num = "0" + num;
  }
  return num;
}

function pepeSearchOnChange() {
  let text = document.getElementById("pepe-search").value;
  if (text == "download") {
    console.log("download");
    let zip = new JSZip();
    let count = 0;
    let zipFilename = "pepe-v1.zip";
    let urls = [];
    for (let i = 0; i < links.length; i++) {
      for (let j = 0; j < links[i].length; j++) {
        if (!links[i][j][0].startsWith("data:image")) {
          urls.push(links[i][j][0]);
        }
      }
    }

    urls.forEach(function (url) {
      // loading a file and add it in a zip file
      JSZipUtils.getBinaryContent(url, function (err, data) {
        if (err) {
          throw err; // or handle the error
        }
        let filename = url.substring(url.lastIndexOf("/") + 1);
        filename = pad(count, 3) + "_" + filename;
        console.log("filename", filename);
        zip.file(filename, data, { binary: true });
        count++;
        if (count == urls.length) {
          zip.generateAsync({ type: "blob" }).then(function (content) {
            saveAs(content, zipFilename);
          });
        }
      });
    });
    return;
  }

  let imgs = document.getElementsByTagName("img");
  for (let i = 0; i < imgs.length; i++) {
    let e = imgs[i];
    if (e.hasAttribute("src") && e.hasAttribute("title")) {
      if (text == "" || e.getAttribute("title").toLocaleLowerCase().indexOf(text) >= 0) {
        e.style.opacity = "1.0";
      } else {
        e.style.opacity = "0.25";
      }
    }
  }
}

function add_4k() {
  document.querySelectorAll("img").forEach((e) => {
    if (e.src == "https://newheaven.nl/images/categories/9/2_109.gif") {
      e.src = "https://newheaven.nl/files/imagecache/63726_29907_2160p.png";
    }
    if (e.src == "https://newheaven.nl/images/categories/9/4_110.gif") {
      e.src = "https://newheaven.nl/files/imagecache/63726_29907_2160p_TV.png";
    }
  });
}

function addExcludeButton() {
  let comic = document.querySelector('input[value="Comic"]');
  let div = getNthParent(comic, 1);
  if (div != null) {
    let input = document.createElement("input");
    input.id = "exclude-button";
    input.name = "exclude-button";
    input.type = "button";
    input.value = "Exclude";
    input.onclick = function () {
      let excludeRegex = prompt("Exclude contains regex (case insensitive):", localStorage.excludeRegex || "mst$");
      if (excludeRegex != null) {
        localStorage.excludeRegex = excludeRegex;
      } else {
        localStorage.excludeRegex = "";
      }
    };
    div.appendChild(input);
  }
}

function checkExcludeRegex() {
  let excludeRegex = localStorage.excludeRegex;
  if (excludeRegex != null && excludeRegex != "") {
    let re = new RegExp(excludeRegex, "i");
    let body = document.querySelector("html > body > table:nth-of-type(2) > tbody");
    if (body) {
      for (let i = 0; i < body.rows.length; ) {
        let element = body.rows[i].innerText.trim();
        if (re.test(element)) {
          body.deleteRow(i);
        } else {
          i++;
        }
      }
    }
  }
}

function addSwitchStyle() {
  if (!localStorage.shouldStyleSet) {
    // init:
    localStorage.shouldStyleSet = 0;
  }

  let select = document.querySelector('select[name="theme"]');
  if (select != null) {
    let opt = document.createElement("option");
    opt.value = 9;
    opt.innerHTML = "Custom by Logi";
    select.onchange = styleClick;
    select.appendChild(opt);
    if (localStorage.shouldStyleSet == 1) {
      select.value = 9;
    }
  }

  if (localStorage.shouldStyleSet == 1) {
    setStyle();
  }
}

function styleClick() {
  let select = document.querySelector('select[name="theme"]');
  if (localStorage.shouldStyleSet && select != null && select.value == 9) {
    localStorage.shouldStyleSet = 0;
    select.value = 1;
    document.detailbox.submit();
    localStorage.shouldStyleSet = 1;
    select.value = 9;
    setStyle();
  } else {
    localStorage.shouldStyleSet = 0;
    document.detailbox.submit();
  }
}

function setStyle() {
  // choose your background color:
  let color1 = "#454545";

  let color2 = "LightGray";
  let color3 = "#DDCCBB";

  document.body.style.backgroundColor = color1;
  document.querySelectorAll(".column1, .column2").forEach(function (e) {
    e.style.background = color1;
  });
  document.querySelectorAll("td").forEach(function (e) {
    e.style.color = color2;
  });
  document.querySelectorAll("a, font").forEach(function (e) {
    e.style.color = color3;
  });
  document.querySelectorAll(".user_class, .vip_class").forEach(function (e) {
    e.style.color = color3;
  });
  document.querySelectorAll(".framecorner, .framebar").forEach(function (e) {
    e.style.backgroundImage = "none";
  });

  // uncomment this, if the font size should be increased:
  //document.querySelectorAll("font, td").forEach(function (e) { e.style.fontSize = "9pt"; });
}
