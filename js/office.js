// js/office.js - Boost + iCoin
let myCoin = 120;

function buyBoost(period, cost){
  if(myCoin < cost){
    alert('Not enough iCoin.\nYou have ' + myCoin + ' iCoin, need ' + cost + '.\n\nTap Buy iCoin first.');
    return;
  }
  const ok = confirm('Boost ' + period + ' for ' + cost + ' iCoin?');
  if(ok){
    myCoin -= cost;
    alert('BOOST ACTIVATED ✅\n\n' + period + ' Boost ON for Plumber.\nYou now have ' + myCoin + ' iCoin left.\nYou will appear at TOP of Labour Market.');
  }
}

function buyCoin(amount, naira){
  const ok = confirm('Buy ' + amount + ' iCoin for ₦' + naira.toLocaleString() + '?\n\n(DEMO) In real app, Paystack will open here.');
  if(ok){
    myCoin += amount;
    alert('Payment Successful (DEMO) ✅\n\n+' + amount + ' iCoin added.\nNew Balance: ' + myCoin + ' iCoin');
  }
          }
