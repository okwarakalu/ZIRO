// ZIRO Notify - One popup style everywhere
function ziroNotify(title, msg, btnText, onBtn){
  const old = document.getElementById('ziroPopup');
  if(old) old.remove();
  const div = document.createElement('div');
  div.id = 'ziroPopup';
  div.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:99999; display:flex; align-items:center; justify-content:center; padding:20px;';
  div.innerHTML = '<div style="background:white; border-radius:18px; padding:22px; width:100%; max-width:340px; text-align:center;"><b style="font-size:17px;">'+title+'</b><p style="font-size:14px; color:#555; line-height:1.5; margin:10px 0 16px;">'+msg+'</p><button id="ziroPopupBtn" style="width:100%; background:#0B6E4F; color:white; border:none; padding:14px; border-radius:12px; font-size:14px; font-weight:900;">'+(btnText||'OK')+'</button></div>';
  document.body.appendChild(div);
  document.getElementById('ziroPopupBtn').onclick = function(){ div.remove(); if(onBtn) onBtn(); };
  div.onclick = function(e){ if(e.target===div) div.remove(); };
}
function ziroConfirm(title, msg, onYes){
  const old = document.getElementById('ziroPopup');
  if(old) old.remove();
  const div = document.createElement('div');
  div.id = 'ziroPopup';
  div.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:99999; display:flex; align-items:center; justify-content:center; padding:20px;';
  div.innerHTML = '<div style="background:white; border-radius:18px; padding:22px; width:100%; max-width:340px; text-align:center;"><b style="font-size:17px;">'+title+'</b><p style="font-size:14px; color:#555; line-height:1.5; margin:10px 0 16px;">'+msg+'</p><div style="display:flex; gap:10px;"><button id="ziroNo" style="flex:1; background:#F2F4F2; border:none; padding:13px; border-radius:12px; font-weight:800;">No</button><button id="ziroYes" style="flex:1; background:#0B6E4F; color:white; border:none; padding:13px; border-radius:12px; font-weight:900;">Yes</button></div></div>';
  document.body.appendChild(div);
  document.getElementById('ziroNo').onclick = function(){ div.remove(); };
  document.getElementById('ziroYes').onclick = function(){ div.remove(); if(onYes) onYes(); };
}
