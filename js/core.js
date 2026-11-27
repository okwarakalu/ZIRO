// ZIRO CORE - Shared brain, all pages use this
let Z = JSON.parse(localStorage.getItem('ZIRO_V4') || '{"bal":120,"jobs":[],"hist":[]}');
function save(){ localStorage.setItem('ZIRO_V4', JSON.stringify(Z)); updateBalance(); }
function updateBalance(){ document.querySelectorAll('[data-bal]').forEach(e => e.textContent = Z.bal); }
function pay(amount, label){
  if(Z.bal < amount){ alert('Not enough iCoin. Balance: '+Z.bal+' iCoin'); showPage('wallet'); return false; }
  Z.bal -= amount; Z.hist.unshift(label+' -'+amount+' iCoin'); save(); return true;
}
function showPage(p){ document.querySelectorAll('.page').forEach(x=>x.classList.remove('on')); const el=document.getElementById('p-'+p); if(el) el.classList.add('on'); window.scrollTo(0,0); }
