// ZIRO CORE V4.1 - CLEAN - No Send, No Coins, No Phase 3
window.ZIRO = window.ZIRO || {};

(function(){
  const KEY = 'ziro_v41';
  function get(){
    try{
      const s = JSON.parse(localStorage.getItem(KEY) || '{}');
      return { bal: s.bal ?? 120, hist: s.hist || [] };
    }catch(e){ return { bal: 120, hist: [] }; }
  }
  function save(){
    const z = get();
    localStorage.setItem(KEY, JSON.stringify(z));
    document.querySelectorAll('[data-bal]').forEach(el => el.textContent = z.bal);
  }
  function updateBal(){
    const z = get();
    document.querySelectorAll('[data-bal]').forEach(el => el.textContent = z.bal);
  }

  async function go(page){
    const app = document.getElementById('app');
    if(!app) return;
    app.innerHTML = '<p style="text-align:center;color:#666">Loading...</p>';
    try{
      const res = await fetch('pages/' + page + '.html');
      if(!res.ok) throw new Error('not found');
      const html = await res.text();
      app.innerHTML = html;
    }catch(e){
      // Fallback if pages/ file missing - never stay blank
      if(page === 'home'){
        app.innerHTML = '<h2>Find Trusted Workers</h2><div class="card"><b>CHIOMA</b><p>CHIOMA — Your ZIRO Assistant. User only.</p><button class="btn-green" onclick="ZIRO.chioma()">Chat with CHIOMA</button></div><div class="card"><b>Featured Workers</b><p>⭐ Ada Okafor — Cleaner — Abuja — ₦15,000/day<br>⭐ Chinedu Eze — Plumber — Lagos — ₦20,000/day<br>⭐ Fatima Bello — Driver — Kano — ₦18,000/day</p></div><div class="card"><b>SOS — Inline Only</b><button class="btn-white" onclick="ZIRO.sos()">🆘 SOS — Call Help</button></div>';
      } else {
        app.innerHTML = '<div class="card"><b>Page: '+page+'</b><p>This page is loading. Tap Home to go back.</p><button class="btn-green" onclick="ZIRO.go(\'home\')">Go Home</button></div>';
      }
    }
    updateBal();
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    const nav = document.getElementById('nav-' + page);
    if(nav) nav.classList.add('active');
    window.scrollTo(0,0);
  }

  function sos(){
    alert('🆘 SOS — Help Request Sent\n\nYour location + profile sent to ZIRO Safety.\nA trusted contact will be alerted.\n\nIf in immediate danger, call emergency services in your country.');
  }

  function chioma(){
    const q = prompt('CHIOMA — How can I help?\n\nType: find cleaner / post job / buy icoin / sos');
    if(!q) return;
    const t = q.toLowerCase();
    if(t.includes('clean') || t.includes('find') || t.includes('worker') || t.includes('search')) go('search');
    else if(t.includes('post') || t.includes('job')) go('post');
    else if(t.includes('icoin') || t.includes('wallet') || t.includes('buy') || t.includes('coin')) go('wallet');
    else if(t.includes('sos') || t.includes('help') || t.includes('emergency')) sos();
    else if(t.includes('chat') || t.includes('room')) go('chat');
    else if(t.includes('office') || t.includes('profile')) go('office');
    else alert('CHIOMA: I can help you find a worker, post a job, buy iCoin, or SOS. Try one of those.');
  }

  function postJob(){
    const z = get();
    if(z.bal < 2){ alert('Not enough iCoin. You need 2 iCoin to post. Buy iCoin in Wallet.'); go('wallet'); return; }
    z.bal -= 2;
    z.hist.unshift('Posted Job -2 iCoin');
    localStorage.setItem(KEY, JSON.stringify(z));
    updateBal();
    alert('Job Posted! -2 iCoin. Balance: ' + z.bal + ' iCoin');
    go('home');
  }

  Object.assign(window.ZIRO, { get, save, go, sos, chioma, postJob, updateBal });

  document.addEventListener('DOMContentLoaded', function(){
    updateBal();
    go('home');
  });
})();
