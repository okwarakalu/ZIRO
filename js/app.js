// js/app.js - ZIRO BUTTONS - V8 - UPDATED WITH CHAT
// Makes Home buttons active

function hireNow(name){
  alert('You want to hire ' + (name || 'Musa A.') + '.\n\nNext: Unlock Contact to see his phone, or Chat to agree price.\n\nZIRO does NOT hold job money. You pay worker directly.');
}

function unlockContact(){
  const ok = confirm('Unlock Contact • 5 iCoin\n\nUnlock Musa A. phone number for 5 iCoin?');
  if(ok){
    alert('Contact Unlocked (DEMO) ✅\n\nPhone: 0803-XXX-XXXX\n\nIn real app, 5 iCoin will be deducted from your 120 iCoin.');
  }
}

function sosEmergency(){
  const ok = confirm('! SOS • Emergency\n\nDo you need urgent help now? Tap OK to call for help.');
  if(ok){
    alert('SOS Activated (DEMO) 🚨\n\nIn real app: Your location will be sent to nearest verified worker + trusted contact.');
  }
}

function openPost(){
  window.location.href = 'post.html';
}

function navTo(page){
  if(page === 'My Office'){ window.location.href = 'office.html'; return; }
  if(page === 'Home'){ window.location.href = 'index.html'; return; }
  if(page === 'Search'){ window.location.href = 'index.html'; return; }
  if(page === 'Chat'){ window.location.href = 'chat.html'; return; }
  alert('Going to: ' + page + '\n\nThis page comes next.');
}

function searchJobs(){
  const input = document.getElementById('searchInput');
  const q = input ? input.value : '';
  if(!q){
    alert('Type what you need: e.g. Plumber, Cleaner, Electrician');
  } else {
    alert('Searching for: ' + q + '\n\n(DEMO) Musa A. Plumber found in Wuse 2.');
  }
}
