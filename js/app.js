// js/app.js - V11 - Loads Joined Workers + Search
function loadJoinedWorkers(){
  const list = document.getElementById('workerList');
  if(!list) return;
  const workers = JSON.parse(localStorage.getItem('ziro_workers') || '[]');
  workers.forEach(w => {
    const d = document.createElement('div');
    d.className = 'worker-card';
    d.setAttribute('data-search', (w.name + ' ' + w.skill + ' ' + w.city).toLowerCase());
    d.style.cssText = 'background:white; border-radius:16px; padding:16px; border:2px solid var(--gold);';
    d.innerHTML = '<span style="background:var(--green); color:white; padding:4px 8px; border-radius:999px; font-size:11px; font-weight:700;">✨ NEW WORKER</span><h3 style="margin:10px 0 4px;">' + w.name + ' ✓ New</h3><p style="margin:0; color:var(--muted); font-size:13px;">' + w.skill + ' • ' + w.city + '</p><p style="font-size:13px;">⭐ New • Available Now • ₦' + Number(w.price).toLocaleString() + ' / job</p><button class="btn-primary" onclick="hireNow(\'' + w.name + '\')">Hire Now</button><button class="btn-secondary" style="margin-top:8px;" onclick="unlockContact()">Unlock Contact • 5 iCoin</button>';
    list.appendChild(d);
  });
  const count = document.getElementById('resultCount');
  if(count && workers.length) count.textContent = '• ' + (12 + workers.length) + ' workers';
}
document.addEventListener('DOMContentLoaded', loadJoinedWorkers);
function hireNow(name){ alert('You want to hire ' + (name || 'Musa A.') + '.\n\nNext: Unlock Contact to see his phone, or Chat to agree price.\n\nZIRO does NOT hold job money. You pay worker directly.'); }
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
function sosEmergency(){ const ok = confirm('! SOS • Emergency\n\nDo you need urgent help now? Tap OK to call for help.'); if(ok){ alert('SOS Activated (DEMO) 🚨\n\nIn real app: Your location will be sent to nearest verified worker + trusted contact.'); } }
function openPost(){ window.location.href = 'post.html'; }
function navTo(page){ if(page === 'My Office'){ window.location.href = 'office.html'; return; } if(page === 'Home'){ window.location.href = 'index.html'; return; } if(page === 'Search'){ window.location.href = 'index.html'; return; } if(page === 'Chat'){ window.location.href = 'chat.html'; return; } alert('Going to: ' + page); }
function setActiveFilter(btn){ document.querySelectorAll('.filter-btn').forEach(b => { b.style.background = 'white'; b.style.color = 'black'; }); if(btn){ btn.style.background = 'var(--gold)'; btn.style.color = 'black'; btn.style.fontWeight = '700'; } }
function quickSearch(q, btn){ const input = document.getElementById('searchInput'); if(input) input.value = q; setActiveFilter(btn || document.querySelector('[data-filter="' + q + '"]')); searchJobs(); }
function searchJobs(){
  const input = document.getElementById('searchInput');
  const q = (input ? input.value : '').toLowerCase().trim();
  const cards = document.querySelectorAll('.worker-card');
  let shown = 0;
  cards.forEach(c => { const hay = (c.getAttribute('data-search') || '').toLowerCase(); const match = !q || hay.includes(q); c.style.display = match ? 'block' : 'none'; if(match) shown++; });
  const no = document.getElementById('noResult'); if(no) no.style.display = shown === 0 ? 'block' : 'none';
  const count = document.getElementById('resultCount'); if(count) count.textContent = '• ' + shown + ' worker' + (shown === 1 ? '' : 's') + (q ? ' for "' + q + '"' : '');
  const btn = document.querySelector('[data-filter="' + q + '"]'); if(btn) setActiveFilter(btn);
                                                                                                                  }
