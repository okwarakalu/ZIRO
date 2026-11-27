// ZIRO Auth - Simple user for demo
function ziroGetUser(){
  try{ return JSON.parse(localStorage.getItem('ziro_current_user') || 'null'); }catch(e){ return null; }
}
function ziroSetUser(name){
  const u = {name:name, icoin: (typeof ziroGetIcoin==='function' ? ziroGetIcoin() : 50)};
  localStorage.setItem('ziro_current_user', JSON.stringify(u));
  return u;
}
function ziroLogout(){
  localStorage.removeItem('ziro_current_user');
  window.location.href = 'login.html';
}
