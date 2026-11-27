// ZIRO Wallet - Real iCoin balance, shared by all pages
function ziroGetIcoin(){
  let v = Number(localStorage.getItem('ziro_icoin'));
  if(!v && v !== 0){
    // First time - give 50 free iCoin
    v = 50;
    localStorage.setItem('ziro_icoin', '50');
  }
  return v;
}
function ziroSetIcoin(v){
  localStorage.setItem('ziro_icoin', String(v));
  // Keep user object in sync
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
