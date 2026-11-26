// js/office.js - Boost + iCoin - Shared Balance
let myCoin = Number(localStorage.getItem('ziro_coin') || 120);
function saveCoin(){ localStorage.setItem('ziro_coin', myCoin); }
function showBalance(){
  const els = document.querySelectorAll('[data-coin]');
  els.forEach(e => e.textContent = myCoin + ' iCoin');
}
function buyBoost(period, cost){
  if(myCoin < cost){
    alert('Not enough iCoin.\nYou have ' + myCoin + ' iCoin, need ' + cost + '.\n\nTap Buy iCoin first.');
    return;
  }
  const ok = confirm('Boost ' + period + ' for ' + cost + ' iCoin?');
  if(ok){
    myCoin -= cost; saveCoin(); showBalance();
    alert('BOOST ACTIVATED ✅\n\n' + period + ' Boost ON for Plumber.\nYou now have ' + myCoin + ' iCoin left.\nYou will appear at TOP of Labour Market.');
  }
}
function buyCoin(amount, naira){
  const ok = confirm('Buy ' + amount + ' iCoin for ₦' + naira.toLocaleString() + '?\n\n(DEMO) In real app, Paystack will open here.');
  if(ok){
    myCoin += amount; saveCoin(); showBalance();
    alert('Payment Successful (DEMO) ✅\n\n+' + amount + ' iCoin added.\nNew Balance: ' + myCoin + ' iCoin');
  }
}
document.addEventListener('DOMContentLoaded', showBalance);
