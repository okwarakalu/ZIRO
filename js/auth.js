// ZIRO Auth - Keeps user logged in across all pages
function ziroLogin(user){
  localStorage.setItem('ziro_current_user', JSON.stringify(user));
  localStorage.setItem('ziro_user_name', user.name);
  localStorage.setItem('ziro_user_role', user.role || 'customer');
  localStorage.setItem('ziro_user_phone', user.phone);
  if(user.skill) localStorage.setItem('ziro_user_skill', user.skill);
  if(user.city) localStorage.setItem('ziro_user_city', user.city);
  if(user.icoin !== undefined) localStorage.setItem('ziro_icoin', String(user.icoin));
}
function ziroLogout(){
  localStorage.removeItem('ziro_current_user');
  localStorage.removeItem('ziro_user_name');
  localStorage.removeItem('ziro_user_role');
  window.location.href = 'login.html';
}
function ziroGetUser(){
  try{ return JSON.parse(localStorage.getItem('ziro_current_user') || 'null'); }catch(e){ return null; }
}
function ziroIsLoggedIn(){
  return !!localStorage.getItem('ziro_current_user');
}
function ziroRequireLogin(){
  if(!ziroIsLoggedIn()){
    window.location.href = 'login.html';
    return false;
  }
  return true;
}
