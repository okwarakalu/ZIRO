// ZIRO CORE - Shared brain. All pages use ZIRO.go(), ZIRO.pay(), ZIRO.save()
// Do NOT put Wallet / Jobs / Chat logic here. Those live in their own js/ files.
window.ZIRO = window.ZIRO || {};

(function(){
  // Load or create user state - survives refresh
  let Z = JSON.parse(localStorage.getItem('ZIRO_V4') || '{}');
  if(!Z.bal) Z = {
    bal: 120,
    jobs: [
      { n:'Ada Okafor', s:'Driver • Abuja', m:92, r:'4.9' },
      { n:'Fatima Bello', s:'Designer • Enugu', m:95, r:'4.8' }
    ],
    workers: [
      { n:'Segun O.', s:'Barber • Abuja', r:'4.9', p:'From ₦5,000' },
      { n:'Chinedu O.', s:'Plumber • Abuja', r:'4.8', p:'From ₦8,000' },
      { n:'Ada O.', s:'Cleaner • Abuja', r:'5.0', p:'From ₦6,000' }
    ],
    hist: []
  };

  function save(){ localStorage.setItem('ZIRO_V4', JSON.stringify(Z)); updateBalance(); }
  function updateBalance(){ document.querySelectorAll('[data-bal]').forEach(e => e.textContent = Z.bal); }
  function get(){ return Z; }

  // Pay with iCoin - single check for whole app
  function pay(amount, label){
    if(Z.bal < amount){
      alert('Not enough iCoin. Balance: ' + Z.bal + ' iCoin. Buy iCoin first.');
      go('wallet'); return false;
    }
    Z.bal -= amount;
    Z.hist.unshift(label + ' -' + amount + ' iCoin');
    save(); return true;
  }

  // Show one page, hide others - no 404, no page reload
  function go(p){
    document.querySelectorAll('.page').forEach(x => x.classList.remove('on'));
    const el = document.getElementById('p-' + p);
    if(el) el.classList.add('on');
    window.scrollTo(0,0);
  }

  // Load pages/*.html into shell - one file = one screen
  async function loadPage(name){
    try{
      const r = await fetch('pages/' + name + '.html');
      if(!r.ok) return;
      const html = await r.text();
      const el = document.getElementById('p-' + name);
      if(el) el.innerHTML = html;
    }catch(e){}
  }

  async function init(){
    await Promise.all(['home','search','post','wallet','office','chat'].map(loadPage));
    save();
    // Re-render lists if those modules exist
    if(window.ZIRO.renderHome) window.ZIRO.renderHome();
    if(window.ZIRO.renderWallet) window.ZIRO.renderWallet();
    go('home');
  }

  // SOS / CHIOMA are placeholders here - real code lives in sos.js / chioma.js
  // This prevents "function not found" if those files load late
  function sos(){ if(window.ZIRO.doSOS) return window.ZIRO.doSOS(); alert('SOS - Loading...'); }
  function chioma(){ if(window.ZIRO.doChioma) return window.ZIRO.doChioma(); alert('CHIOMA - Loading...'); }

  Object.assign(window.ZIRO, { get, save, updateBalance, pay, go, init, sos, chioma });
})();
