// ZIRO CHAT - Rooms only. No transfer, No payment in chat.
(function(){
  function sendChat(){
    const i = document.getElementById('chatInput');
    if(!i || !i.value.trim()) return;
    const box = document.getElementById('chatBox');
    box.innerHTML += '<div style="text-align:right;margin:6px 0"><span style="background:#0A3D2A;color:#fff;padding:8px 12px;border-radius:12px;display:inline-block">'+i.value+'</span></div>';
    i.value='';
    setTimeout(()=>{ box.innerHTML += '<div style="margin:6px 0"><span style="background:#eee;padding:8px 12px;border-radius:12px;display:inline-block">Got it. I will confirm shortly.</span></div>'; }, 800);
  }
  Object.assign(window.ZIRO, { sendChat });
})();
