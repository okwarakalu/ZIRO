// js/notify.js - ZIRO Professional Notification - No more browser alert()
function ziroNotify(title, msg, btnText){
  let old = document.getElementById('ziroModal');
  if(old) old.remove();
  const m = document.createElement('div');
  m.id = 'ziroModal';
  m.innerHTML = '<div onclick="closeZiroModal()" style="position:fixed; inset:0; background:rgba(0,0,0,0.55); z-index:999; display:flex; align-items:center; justify-content:center; padding:20px;">'
    + '<div onclick="event.stopPropagation()" style="background:white; width:100%; max-width:360px; border-radius:16px; overflow:hidden;">'
    + '<div style="background:#0B6E4F; padding:18px; text-align:center;"><div style="width:44px; height:44px; background:white; border-radius:50%; margin:0 auto; display:flex; align-items:center; justify-content:center; font-size:22px;">✓</div><h3 style="color:white; margin:10px 0 0;">' + title + '</h3></div>'
    + '<div style="padding:18px; text-align:center;"><p style="font-size:14px; color:#333; line-height:1.5; margin:0;">' + msg + '</p>'
    + '<button onclick="closeZiroModal()" style="width:100%; background:#0B6E4F; color:white; border:none; padding:13px; border-radius:12px; font-weight:700; margin-top:16px; font-size:14px;">' + (btnText || 'Continue') + '</button></div></div></div>';
  document.body.appendChild(m);
}
function closeZiroModal(){
  const m = document.getElementById('ziroModal');
  if(m) m.remove();
}
function ziroConfirm(title, msg, onYes){
  let old = document.getElementById('ziroModal');
  if(old) old.remove();
  const m = document.createElement('div');
  m.id = 'ziroModal';
  m.innerHTML = '<div style="position:fixed; inset:0; background:rgba(0,0,0,0.55); z-index:999; display:flex; align-items:center; justify-content:center; padding:20px;">'
    + '<div style="background:white; width:100%; max-width:360px; border-radius:16px; overflow:hidden;">'
    + '<div style="padding:18px; text-align:center;"><h3 style="margin:0;">' + title + '</h3><p style="font-size:14px; color:#555; line-height:1.5;">' + msg + '</p>'
    + '<button onclick="window._ziroYes()" style="width:100%; background:#0B6E4F; color:white; border:none; padding:13px; border-radius:12px; font-weight:700;">Confirm</button>'
    + '<button onclick="closeZiroModal()" style="width:100%; background:white; border:1px solid #ddd; padding:13px; border-radius:12px; font-weight:700; margin-top:8px;">Cancel</button></div></div></div>';
  document.body.appendChild(m);
  window._ziroYes = function(){ closeZiroModal(); if(onYes) onYes(); };
}
