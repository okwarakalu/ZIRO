// ZIRO Notify System - Beautiful Popups
function ensureModal(){
  let m = document.getElementById('ziroModal');
  if(m) return m;
  m = document.createElement('div');
  m.id = 'ziroModal';
  m.style.cssText = 'display:none; position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:9999; align-items:center; justify-content:center; padding:20px;';
  m.innerHTML = '<div style="background:white; border-radius:18px; padding:22px; width:100%; max-width:340px; text-align:center; box-shadow:0 10px 30px rgba(0,0,0,0.3);"><h3 id="ziroModalTitle" style="margin:0 0 8px; font-size:18px;"></h3><p id="ziroModalText" style="margin:0 0 18px; font-size:14px; color:#555; line-height:1.5;"></p><div id="ziroModalBtns" style="display:flex; gap:10px;"><button id="ziroModalCancel" style="flex:1; background:white; border:1px solid #ddd; padding:12px; border-radius:12px; font-weight:700;">Cancel</button><button id="ziroModalOk" style="flex:1; background:#0B6E4F; color:white; border:none; padding:12px; border-radius:12px; font-weight:800;">OK</button></div></div>';
  document.body.appendChild(m);
  m.addEventListener('click', function(e){ if(e.target === m) closeZiroModal(); });
  return m;
}
function closeZiroModal(){
  const m = document.getElementById('ziroModal');
  if(m) m.style.display = 'none';
}
function ziroNotify(title, text, btnText){
  const m = ensureModal();
  document.getElementById('ziroModalTitle').textContent = title;
  document.getElementById('ziroModalText').innerHTML = text;
  document.getElementById('ziroModalCancel').style.display = 'none';
  const ok = document.getElementById('ziroModalOk');
  ok.textContent = btnText || 'OK';
  ok.onclick = closeZiroModal;
  m.style.display = 'flex';
}
function ziroConfirm(title, text, onYes){
  const m = ensureModal();
  document.getElementById('ziroModalTitle').textContent = title;
  document.getElementById('ziroModalText').innerHTML = text;
  const cancel = document.getElementById('ziroModalCancel');
  cancel.style.display = 'block';
  cancel.onclick = closeZiroModal;
  const ok = document.getElementById('ziroModalOk');
  ok.textContent = 'Yes, Confirm';
  ok.onclick = function(){ closeZiroModal(); if(onYes) onYes(); };
  m.style.display = 'flex';
}
