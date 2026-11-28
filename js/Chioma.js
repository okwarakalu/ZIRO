// CHIOMA - User Only Assistant
(function(){
  function chioma(){
    const q = prompt('CHIOMA — How can I help?\n\nType: find cleaner / post job / buy icoin / sos');
    if(!q) return;
    const t = q.toLowerCase();
    if(t.includes('clean')||t.includes('find')) ZIRO.go('search');
    else if(t.includes('post')) ZIRO.go('post');
    else if(t.includes('icoin')||t.includes('wallet')||t.includes('buy')) ZIRO.go('wallet');
    else if(t.includes('sos')) ZIRO.sos();
    else alert('CHIOMA: I can help you find a worker, post a job, buy iCoin, or SOS. Try one of those.');
  }
  Object.assign(window.ZIRO, { chioma });
})();
