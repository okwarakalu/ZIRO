// ZIRO V8 - Brain - Works Offline, No Backend Needed
function getUser(){ return JSON.parse(localStorage.getItem('ziro_user')||'null'); }
function saveUser(u){ localStorage.setItem('ziro_user', JSON.stringify(u)); }
function getCoins(){ return parseInt(localStorage.getItem('ziro_coins')||'120'); }
function setCoins(n){ localStorage.setItem('ziro_coins', n); updateCoinDisplay(); }
function updateCoinDisplay(){
  document.querySelectorAll('[data-coins]').forEach(el=> el.textContent = getCoins() + ' Coins');
}
function getJobs(){ return JSON.parse(localStorage.getItem('ziro_jobs')||'[]'); }
function saveJob(job){
  let jobs = getJobs(); jobs.unshift(job);
  localStorage.setItem('ziro_jobs', JSON.stringify(jobs));
  alert('Job Posted! Workers in Abuja will see it.');
  location.href='jobs.html';
}
function go(page){ location.href = page; }

// Auto-run on every page
document.addEventListener('DOMContentLoaded', ()=>{
  updateCoinDisplay();
  // Show user name if logged in
  let u = getUser();
  if(u){
    document.querySelectorAll('[data-username]').forEach(el=> el.textContent = u.name);
  }
});
