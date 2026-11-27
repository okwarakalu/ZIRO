// ZIRO Wallet - FIXED - Free 50 iCoin bug
function ziroGetIcoin(){
  const raw = localStorage.getItem('ziro_icoin');
  // FIX: Check if key is missing, NOT Number(null) which is 0
  if(raw === null || raw === '' || isNaN(Number(raw))){
    localStorage.setItem('ziro_icoin', '50');
    // Add history only once
    const hist = JSON.parse(localStorage.getItem('ziro_history') || '[]');
    if(!hist.length){
      hist.push({ text: 'Welcome Bonus • +50 iCoin', time: 'Now' });
      localStorage.setItem('ziro_history', JSON.stringify(hist));
    }
    return 50;
  }
  return Number(raw);
}
function ziroSetIcoin(v){
  localStorage.setItem('ziro_icoin', String(v));
  try{
    const u = JSON.parse(localStorage.getItem('ziro_current_user') || 'null');
    if(u){ u.icoin = v; localStorage.setItem('ziro_current_user', JSON.stringify(u)); }
  }catch(e){}
}
function ziroAddIcoin(amount, text){
  const bal = ziroGetIcoin() + amount;
  ziroSetIcoin(bal);
  ziroAddHistory(text || ('+'+amount+' iCoin'));
  return bal;
}
function ziroSpendIcoin(amount, text){
  const bal = ziroGetIcoin();
  if(bal < amount) return false;
  ziroSetIcoin(bal - amount);
  ziroAddHistory(text || ('-'+amount+' iCoin'));
  return true;
}
function ziroAddHistory(text){
  const hist = JSON.parse(localStorage.getItem('ziro_history') || '[]');
  const d = new Date();
  hist.push({ text: text, time: d.getHours()+':'+String(d.getMinutes()).padStart(2,'0') });
  localStorage.setItem('ziro_history', JSON.stringify(hist));
}
// NEW: Restore free bonus if user is stuck at 0 with no history
function ziroClaimFree(){
  const bal = ziroGetIcoin();
  if(bal > 0) return bal;
  ziroSetIcoin(50);
  ziroAddHistory('Free Bonus Restored • +50 iCoin');
  return 50;
}
