// js/app.js - ZIRO BUTTONS - V9 - REAL SEARCH
function hireNow(name){
  alert('You want to hire ' + (name || 'Musa A.') + '.\n\nNext: Unlock Contact to see his phone, or Chat to agree price.\n\nZIRO does NOT hold job money. You pay worker directly.');
}
function unlockContact(){
  const ok = confirm('Unlock Contact • 5 iCoin\n\nUnlock phone number for 5 iCoin?');
  if(ok){
    let coin = Number(localStorage.getItem('ziro_coin') || 120);
    if(coin < 5){ alert('Not enough iCoin. You have ' + coin + ' iCoin. Buy iCoin in My Office.'); return; }
    coin -= 5; localStorage.setItem('ziro_coin', coin);
    document.querySelectorAll('[data-coin]').forEach(e => e.textContent = coin + ' iCoin');
    alert('Contact Unlocked ✅\n\nPhone: 0803-XXX-XXXX\nNew Balance: ' + coin + ' iCoin');
  }
}
function sosEmergency(){
  const ok = confirm('! SOS • Emergency\n\nDo you need urgent help now? Tap OK to call for help.');
  if(ok){ alert('SOS Activated (DEMO) 🚨\n\nIn real app: Your location will be sent to nearest verified worker + trusted contact.'); }
}
function openPost(){ window.location.href = 'post.html'; }
function navTo(page){
  if(page === 'My Office'){ window.location.href = 'office.html'; return; }
  if(page === 'Home'){ window.location.href = 'index.html'; return; }
  if(page === 'Search'){ window.location.href = 'index.html'; document.getElementById('searchInput')?.focus(); return; }
  if(page === 'Chat'){ window.location.href = 'chat.html'; return; }
  alert('Going to: ' + page + '\n\nThis page comes next.');
}
function quickSearch(q){
  const input = document.getElementById('searchInput');
  if(input) input.value = q;
  searchJobs();
}
function searchJobs(){
  const input = document.getElementById('searchInput');
  const q = (input ? input.value : '').toLowerCase().trim();
  const cards = document.querySelectorAll('.worker-card');
  let shown = 0;
  cards.forEach(c => {
    const hay = (c.getAttribute('data-search') || '').toLowerCase();
    const match = !q || hay.includes(q);
    c.style.display = match ? 'block' : 'none';
    if(match) shown++;
  });
  const no = document.getElementById('noResult');
  if(no) no.style.display = shown === 0 ? 'block' : 'none';
  const count = document.getElementById('resultCount');
  if(count) count.textContent = '• ' + shown + ' worker' + (shown === 1 ? '' : 's') + (q ? ' for "' + q + '"' : '');
  }
