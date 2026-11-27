// ZIRO Wallet - iCoin Wallet
function ziroGetIcoin(){
  const raw = localStorage.getItem('ziro_icoin');
  if(raw === null || raw === '' || isNaN(Number(raw))){
    localStorage.setItem('ziro_icoin', '50');
    const hist = JSON.parse(localStorage.getItem('ziro_history') || '[]');
    if(!hist.length){ hist.push({ text: 'Welcome Bonus • +50 iCoin', time: 'Now' }); localStorage.setItem('ziro_history', JSON.stringify(hist)); }
    return 50;
  }
  return Number(raw);
}
function ziroSetIcoin(v){
  localStorage.setItem('ziro_icoin', String(v));
  try{ const u = JSON.parse(localStorage.getItem('ziro_current_user') || 'null'); if(u){ u.icoin = v; localStorage.setItem('ziro_current_user', JSON.stringify(u)); } }catch(e){}
}
function ziroAddIcoin(amount, text){ const bal = ziroGetIcoin() + amount; ziroSetIcoin(bal); ziroAddHistory(text || ('+'+amount+' iCoin')); return bal; }
function ziroSpendIcoin(amount, text){ const bal = ziroGetIcoin(); if(bal < amount) return false; ziroSetIcoin(bal - amount); ziroAddHistory(text || ('-'+amount+' iCoin')); return true; }
function ziroAddHistory(text){ const hist = JSON.parse(localStorage.getItem('ziro_history') || '[]'); const d = new Date(); hist.push({ text: text, time: d.getHours()+':'+String(d.getMinutes()).padStart(2,'0') }); localStorage.setItem('ziro_history', JSON.stringify(hist)); }
function ziroClaimFree(){ const bal = ziroGetIcoin(); if(bal > 0) return bal; ziroSetIcoin(50); ziroAddHistory('Free Bonus Restored • +50 iCoin'); return 50; }
// NEW: Price per iCoin - Set by GM / CEO in Admin Dashboard. Default ₦50 per coin.
function ziroGetCoinPrice(){ const p = Number(localStorage.getItem('ziro_coin_price') || '50'); return isNaN(p) || p<=0 ? 50 : p; }
function ziroSetCoinPrice(p){ localStorage.setItem('ziro_coin_price', String(p)); }
// NEW: Unique iCoin Wallet ID - for gifting
function ziroGetWalletId(){
  let id = localStorage.getItem('ziro_wallet_id');
  if(!id){ id = 'ZIRO-' + Math.floor(1000 + Math.random()*9000) + '-' + Math.floor(1000 + Math.random()*9000); localStorage.setItem('ziro_wallet_id', id); }
  return id;
}
function ziroGiftIcoin(toId, amount){
  if(!toId || amount < 1) return {ok:false, msg:'Enter recipient Wallet ID and amount.'};
  if(ziroGetWalletId() === toId.trim()) return {ok:false, msg:'You cannot gift to yourself.'};
  if(ziroGetIcoin() < amount) return {ok:false, msg:'Not enough iCoin to gift.'};
  ziroSpendIcoin(amount, 'Gifted '+amount+' iCoin to '+toId.trim());
  return {ok:true, msg:'Gifted '+amount+' iCoin to '+toId.trim()+'!'};
}
