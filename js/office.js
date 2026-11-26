// js/office.js - Clean Boost - V3
let myCoin = Number(localStorage.getItem('ziro_coin') || 120);
function saveCoin(){ localStorage.setItem('ziro_coin', myCoin); }
function showBalance(){
  document.querySelectorAll('[data-coin]').forEach(e => e.textContent = myCoin + ' iCoin');
}
function getBoostPrice(days){
  const prices = {1:10, 2:18, 3:25, 4:32, 5:38, 6:44, 7:50, 14:90, 30:160};
  if(prices[days]) return prices[days];
  return Math.round(days * 6.8);
}
function updateBoostPrice(){
  const sel = document.getElementById('boostDays');
  const box = document.getElementById('customBoostBox');
  const btn = document.getElementById('boostBtn');
  if(!sel || !btn) return;
  let days, cost;
  if(sel.value === 'custom'){
    box.style.display = 'block';
    days = Number(document.getElementById('customDays').value || 0);
    if(!days){ btn.textContent = 'Activate Boost'; return; }
    cost = getBoostPrice(days);
  } else {
    box.style.display = 'none';
    days = Number(sel.value);
    cost = getBoostPrice(days);
  }
  btn.textContent = 'Activate Boost • ' + cost + ' iCoin';
}
function buyCustomBoost(){
  const sel = document.getElementById('boostDays');
  let days = sel.value === 'custom' ? Number(document.getElementById('customDays').value || 0) : Number(sel.value);
  if(!days || days < 1){ alert('Please pick how many days you want to Boost.'); return; }
  if(days > 90){ alert('Max Boost is 90 days.'); return; }
  const cost = getBoostPrice(days);
  if(myCoin < cost){ alert('Not enough iCoin.\nYou have ' + myCoin + ' iCoin, need ' + cost + '.\n\nTap Buy iCoin first.'); return; }
  const ok = confirm('Boost ' + days + ' Day' + (days === 1 ? '' : 's') + ' for ' + cost + ' iCoin?');
  if(ok){
    myCoin -= cost; saveCoin(); showBalance();
    alert('BOOST ACTIVATED ✅\n\n' + days + ' Days Boost ON.\nBalance: ' + myCoin + ' iCoin');
  }
}
function buyBoost(period, cost){ buyCustomBoost(); }
function buyCoin(amount, naira){
  const ok = confirm('Buy ' + amount + ' iCoin for ₦' + naira.toLocaleString() + '?\n\n(DEMO) In real app, Paystack will open here.');
  if(ok){ myCoin += amount; saveCoin(); showBalance(); alert('Payment Successful (DEMO) ✅\n\n+' + amount + ' iCoin added.\nNew Balance: ' + myCoin + ' iCoin'); }
}
document.addEventListener('DOMContentLoaded', ()=>{ showBalance(); updateBoostPrice(); });
