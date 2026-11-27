// ZIRO wallet.js - iCoin ONLY. NO Escrow.
let iCoin = 120;
// Phase 0: Force 120 on first load if old value 40 exists
let saved = localStorage.getItem('ziro_icoin');
if(saved === null || saved === '40'){ iCoin = 120; localStorage.setItem('ziro_icoin', '120'); }
else { iCoin = parseInt(saved); }
function updateCoinUI(){ document.querySelectorAll('#coinTop').forEach(el=>el.textContent=iCoin); }
document.addEventListener('DOMContentLoaded', updateCoinUI);
